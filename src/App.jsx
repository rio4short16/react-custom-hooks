import { useEffect, useState } from "react";
import useFetch from "./useFetch";

function App() {
  const users = useFetch("https://jsonplaceholder.typicode.com/users");
  return (
    <div>
      <ul>
        {users[0].map((user, index) => (
          <li key={index}>
            {user.name} | {user.email} | {user.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
