function Bye() {

  let n = Math.floor(Math.random() * 100) + 1;

  const st1 = {
    backgroundColor: "brown",
    color : "white"
  }

  return (

    
    <h2>
      <span style={st1}>Bye~</span>
      <span style={{ display: "inline-flex", margin: "10px", color: "pink" }}>{n}</span>
    </h2>
  );
}
export default Bye;
