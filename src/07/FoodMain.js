import FoodCard from "./FoodCard";
import fdata from "./fooddata.json";
import TailButton from "../UI/TailButton";
import { useState } from "react";

export default function FoodMain() {
  // console.log(fdata)
 const [cards, setCards] = useState();
  
  


  let c1 = fdata.map(item => item["운영주체 분류"])
  c1 = new Set(c1);
  c1=[...c1];
  console.log(c1)
  
  const handleList = (citem => {
    
    console.log(citem);

    const tm = fdata.filter(item => item['운영주체 분류']===citem)    
                    .map((item) => {
                        return <FoodCard fobj={item} key={item["사업장명"]} />;
                    });

    setCards(tm);
    })

  const bt=c1.map(item => 
    <TailButton caption={item} 
                color="blue" 
                handleClick={()=>handleList(item)} />
    );

  return (
    <div>
      <div className="flex justify-center items-center
                        sticky top-0 z-10">
       {bt}
      </div>
      <div
        className="m-10 grid grid-cols-1
                        md:grid-cols-2
                        xl:grid-cols-3
                        gap-4
                        "
      >
        {cards}
      </div>
    </div>
  );
}
