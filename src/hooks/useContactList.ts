import { useEffect, useMemo, useState } from "react";
import { Contact } from "expo-contacts";
import { useDispatch, useSelector } from "react-redux";
import { sortContacts } from "../utils";
import { getAllContactsFromUserPhoneBook } from "../service/Contacts";
import { RootState } from "../store";
import { setFavouriteId } from "../store/slices/favouriteSlice";
import { setContacts } from "../store/slices/contactSlice";

const useContactList = (): [Contact[], boolean, string] => {
  const allContacts = useSelector((state: RootState) => state.contact.contacts);
  const [isLoading, setIsLoading] = useState(true);
  const favouriteId = useSelector(
    (state: RootState) => state.favourite.favouriteId
  );
  const dispatch = useDispatch();

  const contacts = useMemo(() => {
    return allContacts?.filter((contact: Contact) => {
      if (favouriteId === contact.id) {
        dispatch(setFavouriteId(contact.id));
      }
      return favouriteId !== contact.id;
    });
  }, [favouriteId, allContacts]);

  useEffect(() => {
    getAllContactsFromUserPhoneBook((data: Contact[]) => {
      dispatch(setContacts(sortContacts(data)));
      setIsLoading(false);
    });
  }, []);

  return [contacts, isLoading, favouriteId];
};

export default useContactList;
