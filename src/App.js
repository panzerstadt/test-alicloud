import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Test from "./component/VideoGallery";

function App() {
  const [type, setType] = useState("gallery");

  return (
    <div className="App">
      <header className="App-header">
        <p>v1</p>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>select test type</h1>
        <select onChange={e => setType(e.target.value)}>
          <option value="all">Basic Test</option>
          <option value="local">Local files stress test</option>
          <option value="embed">Embed files stress test</option>
        </select>
        <Test type={type} />
      </header>
    </div>
  );
}

export default App;
