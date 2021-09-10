import { useEffect, useState } from "react"

function EditContactForm(props) {

const { contacts, setContacts, userToEdit } = props;

const [userInput, setUserInput] = useState({
  firstName: "",
  lastName:"",
  street: "",
  city:"",
  postCode: "",
  blockContact: false,
})

useEffect(() => {
  if (userToEdit) {
    setUserInput({
      firstName: userToEdit.firstName,
      lastName: userToEdit.lastName,
      blockContact: userToEdit.blockContact,
      street: userToEdit.street,
      city: userToEdit.city,
      postCode: userToEdit.postCode
    });
  }
}, [userToEdit]);

// const { firstName, lastName, address, blockContact } = userInput;
// const { street, city, postCode} = address;

// console.log(address)

const handleUserInput = (e) => {
  const inputName = e.target.name;
  const inputValue = e.target.value;
  const inputType = e.target.type;
  const inputCheck = e.target.checked;

  if(inputType === "checkbox"){
    setUserInput({
      ...userInput,
      [inputName]: inputCheck,
    });
  }else{
    setUserInput({
      ...userInput,
      [inputName]:inputValue,
    })
  }
};

const handleSubmit =(e) =>{
    e.preventDefault();

    const contactAdress={
      street: street,
      city: city,
      postCode: postCode
    }

         const fetchOptionsAddress = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contactAdress)
    };


        fetch(`http://localhost:3030/addresses/${address.id}`, fetchOptionsAddress)
      .then((res) => res.json())
      .then((newAddress) => {
        console.log("Inside POST response", newAddress);


    const contactToCreate = {
      firstName: firstName,
      lastName: lastName,
      blockContact: blockContact,
      addressId: newAddress.id,
    };

      const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contactToCreate)
    };

    fetch(`ttp://localhost:3030/contacts/${contacts.id}`, fetchOptions)
      .then((res) => res.json())
      .then((newUser) => {
        console.log("Inside POST response", newUser);
       
        // setContacts([...contacts, newUser]);

          });
      })
  };

  return (
    <form
      className="form-stack light-shadow center contact-form"
      onSubmit={handleSubmit}
    >
      <h1>Edit Contact</h1>
      <label for="first-name-input">First Name:</label>
      <input
        id="first-name-input"
        name="firstName"
        type="text"
        value={firstName}
        onChange={handleUserInput}
      />
      <label htmlFor="last-name-input">Last Name:</label>
      <input
        id="last-name-input"
        name="lastName"
        type="text"
        value={lastName}
        onChange={handleUserInput}
      />
      <label htmlFor="street-input">Street:</label>
      <input
        id="street-input"
        name="street"
        type="text"
        value={street}
        onChange={handleUserInput}
      />
      <label htmlFor="city-input">City:</label>
      <input
        id="city-input"
        name="city"
        type="text"
        value={city}
        onChange={handleUserInput}
      />
      <label htmlFor="post-code-input">Post Code:</label>
      <input
        id="post-code-input"
        name="postCode"
        type="text"
        value={postCode}
        onChange={handleUserInput}
      />
      <div className="checkbox-section">
        <input
          id="block-checkbox"
          name="blockContact"
          type="checkbox"
          value={blockContact}
          onChange={handleUserInput}
        />
        <label htmlFor="block-checkbox">Block</label>
      </div>
      <div className="actions-section">
        <button className="button blue" type="submit">
          Save
        </button>
      </div>
    </form>
  );
}

export default EditContactForm;
