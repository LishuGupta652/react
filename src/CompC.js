import React from "react";
import { Name } from "./App";

const CompC = () => {
  return (
    <Name.Consumer>
      {(name) => {
        return <h1>This is value {name}</h1>;
      }}
    </Name.Consumer>
  );
};

export default CompC;
