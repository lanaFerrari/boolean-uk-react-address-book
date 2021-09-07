
import ContactsList from "./components/ContactsList";
import CreateContactForm from "./components/CreateContactForm";
import "./styles.css";
import React, { useEffect, useState } from 'react';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [hideForm, setHideForm] = useState(true);

  // [TODO] Write a useEffect to fetch contacts here...




  return (
    <>
      <ContactsList
        contacts={contacts}
        hideForm={hideForm}
        setHideForm={setHideForm}
      />
      <main>{!hideForm && <CreateContactForm contacts ={contacts} setContacts={setContacts} />}</main>
    </>
  );
}
