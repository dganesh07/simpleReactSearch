import React, { useState, useRef, useEffect } from "react";
import Json from "./db.json";
import "./App.scss";

const App = () => {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchString, setSearchString] = useState("");
  const inputRef = useRef("search");

  let search = searchString.trim().toLowerCase();
  let _users = users;

  const handleChange = e => {
    debugger;
    setSearchString(e.target.value);
  };

  if (search.length > 0) {
    _users = _users.filter(function(user) {
      return user.name.toLowerCase().match(search);
    });
  }

  useEffect(() => {
    setUsers(Json);
  }, []);

  return (
    <div className="App container">
      <h3 className="main-header">Simple React Search</h3>
      <div>
        <div className={open ? "search open" : "search"}>
          <input
            type="text"
            value={searchString}
            onChange={handleChange}
            className="search-box"
            placeholder="hmm"
          />
          <span
            className="search-button"
            onClick={() => setOpen(open => !open)}
          >
            <span className="search-icon" />
          </span>
        </div>
        <ul className="data-list">
          {_users.map(l => {
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
