import React from "react";
import logo from "./logo.png";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "poppins",
      }}
    >
      <img src={logo} alt="Financial Dashboard Logo" />
      <h1
        style={{
          margin: 0,
          color: "#6EC177",
        }}
      >
        Hiya! Dev Miller is building something hoooge, stay tuned!
      </h1>
    </div>
  );
};

export default App;
