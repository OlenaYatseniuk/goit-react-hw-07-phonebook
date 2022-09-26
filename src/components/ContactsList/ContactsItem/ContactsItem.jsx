import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactsItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations.contacts';

function ContactsItem({ id, name, phone }) {
  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <li className={s.item}>
      <span className={s.spanName}>{name}:</span>
      <span className={s.spanTel}>{phone}</span>
      <button
        className={s.button}
        type="button"
        name="delete"
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </li>
  );
}

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactsItem;
