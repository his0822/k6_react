export default function MyDiv3({d11,d21,d31}) {
 

    return (
        <div className="w-2/5 h-1/3  
                        flex flex-col
                        justify-center
                        items-center
                        bg-lime-500
                        text-lime-50 
                        ">
            <p className="w-4/5 flex justify-start
                        font-bold text-2xl
                        m-5">
               {`${d11} < ${d21} < ${d31}`}
                </p>
        </div>
  )
}
