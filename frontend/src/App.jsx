import React, { useEffect, useState } from "react";
import "./App.css";
import ContactList from "../src/components/ContactList";
import AddContactForm from "../src/components/AddContactForm";
import axios from "axios";

function App() {
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };
    useEffect(() => {
      axios
        .get("http://localhost:8000/api/contacts")
        .then((response) => {
          setContacts(response.data);
        })
        .catch((error) => {
          console.error("Error fetching contacts:", error);
        });
    }, []);
 
  return (
    <div className="container">
      <h1 className="m-3">Personal Contact Management</h1>
      <ContactList contacts={contacts} setContacts={setContacts} />
      <AddContactForm onAdd={handleAddContact} />
    </div>
  );
}

export default App;
