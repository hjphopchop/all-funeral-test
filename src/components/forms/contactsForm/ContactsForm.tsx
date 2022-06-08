import React from "react";
import { useForm } from "react-hook-form";
import { contactsApi } from "../../../services/contacts";

const ContactsForm = ({ contacts }: any) => {
  const [updateContacts] = contactsApi.useUpdateContactsMutation();

  const { register, handleSubmit } = useForm<any>({
    defaultValues: {
      lastname: contacts.lastname,
      firstname: contacts.firstname,
      patronymic: contacts.patronymic,
      phone: contacts.phone,
      email: contacts.email,
    },
  });

  const onSubmit = (contact: any) => {
    updateContacts(contact);

    console.log(contact);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="lastname">Название</label>
      <input {...register("lastname", { required: true })} />
      <label htmlFor="firstname">полное название</label>
      <input {...register("firstname", { required: true })} />
      <label htmlFor="patronymic">форма компании</label>
      <input {...register("patronymic", { required: true })} />
      <label htmlFor="phone">тип </label>
      <input {...register("phone", { required: true })} />
      <label htmlFor="email">тип </label>
      <input {...register("email", { required: true })} />
      <input type="submit" />
    </form>
  );
};

export default ContactsForm;
