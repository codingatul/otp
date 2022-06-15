import React, { useRef, useState } from "react";
import "./Input.css";

function NewInput() {
  const arr = [1, 2, 3, 4];
  const [value, setValue] = useState({
    // 1 : "",
    // 2 : "",
    // 3 : "",
    // 4 : "",
  });
  const refs = useRef({});
  useEffect(() => {}, [third]);

  return (
    <div>
      {arr.map((item, index) => {
        return (
          <input
            key={index}
            value={"" || value[item]}
            pattern="[0-9]*"
            maxLength={1}
            className="input__box"
            type="text"
            ref={(element) => {
              refs.current[index] = element;
            }}
            onChange={(e) => {
              // setValue(...value, (value[index] = e.target.value));

              // if (refs.current[0] === refs.current[0]) {
              //   console.log(refs.current[4]);
              //   console.log(refs.current[0]);

              //   console.log(refs.current[1]);

              //   console.log(refs.current[2]);
              //   console.log(refs.current[3]);
              // }

              if (value[item] && refs.current[index + 1]) {
                refs.current[index + 1].focus();
                if (refs.current[3].value) {
                  setTimeout(() => {
                    alert("otp submitted");
                  }, 1000);
                }
              }
            }}
          />
        );
      })}
    </div>
  );
}

export default NewInput;
