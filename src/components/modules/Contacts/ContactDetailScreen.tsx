import React, { useCallback, useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Contact, PhoneNumber } from "expo-contacts";
import {
  BackArrow,
  BirthdayCake,
  Briefcase,
  Building,
  DialerIcon,
  Star,
  StarFilled,
} from "../../../assets";
import actions from "../../../navigation/actions";
import { COLORS } from "../../../color";
import { RootState } from "../../../store";
import { setFavouriteId } from "../../../store/slices/favouriteSlice";
import { getSingleContactDetail } from "../../../service/Contacts";
import { getFirstChar } from "../../../utils";
import Loader from "./components/Loader";

interface ContactDetailScreenProps {
  route?:
    | {
        params: {
          contactId: string;
        };
      }
    | undefined;
}

const ContactDetailScreen = (props: ContactDetailScreenProps): JSX.Element => {
  const dispatch = useDispatch();
  const favContactId = useSelector(
    (state: RootState) => state.favourite.favouriteId
  );
  const allContacts = useSelector((state: RootState) => state.contact.contacts);
  const [contactDetail, setContactDetail] = useState<Contact>();
  const contactId = props.route?.params?.contactId || "";
  const handleFavourite = () => {
    dispatch(setFavouriteId(contactId));
    if (contactId !== favContactId) {
      dispatch(setFavouriteId(contactId));
    } else {
      dispatch(setFavouriteId(""));
    }
  };

  const getContactDetail = useCallback(
    (contactId: string, allContacts: Contact[]) => {
      return getSingleContactDetail(contactId, allContacts);
    },
    [contactId, allContacts]
  );

  useEffect(() => {
    setContactDetail(getContactDetail(contactId, allContacts));
  }, []);

  if (!contactDetail) {
    return <Loader />;
  }

  const { firstName, lastName, birthday, company, jobTitle, phoneNumbers } =
    contactDetail as Contact;

  const firstChar = getFirstChar(firstName, lastName);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View
        style={[
          styles.headerMainView,
          Platform.OS === "ios" ? styles.ph20 : {},
        ]}
      >
        <TouchableOpacity onPress={() => actions.pop()}>
          <BackArrow />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleFavourite}>
          {favContactId !== contactId ? <StarFilled /> : <Star />}
        </TouchableOpacity>
      </View>
      <View style={styles.imageMainView}>
        <Text style={styles.firstChar}>{firstChar}</Text>
      </View>
      {firstName && (
        <Text style={styles.nameText}>
          {firstName} {lastName}
        </Text>
      )}
      <Text
        style={[
          styles.contactInfo,
          Platform.OS === "ios" ? { paddingHorizontal: 20 } : {},
        ]}
      >
        Contact info
      </Text>
      {phoneNumbers && (
        <View style={[styles.detailListItem, styles.column]}>
          {phoneNumbers.map((item: PhoneNumber) => {
            return (
              <View key={item.id} style={styles.row}>
                <DialerIcon />
                <Text style={styles.listText}>{item.number}</Text>
              </View>
            );
          })}
        </View>
      )}

      {birthday && (
        <View style={styles.detailListItem}>
          <BirthdayCake />
          <Text style={styles.listText}>
            {birthday.day}/{birthday.month}/{birthday.year}
          </Text>
        </View>
      )}
      {company && (
        <View style={styles.detailListItem}>
          <Building />
          <Text style={styles.listText}>{company}</Text>
        </View>
      )}
      {jobTitle && (
        <View style={styles.detailListItem}>
          <Briefcase />
          <Text style={[styles.listText, styles.mt0]}>{jobTitle}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerMainView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 25,
  },
  imageMainView: {
    height: 160,
    width: 160,
    borderRadius: 100,
    backgroundColor: COLORS.ORANGE,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 30,
  },
  firstChar: {
    fontWeight: "500",
    color: COLORS.WHITE,
    fontSize: 70,
  },
  nameText: {
    fontWeight: "300",
    color: COLORS.BLACK,
    fontSize: 30,
    alignSelf: "center",
    marginTop: 20,
  },
  contactInfo: {
    fontWeight: "400",
    color: COLORS.BLACK,
    fontSize: 18,
    marginTop: 25,
  },
  detailListItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  listText: {
    fontWeight: "300",
    color: COLORS.BLACK,
    fontSize: 15,
    marginTop: 5,
    marginStart: 7,
  },
  ph15: {
    paddingHorizontal: 15,
  },
  row: {
    flexDirection: "row",
    marginTop: 10,
  },
  mt0: {
    marginTop: 0,
  },
  column: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  ph20: {
    paddingHorizontal: 20,
  },
});

export default ContactDetailScreen;
