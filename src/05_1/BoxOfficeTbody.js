
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

export default function BoxOfficeTbody({movieCd, rank, rankInten,movieNm,audiCnt,  }) {
  
  
  return (
    <tbody>
      const trs = boxList.map((item) => {
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
});
    </tbody>
  )
}
