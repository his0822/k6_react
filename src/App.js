import './App.css';
import MainhHeader from './01/MainHeader';
import Hello from './01/Hello';
import Bye from './01/Bye';
import MyClock from './01_1/MyClock';

function App() {
  return (
    <> 
    {/* div로 전체를 묶어야 하는데, 태그 내부를 생략하고 <>만 작성해도 됨 */}
    <div className="App">
      {/* class 대신에 className 으로 작성 */}
      <Hello />
      <Bye />
      <MainhHeader />
      {/* <MainhHeader />      */}
      <Bye />
      <Hello />
      <MyClock />
     </div>
    </>
  );
}

//화살표 함수로 작성가능
// const App = () => {
//   return();
// }

export default App; //자바스크립트의 모듈형 함수이기 때문에 import export 형태를 갖추어야 함
