import React, { useState } from "react";
import Json from "./db.json";
import "./App.scss";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="App container">
      <h3 className="main-header">Simple React Search</h3>
      <div>
        <div className={open ? "search open" : "search"}>
          <input type="search" className="search-box" />
          <span
            className="search-button"
            onClick={() => setOpen(open => !open)}
          >
            <span className="search-icon" />
          </span>
        </div>
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
};

export default App;
