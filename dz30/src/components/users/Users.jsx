import React, { useState } from "react";
import useUsers from "../../hooks/useUsers";
import ContactForm from "../contactForm/ContactForm";
import ContactsList from "../contactsList/ContactsList";
import "./Users.css";
import Button from "@mui/material/Button";

function getEmptyContact() {
  return {
    name: "",
    surname: "",
  };
}

function Users() {
  const { users, isLoading, remove, save } = useUsers();

  const [selectedUser, setSelectedUser] = useState(null);
  const isFormVisible = !!selectedUser;

  const onAddNewBtnClick = () => {
    setSelectedUser(getEmptyContact());
  };

  const closeForm = () => {
    setSelectedUser(null);
  };

  const onUserSelect = (user) => {
    setSelectedUser(user);
  };

  const onSave = (users) => {
    save(users);
    closeForm();
  };

  const onUserDelete = (user) => {
    remove(user.id);
  };

  return (
    <div className="container">
      {!isFormVisible ? (
        <>
          <ContactsList
            contacts={users}
            onSelect={onUserSelect}
            onDelete={onUserDelete}
          />
          <Button
            color="secondary"
            variant="contained"
            onClick={onAddNewBtnClick}
          >
            Add new user
          </Button>
        </>
      ) : (
        <ContactForm
          contact={selectedUser}
          onCancel={closeForm}
          onSave={onSave}
        />
      )}
    </div>
  );
}

export default Users;
