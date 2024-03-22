import TailButton from "../UI/TailButton"


export default function TrafficNav({ title, category, sel, setSel }) {

    const handleBtClick = (item) =>{

        setSel(item);

    }

    const bts = category.map(item =>

        <TailButton caption={item} 
                    color={item ===sel ? "red" : "blue"}
                    key={item}
                    handleClick = {()=> handleBtClick(item)}  />
        );
  return (
    <div className="m-3 w-11/12 flex
                    justify-between items-center
                    ">
      <div className="flex justify-center items-center text-xl font-bold">
        교통사고 {title}
      </div>
      <div className="flex justify-right items-center">
        {bts}
      </div>
    </div>
  )
}
