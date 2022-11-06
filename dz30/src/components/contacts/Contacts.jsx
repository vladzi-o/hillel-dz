import React, { useState } from "react";
import useContacts from "../../hooks/useContacts";
import ContactForm from "../contactForm/ContactForm";
import ContactsList from "../contactsList/ContactsList";
import "./Contacts.css";
import Button from "@mui/material/Button";

function getEmptyContact() {
  return {
    name: "",
    surname: "",
    phone: "",
  };
}

function Contacts() {
  
  const { contacts, isLoading, remove, save } = useContacts();

  const [selectedContact, setSelectedContact] = useState(null);
  const isFormVisible = !!selectedContact;

  const onAddNewBtnClick = () => {
    setSelectedContact(getEmptyContact());
  };

  const closeForm = () => {
    setSelectedContact(null);
  };

  const onContactSelect = (contact) => {
    setSelectedContact(contact);
  };

  const onSave = (contact) => {
    save(contact);
    closeForm();
  };

  const onContactDelete = (contact) => {
    remove(contact.id);
  };

  return (
    <div className="container">
      {!isFormVisible ? (
        <>
          <ContactsList
            contacts={contacts}
            onSelect={onContactSelect}
            onDelete={onContactDelete}
          />
          <Button
            color="secondary"
            variant="contained"
            onClick={onAddNewBtnClick}
          >
            Add new contact
          </Button>
        </>
      ) : (
        <ContactForm
          contact={selectedContact}
          onCancel={closeForm}
          onSave={onSave}
        />
      )}
    </div>
  );
}

export default Contacts;
