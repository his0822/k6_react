import BoxOfficeData from "./BoxOffice.json";
import { useState } from "react";

import BoxOfficeTbody from "../05_1/BoxOfficeTbody";
import BoxOfficeThead from "../05_1/BoxOfficeThead";
import BoxOfficeinfo from "../05_1/BoxOfficeinfo";

export default function BoxOfficeTb() {
  const boxList = BoxOfficeData.boxOfficeResult.dailyBoxOfficeList;
  console.log("boxList=", boxList);

  //state 변수
  const [selMv, setSelMv] = useState();

  return (
    <div
      className="w-full flex flex-col 
                    justify-center items-center"
    >
      <table className="w-4/5 border">
        <BoxOfficeThead />
        <BoxOfficeTbody boxList={boxList} setSelMv={setSelMv} />
        {/* <tfoot>
          <tr>
            <td colSpan={5} className="bg-slate-200">footer</td>
          </tr>
        </tfoot> */}
      </table>
     
      <BoxOfficeinfo selMv={selMv}/>
    </div>
  );
}
