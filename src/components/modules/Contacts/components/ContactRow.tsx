import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Contact } from "expo-contacts";
import { Star } from "../../../../assets";
import { COLORS } from "../../../../color";
import { getFirstChar } from "../../../../utils";

interface ContactRowProps {
  onPress: () => void;
  showIcon: boolean;
  contact: Contact;
}

const ContactRow = (ContactRowProps: ContactRowProps): JSX.Element => {
  const { contact, onPress, showIcon } = ContactRowProps;
  const { firstName, lastName } = contact;
  const firstChar = getFirstChar(firstName, lastName);

  return (
    <TouchableOpacity onPress={onPress} style={styles.listItemMainView}>
      {showIcon && <Star style={styles.show} width="15em" height="15em" />}
      <View style={styles.listItemImageView}>
        <Text style={styles.listItemFirstChar}>{firstChar}</Text>
      </View>
      <Text style={styles.listItemName}>
        {contact.firstName} {contact.lastName}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItemName: {
    fontWeight: "300",
    color: COLORS.BLACK,
    fontSize: 15,
    marginStart: 15,
  },
  show: {
    position: "absolute",
    right: 20,
    alignSelf: "center",
  },
  listItemMainView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  listItemImageView: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: COLORS.ORANGE,
    justifyContent: "center",
    alignItems: "center",
  },
  listItemFirstChar: {
    fontWeight: "400",
    color: COLORS.WHITE,
    fontSize: 20,
  },
});

export default ContactRow;
