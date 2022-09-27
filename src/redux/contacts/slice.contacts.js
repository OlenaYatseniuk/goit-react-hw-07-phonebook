import {
  addNewContact,
  deleteContact,
  getContacts,
} from './operations.contacts';

import { createSlice } from '@reduxjs/toolkit';
import  initialState from './initialState.contacts';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
}

const handleRejected = (state, {payload})=>{
  state.isLoading = false;
  state.error = payload;
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [getContacts.pending]: handlePending,
    [getContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },
    [getContacts.rejected]: handleRejected,

    [addNewContact.pending]: handlePending,
    [addNewContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items.push(payload);
    },
    [addNewContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = state.items.filter(item => item.id !== payload);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

const contactsReducer = contactsSlice.reducer;
export default contactsReducer;
