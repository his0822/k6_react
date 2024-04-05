import TailButton from "../UI/TailButton"
import TailInput from "../UI/TailInput"
import GallaryCard from "./GallaryCard";
import { useState,useRef, useEffect } from "react";


export default function GallaryMain() {
    const keyword = useRef();
    const [tdata,setTdata] = useState();
    const [tags,setTags] = useState();


    useEffect(()=>{
        if(!tdata) return;
        //중괄호를 사용하는 경우, return( ) 안으로 코드를 입력      
        let tm = tdata.map((item) => {
            return(
            <GallaryCard key={item.galContentId}
                         imgUrl={item.galWebImageUrl.replace('http://','https://')}
                         title={item.galTitle}
                         ptitle={item.galPhotographyLocation}
                         ktag={item.galSearchKeyword}  />
            )
        });

         //중괄호를 사용하지않는 경우, 소괄호( ) 또는 생략으로 코드를 입력      
        //  let tm = tdata.map((item) => 
            
        //     <GallaryCard key={item.galContentId}
        //                  imgUrl={item.galWebImageUrl.replace('http://','https://')}
        //                  title={item.galTitle}
        //                  ptitle={item.galPhotographyLocation}
        //                  ktag={item.galSearchKeyword}  />
            // });


        setTags(tm);
    },[tdata]);

    const getData = (w) => {
        // console.log(w);
        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`;
        url = url + `serviceKey=${process.env.REACT_APP_APIKEY}`;
        url = url + `&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`;
        url = url + `&keyword=${w}&_type=json`;

        // console.log(url);
        fetch(url)
        .then(rsps => rsps.json())
        .then(data => setTdata(data.response.body.items.item))
        .catch(err => console.log(err));
    };

    const handleFetch = () => {
        
        if(keyword.current.value === ''){
            alert("키워드를 입력하세요");
        }else{
            let w = encodeURI(keyword.current.value)
            getData(w)
        }

    };

    const handleClear = () => {
        // console.log(keyword.current.value)
        setTdata('');
        setTags('');
        keyword.current.value='';
        
    };

  return (
    <div className="w-10/12 flex flex-col
                    h-full justify-start items-center m-3">
        <div className="w-full grid grid-cols-1 
                        bg-slate-100
                        md:grid-cols-3 gap-4">
            <div className="p-2">
                <TailInput type="text"
                            inputRef = {keyword}
                            ph = "키워드입력"
                             />
            </div>
            <div className="px-3">
                <TailButton caption = "조회"
                            color = "blue"
                            handleClick = {handleFetch} />
            </div>
            <div className="px-3">
                <TailButton caption = "취소"
                            color = "blue"
                            handleClick = {handleClear} />
            </div>
        
        </div>
        <div className="w-full grid grid-cols-1 
                        bg-slate-100
                        md:grid-cols-2 gap-3">
            {tags}
        </div>
    </div>
  )
}
