import getUsers from "./hooks/get-users";
import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const { execute, users } = getUsers();

  useEffect(() => {
    execute();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          {users.map((user) => {
            return (
              <li>
                {user.id} - {user.name}
              </li>
            );
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
