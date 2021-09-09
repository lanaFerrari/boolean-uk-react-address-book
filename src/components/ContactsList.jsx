function ContactsList(props) {
  const { contacts, 
    hideForm, 
    setHideForm , 
    hideCreateForm , 
    setHideCreateForm , 
    hideEditForm,
    setHideEditForm
  } = props;


  return (
    <aside className="contacts-section light-shadow">
      <header>
        <h2>Contacts</h2>
        <button
          onClick={() => setHideForm(!hideForm)}
          className="button new-contact-btn"
        >
          {hideForm ? "Create" : "Cancel"}
        </button>
      </header>
      <ul>
        {contacts.map((contact, index) => {
          const { firstName, lastName, address } = contact;

          return (
            <li key={index}>
              <h3>
                {firstName} {lastName}
              </h3>
              <button className="button" 
              onClick={() => setHideCreateForm(!hideCreateForm)}
          className="button new-contact-btn">
          {hideCreateForm ? "View" : "Cancel"}</button>


              <button className="button"
              onClick={() => setHideForm(!hideForm)}
          className="button new-contact-btn">
          {/* {hideForm ? "Create" : "Cancel"} */}
            Edit </button>

              {/* <p> */}
                {/* {address.street}, {address.postCode} */}
              {/* </p> */}

            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default ContactsList;
