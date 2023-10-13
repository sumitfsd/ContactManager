import { Contact } from "expo-contacts";

export const sortContacts = (contacts: Contact[]) => {
  return contacts.sort((contactA, contactB) => {
    const nameA = contactA.name.toUpperCase();
    const nameB = contactB.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
};

export const search = (key: string, contactList: Contact[]) => {
  if (key === "") {
    return contactList;
  }
  return contactList.filter((contact: Contact) => {
    const fullName = `${contact.firstName} ${contact.lastName}`;
    return fullName?.toLowerCase().includes(key?.toLowerCase());
  });
};

export const getFirstChar = (
  firstName: string | undefined,
  lastName: string | undefined
) => {
  const firstChar = firstName
    ? firstName.charAt(0)
    : lastName
    ? lastName.charAt(0)
    : "?";
  return firstChar;
};
