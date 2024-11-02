import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";
import { selectContacts, selectFilter } from "./selectors";

const handlePending = (state) => {
    state.loading = true;
  };
  
  const handleRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload;
  };

const INITIAL_STATE = {
    items: [],
    loading: false,
    error: null
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: INITIAL_STATE,
    extraReducers: (builder) => builder
    .addCase(fetchContacts.pending, handlePending)
    .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
    })
    .addCase(fetchContacts.rejected, handleRejected)
    .addCase(addContact.pending, handlePending)
    .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
    })
    .addCase(addContact.rejected, handleRejected)
    .addCase(deleteContact.pending, handlePending)
    .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(contact => contact.id !== action.payload);
    })
    .addCase(deleteContact.rejected, handleRejected)
//     reducers: {
//         addContact: (state, action) => {
//             state.items.push(action.payload);
//     },
//         deleteContact: (state, action) => {
//             state.items = state.items.filter(contact => contact.id !== action.payload);
//         }
// }
});


// export const selectContacts = state => state.contacts.items;
export const contactsReducer = contactsSlice.reducer;
// export const {addContact, deleteContact} = contactsSlice.actions;


export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => contacts.filter(contact => {
        return contact.name.toLowerCase().includes(filter.toLowerCase())
    })
)