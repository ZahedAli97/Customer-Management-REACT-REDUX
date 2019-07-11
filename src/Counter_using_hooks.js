import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

function Counter() {
  const [count, setCount] = useState(0);
  const [dictionary, setDictionary] = useState({ message: "Counter app" }); //You can use strings....using objects just to show example
  useEffect(() => {
    (async function() {
      document.title = `Current Counter = ${count}`;
      let info = await fetch("https://api.github.com/users/ZahedAli97").then(
        r => r.json()
      );
      console.log(info);
    })();
  }, [dictionary.message]);
  return (
    <>
      <h2
        onClick={() =>
          setDictionary({ message: `Current counter is ${count}` })
        }
      >
        {dictionary.message}
      </h2>
      <button onClick={() => setCount(count + 1)}>INC</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>INC</button>
    </>
  );
}

function mapStateToProps(state) {
  return {
    count: state.counter.counter
  };
}

let connectedComponent = connect(mapStateToProps);
export default connectedComponent(Counter);
