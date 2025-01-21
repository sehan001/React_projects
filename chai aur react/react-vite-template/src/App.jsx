import React from "react";
import "./App.css";
import Button from "./Components/Button";
import { FiHome } from "react-icons/fi";

function App() {
  return (
    <>
      <Button
        label="Submit"
        type="btn-danger"
        isLoading={false}
        onClick={() => alert("Button clicked!")}
      />
      <Button
        label="More"
        type="btn-tertiary"
        color="blue"
        onClick={() => alert("More clicked!")}
      />
      <Button
        label="More"
        type="btn-secondary"
        color="blue"
        onClick={() => alert("More clicked!")}
      />
      <Button
        label="Cancel"
        type="btn-primary"
        color="green"
        onClick={() => alert("Cancel clicked!")}
        isLoading={false}
        disabled={false}
      />
      <Button
        label="Home"
        type="btn-primary"
        // onClick={handleHomeClick}
        icon={FiHome}
        iconPosition="left" // Pass the icon as a prop
      />
      <Button
        label="Home"
        type="btn-primary"
        // onClick={handleHomeClick}
        icon={FiHome} // Pass the icon as a prop/
        iconPosition="right" // Pass the icon as a prop
      />
      <Button
        label="Submit"
        type="btn-danger"
        isLoading={true}
        onClick={() => alert("Button clicked!")}
        disabled={false}
      />
      <Button
        label="Submit"
        type="btn-danger"
        isLoading={false}
        onClick={() => alert("Button clicked!")}
        disabled={true}
      />
    </>
  );
}

export default App;
