import React from "react";
import { useEffect, useState } from "react";
import { getContact } from "../../services/contactsService";
import ContactsListItem from "../contactsListItem/ContactsListItem";
import { useParams } from "react-router-dom";

function EditContact() {
  const { id } = useParams();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    getContact(id).then((data) => setContact(data));
  }, [id]);

  return !contact ? <div>Loading</div> : <ContactsListItem contact={contact} />;
}

export default EditContact;
