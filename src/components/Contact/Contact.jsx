import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa6";
import { deleteContact, editContact } from "../../redux/contacts/operations";
import { MdDeleteForever } from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";

import { useState } from "react";
import ModalWindow from "../ModalWindow/ModalWindow";
import ContactForm from "../ContactForm/ContactForm";

const Contact = ({ data: { name, number, id } }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [isEditForm, setIsEditForm] = useState(false);

  const dispatch = useDispatch();

  const onCloseModal = () => {
    setIsOpenModal(false);
  };
  const handleSabmit = (values) => {
    dispatch(editContact(values));
    setIsEditForm(false);
  };

  return (
    <div>
      <div className={css.container}>
        <div>
          <p className={css.title}>
            <FaUser /> {name}
          </p>
          <p className={css.title}>
            <FaPhone /> {number}
          </p>
        </div>
        <div className={css.boxBtn}>
          <button className={css.btn}>
            <BiSolidEditAlt
              size="24"
              onClick={() => {
                setIsEditForm(true);
              }}
            />
          </button>
          <button className={css.btn} onClick={() => setIsOpenModal(true)}>
            <MdDeleteForever size="24" />
          </button>
        </div>
        <ModalWindow
          open={isOpenModal}
          onClose={onCloseModal}
          deleteContact={() => dispatch(deleteContact(id))}
        />
      </div>
      {isEditForm && (
        <div className={css.overlay}>
          <div className={css.modal}>
            <ContactForm
              initialValues={{
                name,
                number,
                id,
              }}
              onSubmit={handleSabmit}
              nameForm="Submit"
              showClose={true}
              onClose={() => setIsEditForm(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
