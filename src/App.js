import { AiOutlineHome } from "react-icons/ai";
import HelloCss from "./02/HelloCss";
import "./App.css";

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
      <main className="grow" >
        <div className="flex justify-center
                       items-center
                       h-full 
                       ">
        <HelloCss />
        </div>
      </main>
      <footer className="flex justify-center
                      items-center
                      text-
                      bg-yellow-600
                      h-20
                      "
      > © 2024 kimkyungmin. All rights reserved.
      </footer>
    </div>
  );
}