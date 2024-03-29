import React, { useState, useEffect } from "react";
import axios from "axios";

const ContactList = ({ contacts,setContacts }) => {
  const deleteContact = (id) => {
    axios
      .delete(`http://localhost:8000/api/contacts/${id}`)
      .then(() => {
        setContacts(contacts.filter((contact) => contact.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting contact:", error);
      });
  };

  return (
    <div>
      <h2 className="m-3">Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>email</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr key={contact.id}>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                  <td>
                    <button
                      onClick={() => deleteContact(contact.id)}
                      btn
                      btn-primary
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
