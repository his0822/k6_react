import "./Hello.css";

function Hello() {
  let n = Math.floor(Math.random() * 100) + 1;

  const st1 = {
    backgroundColor: "darkblue",
    color: "white",
  };

  //   let s = '';
  //   if (n % 2 === 0 ) s = "짝수";
  //   else s = "홀수";

  let x;
  const c = new Date();

  return (
    <h1>
      
        {c.toLocaleTimeString()}
      

      <span style={st1}>Hello</span>
      <span style={{ display: "inline-flex", margin: "10px" }}>
        {/* {n < 10 && "0"}
        {n} */}

        {n < 10 ? `0${n}` : n}
      </span>
      {/* {s} */}
      {/* { n%2 === 0 ? "짝수" : "홀수"} */}
      {n % 2 === 0 ? (
        <span styel={{ color: "red" }}>짝수</span>
      ) : (
        <span sthle={{ color: "blue" }}>홀수</span>
      )}
      {n % 2 === 0 && "🍎"}
      {n % 2 === 1 && "🍺"}
      <p>{x || "x는 undefinded 입니다."}</p>
      <span style={{ color: n % 2 === 0 ? "red" : "yello" }}></span>
    </h1>
  );
}

export default Hello;
