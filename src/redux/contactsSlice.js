import { createSlice } from '@reduxjs/toolkit';

const initialState = { contacts: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, { payload }) {
      // state.contacts = [payload, ...state.contacts];
      state.contacts.push(payload);
    },
    deleteContact(state, { payload }) {
      const index = state.contacts.findIndex(contact => contact.id === payload);
      state.contacts.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
