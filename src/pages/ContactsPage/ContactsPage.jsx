import { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { addContact, fetchContacts } from "../../redux/contacts/contactsOps";
import { useDispatch } from "react-redux";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSabmit = (value, actions) => {
    dispatch(addContact(value));

    actions.resetForm();
  };

  return (
    <>
      <ContactForm
        onSubmit={handleSabmit}
        nameForm="Add contact"
        initialValues={{ name: "", number: "" }}
      />
      <SearchBox />
      <ContactList />
    </>
  );
};

export default ContactsPage;
