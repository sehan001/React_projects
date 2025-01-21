import { useState, React } from "react";
import Dropdown from "./Dropdown";
import items from "./constraint";

const Test = () => {
  const [selectedItem, setSelectedItem] = useState("");

  const handleDropdownChange = (value) => { // Updated to accept value directly
    setSelectedItem(value);
  };

  return (
    <div>
      <Dropdown
        label=""
        placeholder="Select"
        onChange={handleDropdownChange}
        list={items}
        disabled={false}
        value={selectedItem}
      />  
    </div>
  );
};

export default Test;
