import React, { useEffect, useRef, useState } from "react";

function Ref() {
  const arr = [1, 2, 3];
  const refs = useRef({});

  useEffect(() => {
    console.log(refs.current[0]);
    console.log(refs.current[1]);
    console.log(refs.current[2]);
    console.log(refs);
    console.log(value);
    console.log(value[0]);
  }, []);

  const [value, setValue] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
  });

  return (
    <div>
      {arr.map((item, index) => {
        return (
          <div
            value={value[item]}
            key={index}
            ref={(element) => {
              refs.current[index] = element;
              console.log(element);
              console.log(value);
              console.log(item);
              console.log(index);
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default Ref;
