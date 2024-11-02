import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const contactsInstance = axios.create({
    baseURL: "https://672617f3302d03037e6c5d0f.mockapi.io",
});

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkApi) => {
        try {
            const data = await contactsInstance.get('/contacts');
            return data.data;
            // console.log('data.data: ', data.data);
        } catch(error){
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact, thunkApi) => {
        try {
            const data = await contactsInstance.post('/contacts', {contact});
            // return data;
            console.log('data: ', data);
        } catch(error){
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkApi) => {
        try {
            const data = await contactsInstance.delete(`/contacts/${id}`);
            return data.data;
            // console.log('data: ', data);
        } catch(error){
            return thunkApi.rejectWithValue(error.message);
        }
    }
);