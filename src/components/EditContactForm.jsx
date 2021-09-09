import { useEffect, useState } from "react"

function EditContactForm(props) {

const { contacts, setContacts, userToEdit } = props;

const [name, setName] = useState("")
const [lastName, setLastName] = useState("")
const [street, setStreet ] = useState("")
const [city, setCity] = useState("")
const [postCode , setPostCode] = useState("")
const [check, setCheck] = useState(false)

const [userName, setUserName] = useState("")
const [userLastName, setUserLastName] = useState("")
const [userStreet, setUserStreet] = useState("")
const [userCity, setUserCity] = useState("")
const [userPostCode, setUserPostcode] = useState("")
const [terms, setTerms] = useState(false)

useEffect(() => {
  if (userToEdit) {
    setUserName(userToEdit.firstName);
    setUserLastName(userToEdit.lastName);
    setUserStreet(userToEdit.address.street);
    setUserCity(userToEdit.address.city);
    setUserPostcode(userToEdit.address.postCode);
    setTerms(userToEdit.terms);
  }
}, [userToEdit]);


const handleUserNameInput = (e) => {setName(e.target.value)}
const handleUserLastNameInput = (e) => {setLastName(e.target.value)}
const handleStreetInput = (e) => {setStreet(e.target.value)}
const handleCityInput = (e) => {setCity(e.target.value)}
const handlePostCodeInput = (e) => {setPostCode(e.target.value)}
const handleCheckbox = (e) => {setCheck(e.target.checked)}

// const handleSubmit =(e) =>{
//     e.preventDefault();

//     const contactAdress={
//       street: street,
//       city: city,
//       postCode: postCode
//     }

//          const fetchOptionsAddress = {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(contactAdress)
//     };


//         fetch("http://localhost:3030/addresses", fetchOptionsAddress)
//       .then((res) => res.json())
//       .then((newAddress) => {
//         console.log("Inside POST response", newAddress);


//     const contactToCreate = { 
//     firstName: name,
//     lastName: lastName ,
//     blockContact: check,
//     addressId: newAddress.id
//     }

//       const fetchOptions = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(contactToCreate)
//     };

//     fetch("http://localhost:3030/contacts", fetchOptions)
//       .then((res) => res.json())
//       .then((newUser) => {
//         console.log("Inside POST response", newUser);
       
//         // setContacts([...contacts, newUser]);

//           });
//       })
//   };

  return (
    <form
      class="form-stack light-shadow center contact-form"
      //   onSubmit={handleSubmit}
    >
      <h1>Edit Contact</h1>
      <label for="first-name-input">First Name:</label>
      <input
        id="first-name-input"
        name="first-name-input"
        type="text"
        value={userName}
        onChange={handleUserNameInput}
      />
      <label for="last-name-input">Last Name:</label>
      <input
        id="last-name-input"
        name="last-name-input"
        type="text"
        value={userLastName}
        onChange={handleUserNameInput}
      />
      <label for="street-input">Street:</label>
      <input
        id="street-input"
        name="street-input"
        type="text"
        value={userStreet}
        onChange={handleUserNameInput}
      />
      <label for="city-input">City:</label>
      <input
        id="city-input"
        name="city-input"
        type="text"
        value={userCity}
        onChange={handleUserNameInput}
      />
      <label for="post-code-input">Post Code:</label>
      <input
        id="post-code-input"
        name="post-code-input"
        type="text"
        value={userPostCode}
        onChange={handleUserNameInput}
      />
      <div class="checkbox-section">
        <input
          id="block-checkbox"
          name="block-checkbox"
          type="checkbox"
          value={terms}
          onChange={handleUserNameInput}
        />
        <label for="block-checkbox">Block</label>
      </div>
      <div class="actions-section">
        <button class="button blue" type="submit">
          Save
        </button>
      </div>
    </form>
  );
}

export default EditContactForm;
