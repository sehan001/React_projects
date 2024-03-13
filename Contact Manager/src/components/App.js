import React from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
// import ContactCard from "./ContactCard";
import { useState } from "react";
function App() {
  const [contact, setcontact] = useState([]);
  const AddContactHandle = (contact) => {
    console.log(contact);
    setcontact([...contact, contact]);
  };
  return (
    <div className="ui container">
      <Header />
      <AddContact AddContactHandle={AddContactHandle} />
      <ContactList contact={contact} />
    </div>
  );
}

export default App;
