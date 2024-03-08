import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <> 
    {/* div로 전체를 묶어야 하는데, 태그 내부를 생략하고 <>만 작성해도 됨 */}
    <div className="App">
      {/* class 대신에 className 으로 작성 */}
      <header className="App-header">
        <p>
          K-digital 6기 황인상
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
    <div>
      402호
    </div>
    </>
  );
}

export default App;
