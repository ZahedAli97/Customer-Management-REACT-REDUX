import React from "react";

export default props => (
  <div>
    <h1>Detail - {props.match.params.id}</h1>
    <button onClick={props.history.goBack}>Back</button>
    <button onClick={() => props.history.push("/customers/add")}>New</button>
  </div>
);
