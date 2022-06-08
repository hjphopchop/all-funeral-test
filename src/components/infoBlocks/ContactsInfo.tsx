import React, { useState } from 'react'
import pencil from "../../assets/img/page/Pencil.png";
import { contactsApi } from '../../services/contacts';
import ContactsForm from '../forms/contactsForm/ContactsForm';
import Modal from '../modal/Modal';
import cl from "./infoBlocks.module.scss"
const ContactsInfo = () => {
    const { data: contacts } = contactsApi.useGetContactsQuery("");

  const [isOpen, setIsopen] = useState(false);

  const handleOpen = () => {
    setIsopen(true);
  };

  const handleClose = () => {
    setIsopen(false);
  };
  return (
    <div className={cl.info}>
       <div className={cl.companyInfoTitle}>
            <p>Контактные данные </p>
            <button onClick={handleOpen}>
            <img src={pencil} />
          </button>
          </div>
          <div className={cl.infoContent}>
            <div className={cl.infoContentLeft}>
              <div>ФИО:</div>
              <div>Телефон:</div>
              <div>Эл. почта:</div>
            </div>
            {contacts && (
              <div>
                <div>
                  {contacts.lastname} {contacts.firstname} {contacts.patronymic}
                </div>
                <div>{contacts.phone}</div>
                <div>{contacts.email}</div>
              </div>
            )}
          </div>

          <Modal handleClose={handleClose} isOpen={isOpen}>
          <ContactsForm contacts={contacts}/>
        </Modal>
  
    </div>
    
  )
}

export default ContactsInfo