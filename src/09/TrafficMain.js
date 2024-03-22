
import TrafficNav from "./TrafficNav";
import { useState, useEffect, useImperativeHandle } from "react"

export default function TrafficMain() {

    const [tdata, setTdata]= useState(); //전체 fetch데이터(17개 배열)
    const [c1,setC1] = useState(); // 대분류(중복제거)
    const [selC1,setSelC1] = useState(); //선택된 대분류

    const [c2,setC2] = useState(); // 중분류(중복제거)
    const [selC2,setSelC2] = useState(); //선택된 중분류

    const[detail, setDetail] = useState(); //상세정보
    const[info, setInfo] = useState();

    // useEffect(()=>{},[]);
    //[] : dependency array, 비어있으면 렌더링 이후 리액트는 무조건 한번 실행

    const getDataFetch = (url) => {
        fetch(url)
        .then(resp => resp.json())
        .then(data => setTdata(data.data))
        .catch(err => console.log("err=",err));
    }
    //fetch는 비동기방식, 데이터를 가져오는 작업이 내가 하는 다른 작업과 독립적으로 구동
    //비동기방식에서 하나의 독립적인 작업이 종료되면, then으로 작성된 작업이 이어서 진행됨
console.log("rawdata:",tdata);

    useEffect(()=>{
        let url = `https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?`;
        url = `${url}page=1&perPage=20&`;
        url = `${url}serviceKey=${process.env.REACT_APP_APIKEY}`;
        getDataFetch(url);

    },[]);

    useEffect(()=>{
        if ( !tdata ) return;

        let tm = tdata.map(item => item.사고유형_대분류);
        // console.log("tm=>",tm)
        // console.log("tdata=>",tdata)
        // const c1 = tdata.filter(item => item['사고유형 대분류'])    
        // c1 = new Set(c1);     
        tm = new Set(tm);
        tm = [...tm]; 
        // console.log("중복제거한 tm =",tm);        
        setC1(tm);
        

    },[tdata]);

    useEffect(()=>{
        console.log("selC1",selC1);

        if ( !tdata ) return;
        let tm = tdata.filter(item => item.사고유형_대분류 === selC1)
                        .map(item => item.사고유형_중분류);
        setC2(tm);
        setSelC2('');
        setInfo('');


    },[selC1]);

    useEffect(()=>{
        console.log("selC2",selC2);
        if ( !tdata ) return;
       
        let tm = tdata.filter(item=> item.사고유형_대분류 === selC1 && item.사고유형_중분류 === selC2)
                    //  /   .map(item => item)
        // console.log("중분류이후 tm:",tm)
        setDetail(tm[0]);
    
    },[selC2]);


    useEffect(()=>{
        console.log("detail:", detail);
        if ( !tdata ) return;
       
            const keyArr= ['사고건수','사망자수','중상자수','경상자수','부상신고자수']

            let tm = keyArr.map( k => 
                <div key={k} className="m-5 border w-10/12 flex justify-center items-center">
                <div className=" flex justify-center items-center bg-slate-300 w-1/2 h-10 font-bold ">{k}</div>
                <div className="flex justify-center items-center w-1/2 font-bold">{parseInt(detail[k]).toLocaleString()}</div>
                </div>
            );
            setInfo(tm);
       

    },[detail]);

    
        

    // useEffect(()=>{
    //     if ( !tdata ) return;

    //     let tm = tdata.map(item => item.사고유형_중분류);
    //     // console.log("tm=>",tm)
    //     // console.log("tdata=>",tdata)
    //     // const c1 = tdata.filter(item => item['사고유형 대분류'])    
    //     // c1 = new Set(c1);     
    //     tm = new Set(tm);
    //     tm = [...tm]; 
    //     console.log("중복제거한 tm =",tm);        
    //     setC1(tm);

    // },[tdata]);

    return (
        
        <div className="w-full h-full mt-5
                        flex flex-col
                        
                        ">
        {c1 && <TrafficNav title="대분류" 
                    category={c1}
                    sel={selC1}
                    setSel={setSelC1} />
        }
       
        {c2 && <TrafficNav title="중분류" 
                    category={c2}
                    sel={selC2}
                    setSel={setSelC2} />
        }   
        <div className="full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        
            {info}

        </div>
</div>

                    
     )
}
