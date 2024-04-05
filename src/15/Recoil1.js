import Recoil2 from "./Recoil2";
import { useRecoilValue } from "recoil";
import { rcnt } from "./RecoilAtom";



export default function Recoil1() {

    const cnt = useRecoilValue(rcnt);
    
// const [cnt,setCnt]=useState(0);
// const handleUp = () => {
// console.log(cnt);
//   }
//   useEffect(()=>{
// console.log(cnt)
//   },[cnt])

  return (
    <div className="w-full h-full flex flex-col
                   text-2xl font-bold 
                   justify-center items-center
                   ">
       Recoil1 : {cnt}
       <Recoil2 />
      
    </div>
  )
}
