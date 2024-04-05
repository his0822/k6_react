
import './App.css';
import { FaHome } from "react-icons/fa";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// import MainHeader from './01/MainHeader';
// import Hello from './01/Hello'; 
// import MyClock from './01_1/MyClock';
// import HelloCss from './02/HelloCss';
// import MyDiv1 from './03_1/MyDiv1';
// import MyListMain from './04/MyListMain';
// import BoxOfficeTb from './05/BoxOfficeTb';
import Lotto from './06/Lotto';
// import FoodCard from './07/FoodCard';
import FoodMain from './07/FoodMain';
import MyClock2 from './08/MyClock2';
// import TrafficMain from './09/TrafficMain';
// import RefVal from './10/RefVal';
// import Refinput from './10/Refinput';
import BoxOffice  from './05/BoxOffice';
// import GallaryCard from './11/GallaryCard';
import GallaryMain from './11/GallaryMain';
// import FestivalMain from './12/FestivalMain';
import Festival_s from './12/Festival_s';
// import RouteMain from './13/RouteMain';
import Frcst from './14/Frcst';
// import UltraSrtFcrt from './14/UltraSrtFcrt';
// import VilageFcrt from './14/VilageFcrt';
import FrcstList from './14/FrcstList';
import RecoilMain from './15/RecoilMain';




function App() {

  return (
    <BrowserRouter>
    <div className='flex flex-col 
                    w-full max-w-screen-xl 
                    h-screen
                    mx-auto
                    overscroll-y-auto
                    '>
      <header className='flex justify-between items-center
                         h-20 p-10 
                         text-xl font-bold text-blue-800
                         bg-slate-200
                        '>
        <div className='font-bold text-cyan-700'>리액트실습</div>
        <div className='flex justify-end items-center'>
       
           <div className='mx-2 p-2 rounded-md 
                             hover:bg-blue-900 hover:text-white'>
              <Link to='/recoilmain'>리코일</Link>
            </div>
          
          <div className='mx-2 p-2 rounded-md 
                             hover:bg-blue-900 hover:text-white'>
              <Link to='/frcst'>예보</Link>
            </div>
            <div className='mx-2 p-2 rounded-md 
                             hover:bg-blue-900 hover:text-white'>
              <Link to='/festival_s'>축제</Link>
            </div>
            <div className='mx-2 p-2 rounded-md 
                             hover:bg-blue-900 hover:text-white'>
              <Link to='/gallery'>사진</Link>
            </div>
            <div className='mx-2 p-2 rounded-md 
                             hover:bg-blue-900 hover:text-white'>
              <Link to='/food'>푸드마켓</Link>
            </div>
            <div className='mx-2 p-2 rounded-md 
                             hover:bg-blue-900 hover:text-white'>
              <Link to='/box'>박스오피스</Link>
            </div>
            <div className='mx-2 p-2 rounded-md 
                             hover:bg-blue-900 hover:text-white'>
              <Link to='/lotto'>로또</Link>
            </div>
            <Link to='/'>
              <FaHome className='text-2xl text-black' />
            </Link>
          </div>
      </header>
      <main className='grow flex flex-col 
                            justify-center items-center 
                      '>

          {/* <BoxOfficeTb /> */}
          {/* <Lotto /> */}
          {/* <FoodCard /> */}
          {/* <FoodMain /> */}  
          {/* <MyClock2 /> */}
          {/* <MyClock /> */}
          {/* <TrafficMain /> */}
          {/* <RefVal />/ */}
          {/* <Refinput />/ */}
          {/* <BoxOffice /> */}
          {/* <GallaryCard /> */}
          {/* <GallaryMain /> */}
          {/* <FestivalMain /> */}
          {/* <Festival_s /> */}

          <Routes>
            {/* <Route path='/recoil' element={<Recoil1 />} /> */}
            <Route path='/recoilmain' element={<RecoilMain />} />
            <Route path='/' element={<MyClock2 />} />
            <Route path='/lotto' element={<Lotto />} />
            <Route path='/box' element={<BoxOffice />} />
            <Route path='/food' element={<FoodMain />} />
            <Route path='/gallery' element={<GallaryMain />} />
            <Route path='/festival_s' element={<Festival_s />} />
            <Route path='/frcst' element={<Frcst />} />
            {/* <Route path='/ultra/:dt/:area/:x/:y' element={<UltraSrtFcrt />} />
            <Route path='/vilage/:dt/:area/:x/:y' element={<VilageFcrt />} /> */}
            <Route path='/flist' element={<FrcstList />} />

          </Routes>
      </main>
      <footer className='flex justify-center items-center
                          h-20 bg-slate-800
                          text-base text-white'>
          ⓒ 2024 HwangInSang. All right reserved. 
      </footer>
    </div>
    </BrowserRouter>
  );
}


//화살표 함수로 작성가능
// const App = () => {

//   return ();
// }

export default App;