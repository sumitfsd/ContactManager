import React, { useCallback, useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  RefreshControl,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Contact } from "expo-contacts";
import ContactRow from "./components/ContactRow";
import Actions from "../../../navigation/actions";
import { SCREENS } from "../../../navigation/constants";
import useContactList from "../../../hooks/useContactList";
import SearchBar from "./components/SearchBar";
import { search, sortContacts } from "../../../utils";
import { COLORS } from "../../../color";
import { RootState } from "../../../store";
import {
  getAllContactsFromUserPhoneBook,
  getSingleContactDetail,
} from "../../../service/Contacts";
import { useDebounce } from "../../../hooks/useDebounce";
import NoDataFound from "./components/NoDataFound";
import { setContacts } from "../../../store/slices/contactSlice";
import Loader from "./components/Loader";

const WINDOW_SIZE = 21;
const MAX_TO_RENDER_PER_BATCH = 15;
const DEBOUNCE_VALUE = 330;

const ContactListScreen = (): JSX.Element => {
  const favouriteContactId = useSelector(
    (state: RootState) => state.favourite.favouriteId
  );
  const allContacts = useSelector((state: RootState) => state.contact.contacts);
  const [contacts, isLoading, favContactId] = useContactList();
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [favContactDetail, setFavContactDetail] = useState<Contact>();
  const [filteredList, setFilteredList] = useState<
    ArrayLike<Contact> | null | undefined
  >(contacts);
  const dispatch = useDispatch();

  const onPressContact = (contact: Contact) => {
    Actions.navigate(SCREENS.CONTACT_DETAIL_SCREEN, {
      contactId: contact.id,
    });
  };

  useEffect(() => {
    if (filteredList?.length === 0) {
      setFilteredList(contacts);
    }
  }, [contacts]);

  const renderContactListItem = ({ item }: { item: Contact }) => {
    if (!item?.name?.toLowerCase().includes(searchQuery?.toLowerCase())) {
      return;
    }
    return (
      <ContactRow
        onPress={() => onPressContact(item)}
        contact={item}
        showIcon={favContactId === item.id}
      />
    );
  };

  useDebounce(
    () => setFilteredList(search(searchQuery, contacts)),
    [searchQuery, contacts],
    DEBOUNCE_VALUE
  );

  const getContactDetail = useCallback(
    (contactId: string, contacts: Contact[]) => {
      return getSingleContactDetail(contactId, contacts);
    },
    [favouriteContactId, contacts]
  );

  const handleOnRefresh = () => {
    setIsRefreshing(true);
    getAllContactsFromUserPhoneBook((data) => {
      dispatch(setContacts(sortContacts(data)));
      setIsRefreshing(false);
    });
  };

  useEffect(() => {
    setFavContactDetail(getContactDetail(favouriteContactId, allContacts));
  }, [favouriteContactId]);

  if (isLoading) {
    return <Loader />;
  }

  const showEmptyView =
    filteredList?.length === 0 &&
    !`${favContactDetail?.firstName} ${favContactDetail?.lastName}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

  return (
    <SafeAreaView style={styles.mainContainer}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {favouriteContactId &&
        favContactDetail &&
        renderContactListItem({ item: favContactDetail as Contact })}
      {showEmptyView && <NoDataFound />}
      <FlatList
        windowSize={WINDOW_SIZE}
        maxToRenderPerBatch={MAX_TO_RENDER_PER_BATCH}
        keyExtractor={(item) => item.id}
        data={filteredList}
        renderItem={({ item }: { item: Contact }) => {
          if (favContactId === item.id) {
            return null;
          }
          return renderContactListItem({ item });
        }}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleOnRefresh}
          />
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    borderWidth: 2,
    backgroundColor: COLORS.WHITE,
    paddingTop: 30,
    paddingBottom: 10,
  },
});

export default ContactListScreen;
