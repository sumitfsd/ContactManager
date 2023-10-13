import React from "react";
import { StyleSheet, Text, SafeAreaView, Dimensions } from "react-native";
import { COLORS } from "../../../../color";

const { height } = Dimensions.get("window");

const NoDataFound = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.mainView}>
      <Text style={styles.noDataFoundText}>No Data Found!!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 1,
    marginTop: height / 3.5,
  },
  noDataFoundText: {
    fontWeight: "500",
    color: COLORS.BLACK,
    fontSize: 15,
  },
});

export default NoDataFound;
