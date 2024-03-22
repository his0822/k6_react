import { useState, useEffect } from "react";

function MyClockTime2() {
  const [currentTime, setCurrentTime] = useState();
  // const [tm,setTm] = useState(0);

  //컴포넌트 생성시 최초 1번 실행
  useEffect(()=>{
    const t = setInterval(()=>{
      setCurrentTime(new Date());
    },1000);
    console.log("[]=>", currentTime)

    return ()=>{clearInterval(t)}
    

  },[]);

    // tm변수가 바뀔때마다 실행
    // useEffect(()=>{
    //   console.log("[tm]=>", currentTime, tm)
    // },[tm]);



  return (
    <h1 className="font-bold text-2xl">
        {/* 현재시각  {currentTime.toLocaleTimeString()} */}
    </h1>
  );
}

export default MyClockTime2;
