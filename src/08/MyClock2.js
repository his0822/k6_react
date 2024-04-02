import MyClockImage2 from "./MyClockImage2";
import MyClockTime2 from "./MyClockTime2";

function MyClock2() {

    return(
        <div className="w-full h-full
                    flex flex-col justify-center items-center">
            <MyClockImage2 />
            <MyClockTime2 />
        </div>
    );
   
}; 

export default MyClock2; 