import { useEffect } from "react";
import { useState } from "react";
function App() {
  const [value, setValue] = useState(0);
  const [rotateValue, setRotateValue] = useState(-135);
  const [isClicked, setIsClicked] = useState(false);
  const [ClientX, setClientX] = useState(0);
  const [ClientY, setClientY] = useState(0);
  const RotateValueMax = 135;
  const RotateValueMin = -135;
  function onMouseDownHandler(e) {
    setValue(value + 1);
  }
  useEffect(() => {
    setRotateValue(RotateValueMin + value * 2.7);
  }, [isClicked]);
  return (
    <div className="bg-mygray-5 min-h-screen w-full flex flex-col items-center justify-center">
      <h1>{value}</h1>
      <p className="absolute top-0">{isClicked && "clicked"}</p>
      <p className="absolute top-3">x: {ClientX}</p>
      <p className="absolute top-10">y: {ClientY}</p>
      <div
        className={`knob bg-slate-800 w-10 h-10 rounded-full`}
        style={{ transform: `rotate(${rotateValue}deg)` }}
        onMouseDown={() => {
          setIsClicked(true);
        }}
        onMouseUp={() => {
          setIsClicked(false);
        }}
        onMouseMoveCapture={(e) => {
          if (isClicked) {
            setClientX(e.clientX);
            setClientY(e.clientY);
          }
        }}
      >
        <div className=" bg-white h-5 w-1 mx-auto rounded-full"></div>
      </div>
      <input
        type="range"
        name=""
        id="knob"
        min="0"
        max="100"
        value={value}
        className="mt-5"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
}

export default App;
