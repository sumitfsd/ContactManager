import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { COLORS } from "../../../../color";
import { Colors } from "react-native/Libraries/NewAppScreen";

const INPUT_BAR_HEIGHT = 50;

interface SearchBarProps {
  searchQuery: string;
  style?: object;
  setSearchQuery: (key: string) => void;
}

const SearchBar = (searchBarProps: SearchBarProps): JSX.Element => {
  const { searchQuery, setSearchQuery, style } = searchBarProps;
  return (
    <View style={[styles.mainView, style]}>
      <View style={[styles.searchBarView]}>
        <TextInput
          value={searchQuery}
          onChangeText={(text) => {
            setSearchQuery(text);
          }}
          style={styles.textInput}
          placeholder={"Search"}
          placeholderTextColor={COLORS.GREY}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    width: "100%",
    paddingHorizontal: 15,
    marginTop: 20,
  },
  suggestionTitle: {
    fontSize: 13,
    color: Colors.BLACK,
    paddingVertical: 7,
    textAlign: "left",
  },
  searchBarView: {
    height: INPUT_BAR_HEIGHT,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 20,
    backgroundColor: COLORS.WHITE,
    shadowColor: COLORS.ORANGE,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  textInput: {
    height: INPUT_BAR_HEIGHT,
    color: COLORS.BLACK,
    paddingHorizontal: 20,
    width: "90%",
  },
  searchIcon: {
    marginStart: 10,
  },
});

export default SearchBar;
