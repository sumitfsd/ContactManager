import {
  Contact,
  ContactResponse,
  getContactsAsync,
  requestPermissionsAsync,
} from "expo-contacts";
import { PERMISSION_RESULTS } from "./constants";

type Callback = (contacts: Contact[]) => void;

export const getAllContactsFromUserPhoneBook = async (callback: Callback) => {
  const { status } = await requestPermissionsAsync();
  if (status === PERMISSION_RESULTS.GRANTED) {
    const { data }: ContactResponse = await getContactsAsync();
    callback(data);
  }
};

export const getSingleContactDetail = (
  contactId: string,
  contacts: Contact[]
) => {
  return (
    contacts.filter((contact: Contact) => contact.id === contactId)[0] || {}
  );
};
