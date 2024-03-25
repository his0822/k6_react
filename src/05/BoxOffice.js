import { useState, useEffect, useRef } from "react";

import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { CgLoadbar } from "react-icons/cg";

import Tailinput from "../UI/Tailinput";

export default function BoxOffice() {
  const [boxList, setBoxList] = useState();
  const [selMv, setSelMv] = useState();
  const boxRef = useRef();

  useEffect(() => {
    const tm = boxList.map((item) => (
      <tr
        key={item.movieCd}
        onClick={() => {
          handleClick(item);
        }}
        className="h-10 p-2 
                     hover:bg-blue-100 hover:font-bold"
      >
        <td className="text-center">
          <span
            className=" inline-flex w-3/5
                            p-1
                            justify-center items-center
                            bg-blue-900 text-white
                            text-sm"
          >
            {item.rank}
          </span>
        </td>
        <td>{item.movieNm}</td>
        <td className="text-right">
          {parseInt(item.salesAmt).toLocaleString()}원
        </td>
        <td className="text-right">
          {parseInt(item.audiAcc).toLocaleString()}명
        </td>
        <td className="pt-3 flex justify-center items-center">
          {parseInt(item.rankInten) === 0 ? (
            <CgLoadbar />
          ) : parseInt(item.rankInten) > 0 ? (
            <FaArrowUp className="text-red-600" />
          ) : (
            <FaArrowDown className="text-blue-600" />
          )}
          {parseInt(item.rankInten) !== 0 && Math.abs(item.rankInten)}
        </td>
      </tr>
    ));
    setBoxList(tm);
  }, [boxList]);

  //boxoffice 데이터 fetch
  const getData = (dt) => {
    let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
    url = url + `key=${process.env.REACT_APP_MV_API}&targetDt=${dt}`;

    console.log(url);
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => console.log(data.boxOfficeResult.dailyboxOfficeList));
  };
  const handleSelDate = () => {
    console.log("선택날짜:", boxRef.current.value.replaceAll("-", ""));
    getData();
  };
  const handleClick = (mv) => {
    // console.log(mv)
    // 할당연산자로 state 변수 변경 불가 => 업데이트함수 변경
    // selMv = mv ;
    setSelMv(mv);
  };

  return (
    <div  className="w-full flex flex-col 
                    justify-center items-center">
      <div className="flex items-center">
        <span className="text-sm mx-5 font-bold">날짜 선택 :</span>
        <Tailinput
          type="date"
          inputRef={boxRef}
          handleChange={handleSelDate}
          ph=""
        />
      </div>
      <div
        className="w-4/5 h-10 flex
                  justify-center items-center
                  text-bold text-center
                   bg-purple-900 text-yellow-100" >
        {selMv === undefined && "영화를 선택해 주세요."}
        {selMv &&
          `[${selMv.movieCd}] ${selMv.movieNm} - 
      누적관객수 : ${parseInt(selMv.salesAcc).toLocaleString()}명
      누적매출액 : ${parseInt(selMv.audiAcc).toLocaleString()}원`}
      </div>
    </div>
  );
}
