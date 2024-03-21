import bank from './img/bank.png';
import market from './img/market.png';
import busan from './img/busan.png';
import { useState } from 'react';

export default function FoodCard({fobj}) {
   const fimg = fobj['구분'] === "기초푸드뱅크" ? bank :( fobj['구분'] === "기초푸드마켓" ? market : busan )

   const [isClick, setIsClick] = useState(false); 

   const handleIsClick = () => {
        setIsClick(!isClick);
    }

  return (
    <div className='w-11/12 flex justify-center items-center border'
        onClick={handleIsClick} >
      <div className='w-1/5 max-w-xl
                    bg-slate-100
                    flex justify-center items-center 
                    '>
        <img src={fimg} alt={fimg} />
      </div>
      <div className='w-4/5
                    m-2 '>
       
        <h1 className='font-bold text-2xl
                        m-2 '>
        {fobj["사업장명"]}
        </h1>
        <h2 className='font-bold text-xl
                        m-1'>
        {fobj["운영주체명"]}
        </h2>
        <div className='text-sm
                        m-1'>
        {fobj["사업장 소재지"]}
        </div>
        <div className='w-full text-xs
                        text-center
                        bg-slate-500
                        text-gray-50
                        p-1 mt-3
                        h-8
                        flex 
                        justify-left 
                        items-center 
                        truncate'>
        { isClick && `Tel. ${fobj["연락처(대표번호)"]}, Fax. ${fobj["팩스번호"]}`}
        </div>

      </div>
    </div>
  )
}
