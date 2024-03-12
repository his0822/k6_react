function MyClockTime() {
  const a = new Date();
  return (
    <p>
        현재시각  {a.toLocaleTimeString()}
    </p>
  );
}

export default MyClockTime;
