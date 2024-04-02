import clockImg from './myclock.png' ;

function MyClockImage() {
  return (
    <div style={{margin:"50px 10px"}}>
      <img src={clockImg} alt="시계" 
           style={{width:"300px", height:"300px"}}/>
    </div>
  )
}

export default MyClockImage ;