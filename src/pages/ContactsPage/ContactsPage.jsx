import { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { addContact, fetchContacts } from "../../redux/contacts/contactsOps";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/contactsSlice";
const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

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
