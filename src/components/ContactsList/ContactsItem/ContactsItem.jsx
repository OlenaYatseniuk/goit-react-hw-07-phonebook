import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactsItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations.contacts';
import { ColorRing } from 'react-loader-spinner';

function ContactsItem({ id, name, phone }) {
  const dispatch = useDispatch();
  const isDeleting = useSelector(state => state.items.contacts.isDeleting);

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
        disabled ={isDeleting}
      >{isDeleting && <ColorRing height='30' width='30' colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}/> }
        Delete
      </button>
    </li>
  );
}

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactsItem;


