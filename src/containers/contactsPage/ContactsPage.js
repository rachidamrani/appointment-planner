import React, { useState } from 'react'
import { ContactForm } from '../../components/contactForm/ContactForm'

export const ContactsPage = ({ contacts, addNewContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [contactName, setContactName] = useState(null)
  const [contactPhone, setcontactPhone] = useState(null)
  const [contactEmail, setcontactEmail] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  }

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        {
          // Check for duplicates whenever the name in the form changes and indicate the name is a duplicate
          // Only add a new contact on form submission if it does not duplicate an existing contact’s name
          // A successful submission should clear the form
        }
        <ContactForm
          name={contactName}
          setName={setContactName}
          phone={contactPhone}
          setPhone={setcontactPhone}
          email={contactEmail}
          setEmail={setcontactEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contact={contacts} />
      </section>
    </div>
  )
}
