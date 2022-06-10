import React, { useState } from "react";
import cl from "./infoBlocks.module.scss";
import pencil from "../../assets/img/page/Pencil.png";
import { contactsApi } from "../../services/contacts";
import ContactsForm from "../forms/otherForms/ContactsForm";
import Modal from "../modal/Modal";

const ContactsInfo = ({contact}:any) => {
  const { data: contacts, error, isLoading } = contactsApi.useGetContactsQuery(contact);

  const [isOpen, setIsopen] = useState(false);

  const handleOpen = () => {
    setIsopen(true);
  };

  const handleClose = () => {
    setIsopen(false);
  };

  if (error) {
    return <h1>не найдено</h1>;
  }
  if (isLoading) {
    return <h1>Загрузка</h1>;
  }
  return (
    <div className={cl.info}>
      <div className={cl.InfoTitle}>
        <p>Контактные данные </p>
        <button onClick={handleOpen}>
          <img src={pencil} alt='pencil' />
        </button>
      </div>
      <div className={cl.infoContent}>
        <div className={cl.infoContentLeft}>
          <div className={cl.ifoContentItem}>ФИО:</div>
          <div className={cl.ifoContentItem}>Телефон:</div>
          <div className={cl.ifoContentItem}>Эл. почта:</div>
        </div>
        {contacts && (
          <div>
            <div className={cl.ifoContentItem}>
              {contacts.lastname} {contacts.firstname} {contacts.patronymic}
            </div>
            <div className={cl.ifoContentItem}>{contacts.phone}</div>
            <div className={cl.ifoContentItem}>{contacts.email}</div>
          </div>
        )}
      </div>

      <Modal handleClose={handleClose} isOpen={isOpen}>
        <ContactsForm contacts={contacts} />
      </Modal>
    </div>
  );
};

export default ContactsInfo;
