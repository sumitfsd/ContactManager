import React from "react";
import {
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { COLORS } from "../../../../color";

const { height, width } = Dimensions.get("window");

const Loader = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.loadingContainer}>
      <ActivityIndicator
        animating={true}
        size={"large"}
        color={COLORS.ORANGE}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: width,
    height: height,
    backgroundColor: COLORS.WHITE,
  },
});

export default Loader;
