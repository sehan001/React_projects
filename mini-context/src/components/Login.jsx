import { useState, useContext } from "react";
import Usercontext from "../context/Usercontext";

const Login = () => {
  const [username, Setusername] = useState("");
  const [password, Setpassword] = useState("");
  const { setUser } = useContext(Usercontext);

  const handlesubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <h2>login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => Setusername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => Setpassword(e.target.value)}
      />
      <button onClick={handlesubmit}>submit</button>
    </div>
  );
};

export default Login;
