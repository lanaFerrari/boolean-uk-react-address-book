import React, { useEffect, useState } from 'react';
import ContactsList from "./components/ContactsList";
import CreateContactForm from "./components/CreateContactForm";
import EditContactForm from "./components/EditContactForm";
import "./styles.css";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [hideForm, setHideForm] = useState(true);
  const [hideCreateForm, setHideCreateForm] = useState(true);
  const [hideEditForm, setHideEditForm] = useState(true);

  useEffect(() => {
      const url = `http://localhost:3030/contacts`;
      fetch(url)
        .then((res) => res.json())
        .then((ContactsData) => {
        setContacts(ContactsData);
        });
    }, [contacts]);


  return (
    <>
      <ContactsList
        contacts={contacts}
        hideForm={hideForm}
        setHideForm={setHideForm}
        hideCreateForm={hideCreateForm}
        setHideCreateForm={setHideCreateForm}
        hideEditForm={hideEditForm}
        setHideEditForm={setHideEditForm}

      />
      <main>{!hideForm && <CreateContactForm contacts ={contacts} setContacts={setContacts} />}
      {!hideCreateForm && <EditContactForm contacts ={contacts} setContacts={setContacts}/> }
      {/* {<EditContactForm/> } */}
      </main>
    </>
  );
}
