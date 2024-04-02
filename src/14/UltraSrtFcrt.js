import { useState, useEffect, useRef} from "react";
import { useParams } from "react-router-dom";
import TailSelect from "../UI/TailSelect";
import getcode from "./getcode.json";

export default function UltraSrtFcrt() {
  const dt = useParams().dt;
  const area = useParams().area;
  const x = useParams().x;
  const y = useParams().y;
  // console.log(dt,area,x,y);
  const gubun = "초단기예보";

  //select박스 옵션
  const ops = getcode
    .filter( item => item["예보구분"] === gubun)
    .map( item => `${item["항목명"]}(${item["항목값"]})`);

  const itemRef = useRef();

  //데이터 가져오기
  // const [date,setDate] =useState();
  // const [time,setTime] = useState();
  // const [nx,setNx ] = useState();
  // const [ny,setNy ] = useState();

  //fetch data state 변수로 저장
  const [tdata, setTdata] = useState([]);

  const [trtags, setTrtags] = useState([]);

  const [selitem, setSelItem] = useState();
  const [selitemName, setSelItemName] =useState();

  //select 박스 함수 선택
  const handleItem = () => {
    if(itemRef.current.value === ''){
      alert('항목을 선택하세요.')
      itemRef.current.focus();
      setTrtags([])
      return;
    }

      // console.log(itemRef.current.fcstValue);
      setSelItem(itemRef.current.value.split('(')[0].replace(')',''));
      setSelItemName(itemRef.current.value.split('(')[1].replace(')',''));
    
  };

  //fetch함수
  const getData = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();
    // console.log(data.response.body.items.item);
    setTdata(data.response.body.items.item);
  };

  useEffect(() => {
    let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?`;
    url = url + `serviceKey=${process.env.REACT_APP_APIKEY}`;
    url = url + `pageNo=1&numOfRows=1000&dataType=json&`;
    url = url + `base_date=${dt}base_time=0630&nx=${x}&ny=${y}`;
    // console.log(url);
    getData(url);
  }, []);

  //tdata가 저장되었을 때
  useEffect(() => {
    // console.log(tdata);
    let tm = tdata.filter(item => item['category'] === selitem)
                .map(item => (
      <tr 
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {selitemName}
        </th>
        <td className="px-6 py-4">
          {`${item.fcstDate.substring(0, 4)}-${item.fcstDate.substring(4,6)}-${item.fcstDate.substring(6, 8)}`}
        </td>
        <td className="px-6 py-4">
          {`${item.fcstTime.substring(0, 2)} : ${item.fcstTime.substring(2,4)}`}
        </td>
        <td className="px-6 py-4">{item.fcstValue}</td>
      </tr>
    ));
    setTrtags(tm);
  }, [selitem]);

  return (
    <div
      className="w-full h-full flex flex-col
    justify-start items-center">
      <div className="w-full relative overflow-x-auto shadow-md sm:rounded-lg">
        <div>{`${area} ${gubun} (${dt.substring(0, 4)}-${dt.substring(4, 6)}-${dt.substring(6, 8)}) 일자`}</div>
        <div>
          <TailSelect
            ops={ops}
            opDefault="---항목선택---"
            selRef={itemRef}
            handleSel={handleItem}
          />
        </div>
        <table className="w-10/12 text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-1">
                항목명
              </th>
              <th scope="col" className="px-6 py-1">
                예측일자
              </th>
              <th scope="col" className="px-6 py-1">
                예측시간
              </th>
              <th scope="col" className="px-6 py-3">
                예보값
              </th>
            </tr>
          </thead>
          <tbody>{trtags}</tbody>
        </table>
      </div>
    </div>
  )
}
