import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactsItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations.contacts';
import { getIsLoading } from 'redux/contacts/selectors.contacts';

function ContactsItem({ id, name, phone }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

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
        disabled ={isLoading}
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


