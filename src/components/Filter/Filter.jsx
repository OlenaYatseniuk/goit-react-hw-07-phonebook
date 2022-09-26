import React from 'react';
import s from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContactsAction } from 'redux/filter/action.filter';
import { getALLContacts } from 'redux/contacts/selectors.contacts';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.items.filter);
  const contacts = useSelector(getALLContacts);

  const handleFilterInput = event => {
    const { value } = event.target;
    dispatch(filterContactsAction(value));
  };

  if(contacts.length)
  {
    return (
      <label className={s.label}>
      Write a name to find the contact:
      <input
        className={s.input}
        type="text"
        value={filter}
        name="filter"
        onChange={handleFilterInput}
      ></input>
    </label>
    )
  }

}

export default Filter;
