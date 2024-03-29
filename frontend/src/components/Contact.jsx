import React from "react";

const Contact = ({ contact }) => {
  return (
    <div>
      <h2>Contact Details</h2>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      {contact.note && <p>Note: {contact.note}</p>}
    </div>
  );
};

export default Contact;
