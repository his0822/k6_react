import { AiOutlineHome } from "react-icons/ai";
// import HelloCss from "./02/HelloCss";
import "./App.css";
// import MyDiv1 from "./03_1/MyDiv1";
import MyListMain from "./04/MyListMain";

export default function App() {
  return (
    <div  className="flex flex-col 
                  w-full max-w-screen-xl
                  h-screen
                  mx-auto
                  overscroll-y-auto" >
      <header className="flex justify-between
                      h-20
                      bg-yellow-500
                      items-center
                      p-10
                      text=xl 
                      font-bold
                      text-indigo-600
                      
                      ">
        <div>리액트실습</div>
        <div><AiOutlineHome />
          {/* <Homeicon /> */}
        </div>
      </header>
      <main className="grow flex 
                      flex-col
                      justify-center
                      items-center
                      ">
        {/* <div className="flex justify-center
                       items-center
                       h-full 
                       "> */}
        <MyListMain />
        
        {/* </div> */}
      </main>
      <footer className="flex justify-center
                      items-center
                     bg-yellow-600
                      h-20
                      "
      > © 2024 kimkyungmin. All rights reserved.
      </footer>
    </div>
  );
}