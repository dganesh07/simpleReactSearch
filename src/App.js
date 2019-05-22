import React from "react";
import Json from "./db.json";

function App() {
  return (
    <div className="App">
      <h3>Simple React Search</h3>
      <div>
        <input type="text" value="" onChange="" placeholder="type name here" />
        <ul>
          {Json.map(l => {
            return (
              <li>
                {l.name} <a href="#">{l.email}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
