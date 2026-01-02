import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contacts/contactsSlice";
import ErrorMessege from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectLoading);

  return (
    <>
      {isError && <ErrorMessege message={isError} />}
      <ul className={css.list}>
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
      {isLoading && <Loader />}
    </>
  );
};

export default ContactList;
