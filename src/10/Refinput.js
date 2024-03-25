import Tailinput from "../UI/Tailinput"
import TailButton from "../UI/TailButton"
import { useState,useEffect, useRef } from "react"

export default function Refinput() {
  const inputRef = useRef();
  const [bts, setBts]=useState([]);
  const [tags,setTags] =useState([]);

  const handleAdd = ()=>{
    if(inputRef.current.value === ""){
      alert('값을 입력하세요')
      inputRef.current.focus();
      
    }
    
    
    setBts([inputRef.current.value , ...bts]);

    // console.log(inputRef.current.value);
  }
  const handleRemove = ()=>{
    setBts([]);
    inputRef.current.value = '';
    inputRef.current.focus();
  }

  useEffect(()=>{
    inputRef.current.value = '';
    inputRef.current.focus();
    let tm = bts.map ( (item, idx) => {
      return(
      <TailButton caption={item} 
                  color="orange"
                 key ={`bt${idx}`} />
       
  )});
      setTags(tm);

  },[bts]);

  return (
    <div className="w-11/12 flex flex-col 
                    bg-slate-300
                    justify-center items-center">
    
    
    <div className="w-full flex justify-center items-center">
      <input type="text"
            ref={inputRef}            
            className="bg-gray-50 border
                        border-gray-300
                        text-gray-900           
                        text-sm rounded-lg
                        focus:ring-blue-500
                        focus:border-blue-500
                        block  w-1/2 p-2.5"
            placeholder="값입력" />
      <TailButton caption="등록" 
                  color="blue"
                  handleClick = {handleAdd}  />
      <TailButton caption="취소" 
                  color="blue"
                  handleClick = {handleRemove}  />
    </div>
    
    <div className="w-full flex border p-5 bg-slate-100">
      {tags}
    </div>
    </div>
  )
}
