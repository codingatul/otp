// import { useRef, useState } from "react";
import "./App.css";
import NewInput from "./NewInput";
// import Input from "./Input";
// import Ref from "./Ref";

function App() {
  // const [value, setValue] = useState({
  //   pin1: "",
  //   pin2: "",
  //   pin3: "",
  //   pin4: "",
  // });

  // const pin1ref = useRef(null);
  // const pin2ref = useRef(null);
  // const pin3ref = useRef(null);
  // const pin4ref = useRef(null);

  return (
    <div className="App">
      <h1>OTP</h1>
      <div className="otp">
        <div className="otp__box">
          <NewInput />
          {/* <Input
            refe={pin1ref}
            value={"" || value.pin1}
            onChange={(e) => {
              setValue((v) =>
                e.target.validity.valid ? { pin1: e.target.value } : v
              );
              if (value.pin1 !== "") {
                pin2ref.current.focus();
              }
            }}
          />

          <Input
            refe={pin2ref}
            value={"" || value.pin2}
            onChange={(e) => {
              setValue((v) =>
                e.target.validity.valid ? { pin2: e.target.value } : v
              );
              if (value.pin2 !== "") {
                pin3ref.current.focus();
              }
            }}
          />

          <Input
            refe={pin3ref}
            value={"" || value.pin3}
            onChange={(e) => {
              setValue((v) =>
                e.target.validity.valid ? { pin3: e.target.value } : v
              );
              if (value.pin3 !== "") {
                pin4ref.current.focus();
              }
            }}
          />

          <Input
            refe={pin4ref}
            value={"" || value.pin4}
            onChange={(e) => {
              setValue((v) =>
                e.target.validity.valid ? { pin4: e.target.value } : v
              );
              if (value.pin4 !== "") {
                setTimeout(() => {
                  alert("otp submitted");
                }, 1000);
              }
            }}
          /> */}
        </div>
      </div>
      {/* <Ref /> */}
    </div>
  );
}

export default App;
