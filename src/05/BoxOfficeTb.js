import BoxOfficeData from "./BoxOffice.json";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useState } from "react";

export default function BoxOfficeTb() {
  const boxList = BoxOfficeData.boxOfficeResult.dailyBoxOfficeList;
  console.log("boxList");

  const [selMv, setSelMv] = useState();

  const handleClick = (mv) => {
    console.log(mv);
    setSelMv(mv);
  };
  const trs = boxList.map((item) => (
    <tr
      key={item.movieCd}
      className="h-10 
                     hover:bg-neutral-400 
                       hover:font-bold"
      onClick={() => {
        handleClick(item);
      }}
    >
      <td className="text-center ">
        <span
          className="
                                    inline-flex w-11/12 rounded-lg p-1
                                    justify-center items-center
                                    "
        >
          {item.rank}
        </span>
      </td>
      <td>{item.movieNm}</td>
      <td className="text-right">
        {item.audiCnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}명
      </td>
      <td className="text-right">
        {parseInt(item.salesAmt).toLocaleString()}원
      </td>
      <td
        className="flex h-10
                            justify-center items-center
                            "
      >
        {parseInt(item.rankInten) === 0 ? (
          <FaMinus className="text-lime-700" />
        ) : parseInt(item.rankInten) > 0 ? (
          <FaArrowUp className="text-red-600" />
        ) : (
          <FaArrowDown className="text-blue-700" />
        )}
        {parseInt(item.rankInten) !== 0 && Math.abs(item.rankInten)}
      </td>
    </tr>
  ));

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <table className="w-4/5 border">
        <thead>
          <tr className="h-10 text-center bg-blue-700 text-white">
            <th className="w-1/10">순위</th>
            <th>영화명</th>
            <th className="w-1/5">관객수</th>
            <th className="w-1/5">매출액</th>
            <th className="w-1/8">증감율</th>
          </tr>
        </thead>
        <tbody>{trs}</tbody>
      </table>
      <div
        className="w-4/5 h-10 flex 
                justify-center
                items-center
                text-center bg-blue-700 text-white"
      >
        {selMv === undefined && "영화를 선택해주세요."}
        {selMv &&
          `[${selMv.movieCd}] ${selMv.movieNm} -- 
        누적관객수 : ${parseInt(selMv.audiAcc).toLocaleString()}명 /  
        누적매출액 : ${parseInt(selMv.salesAcc).toLocaleString()}원 `}
      </div>
    </div>
  );
}
