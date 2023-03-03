import React,{useState} from "react";

function Taxi() {
  const [CarTotal, setCarTotal] = useState(0);
  const [distance, setDistance] = useState(0);
  const [cartime, setCartime] = useState(0);

  const handleChageDistance = (e) => {
    e.target.value === "" ? setDistance(0) : setDistance(e.target.value);
  };
  const handleChageCartime = (e) => {
    e.target.value === "" ? setCartime(0) : setCartime(e.target.value);
  };
  const TaxiCal = () => {
    setCarTotal(
      parseFloat(distance) === 0
        ? 0 + parseFloat(cartime) * 3.0
        : parseFloat(distance) === 1
        ? 40 + parseFloat(cartime) * 3.0
        : parseFloat(distance) < 1.0
        ? 40 + parseFloat(cartime) * 3.0
        : parseFloat(distance) < 10
        ? 40 + parseFloat(distance) * 6.5 + parseFloat(cartime) * 3.0
        : parseFloat(distance) < 20
        ? 40 +
          10 * 6.5 +
          (parseFloat(distance) - 10) * 7.0 +
          parseFloat(cartime) * 3.0
        : parseFloat(distance) < 40
        ? 40 +
          10 * 6.5 +
          10 * 7.0 +
          (parseFloat(distance) - 10 - 10) * 8.0 +
          parseFloat(cartime) * 3.0
        : parseFloat(distance) < 60
        ? 40 +
          10 * 6.5 +
          10 * 7.0 +
          20 * 8.0 +
          (parseFloat(distance) - 10 - 10 - 20) * 8.5 +
          parseFloat(cartime) * 3.0
        : parseFloat(distance) < 80
        ? 40 +
          10 * 6.5 +
          10 * 7.0 +
          20 * 8.0 +
          20 * 8.5 +
          (parseFloat(distance) - 10 - 10 - 20 - 20) * 9.0 +
          parseFloat(cartime) * 3.0
        : 40 +
          10 * 6.5 +
          10 * 7.0 +
          20 * 8.0 +
          20 * 8.5 +
          (20 * 9.0 +
            (parseFloat(distance) - 10 - 10 - 20 - 20 - 20) * 10.5 +
            parseFloat(cartime) * 3.0),
      setCarTotal(0)
    );
  };
  return (
    <div>
      <hr />
      <br />
      <img
        src="https://www.wikihow.com/images/thumb/f/f3/Be-a-Taxi-Driver-Step-15-Version-3.jpg/v4-460px-Be-a-Taxi-Driver-Step-15-Version-3.jpg.webp"
        width="200px"
      />
      <br />
      <br />
      <span>ระยะทาง : </span>
      <input type="text" placeholder="0.00" onChange={handleChageDistance} />
      <br />
      <br />
      <span>ระยะเวลารถติด : </span>
      <input type="text" placeholder="0.00" onChange={handleChageCartime} />
      <br />
      <br />
      <button onClick={TaxiCal}>คำนวน</button>
      <br />
      <br />
      <span>ค่าแท็กซี่คิดเป็นเงิน : {CarTotal}</span>
    </div>
  );
}

export default Taxi;
