import { useState } from "react";
import TailBall from "../UI/TailBall";
import TailButton from "../UI/TailButton";

export default function Lotto() {
  
    const [ballTags, setBallTags] = useState();
    const handleLottoClick = () => {
    
    let nums = [];
    while(nums.length < 7){
        let n = Math.floor(Math.random()*45+1);
        if(!nums.includes(n)) nums.push(n);
    }
    

    const tm = nums.map ((item, idx) => {
        if(idx === 5) { 
            return <>
            <TailBall n={item} key={`ball${item}`} /> 
            <span className="font-bold text-3xl">+</span> 
            </>
        }else{
            return <TailBall n={item} key={`ball${item}`} />
        }
        } 
    ) 
    setBallTags(tm);
}
  
  
//   console.log(list)
  return (
    <div className="flex flex-col justify-center items-center">
        <div className="flex justify-between items-center m-5">
            {ballTags}
        </div>
        <div className="flex justify-between items-center" m-5>
            <TailButton
                caption="로또번호생성"
                color="blue"
                handleClick={handleLottoClick}
            />
        </div>
     
    </div>
  );
}
