import { useState } from "react";
import "./App.css";
import Input from "./Components/Input";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  return (
    <>
      <Input />
    </>
  );
}

export default App;
