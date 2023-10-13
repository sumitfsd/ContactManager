import { createSlice } from "@reduxjs/toolkit";
import { Contact } from "expo-contacts";

export interface ContactState {
  contacts: Contact[];
}

const initialState: ContactState = {
  contacts: [],
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setContacts: (state, action) => {
      return { ...state, contacts: action.payload };
    },
  },
});

export const { setContacts } = contactSlice.actions;
export default contactSlice.reducer;
