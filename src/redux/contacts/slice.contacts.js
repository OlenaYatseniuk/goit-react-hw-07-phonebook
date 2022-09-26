import {
  addNewContact,
  deleteContact,
  getContacts,
} from './operations.contacts';

import { createSlice } from '@reduxjs/toolkit';
import  initialState from './initialState.contacts';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [getContacts.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [getContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },
    [getContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [addNewContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [addNewContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items.unshift(payload);
    },
    [addNewContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [deleteContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = state.items.filter(item => item.id !== payload);
    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

const contactsReducer = contactsSlice.reducer;
export default contactsReducer;
