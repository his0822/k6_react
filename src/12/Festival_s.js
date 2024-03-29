import { useState, useEffect, useRef } from "react";
import Festival from "./Festival";
// import Festival from "./Festival";

export default function Festival_s() {
  const [tdata, setTdata] = useState();
  const [guname, setGuname] = useState();
  const [opTags, setOpTags] = useState();
  const [cardtags,setCardtags] =useState([]);

//select 값
const selRef = useRef();

//select 선택
const handleSelGu=()=>{
    console.log("selRef=",selRef.current.value); 
    let tm = tdata.filter((item) => item.GUGUN_NM === selRef.current.value)
                .map(item =>
                    <Festival key={item.UC_SEQ}
                        imgUrl={item.MAIN_IMG_NORMAL} 
                        title={item.TITLE}
                        ptitle={item.USAGE_DAY_WEEK_AND_TIME}
                        ktag={item.TRFC_INFO}
                        />
                        )                
    setCardtags(tm);
    
    // console.log(tm); 
    // setSelNames(tm);
}


//     if(!tdata) return;
    // let tm = tdata.map(item => item.GUGUN_NM == selRef);
    

    // let tm = tdata.map((item) => {
    //     return(
    //     <Festival key={item.UC_SEQ}
    //                  imgUrl={item.MAIN_IMG_NORMAL.replace('http://','https://')}
    //                  title={item.MAIN_TITLE}
    //                  ptitle={item.ADDR1}
    //                  ktag={item.ITEMCNTNTS}  />
    //     )
    // })
    // setTags(tm)
// },[handleSelGu])

//실제 fetch
  const getData = (url) => {
    fetch(url)
      .then((rsps) => rsps.json())
      .then((data) => setTdata(data.getFestivalKr.item))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`;
    url = url + `serviceKey=${process.env.REACT_APP_APIKEY}`;
    url = url + `&pageNo=1&numOfRows=40&resultType=json`;

    getData(url);
  }, []);

  //구정보 만들기
  useEffect(() => {
    if (!tdata) return;

    let tm = tdata.map((item) => item.GUGUN_NM);
    tm = new Set(tm);
    tm = [...tm].sort();
    // console.log("tm=",tm);
    setGuname(tm);
  }, [tdata]);

  //구 데이터
  useEffect(() => {
    if (!guname) return;
    // console.log(guname);
    const tm = guname.map((item) => {

        return (
            <option value={item} key={item}>{item}</option>
            )
    });
    
    setOpTags(tm)

  }, [guname]);



  return (
    
    <div className="w-full h-full flex flex-col
                    justify-start items-center
                    mt-10">
      <form className="w-3/5 mx-auto mb-10 flex justify-center items-center">
       
       <label  htmlFor="gu"
                className="flex item-center w-1/3  text-m font-bold text-gray-900">
          부산축제 정보선택
        </label>
        <select id="gu"
                onChange={handleSelGu}
                ref={selRef}
                className="w-2/3 bg-gray-50 border border-gray-300 text-gray-900 
                        text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                        block p-2.5">
          <option defaultValue>-------  구 선택  -------</option>
          {opTags}
          
        </select>
                
      </form>
    
    
        <div className="w-full p-2 grid grid-cols-1
                        md:grid-cols-3 
                        gap-2">
            {cardtags}
        </div>
    
            
   
</div>
  );
}   
