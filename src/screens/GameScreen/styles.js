import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: "100%",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#CCFDFE",
  },
  containerDarkMode: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#003645",
  },
  topContainer: {
    height: 100,
  },
  gridContainer: {},
  bigSquare: {
    height: Dimensions.get("window").width * 0.9,
    width: Dimensions.get("window").width * 0.9,
    borderColor: "#003645",
    backgroundColor: "yellow",
    borderWidth: 4,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },

  MediumRow: {
    height: Dimensions.get("window").width * 0.3,
    width: Dimensions.get("window").width * 0.9,
    borderColor: "#003645",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  MediumSquare: {
    height: Dimensions.get("window").width * 0.3,
    width: Dimensions.get("window").width * 0.3,
    borderColor: "#003645",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  SmallRow: {
    height: Dimensions.get("window").width * 0.1,
    width: Dimensions.get("window").width * 0.3,
    borderColor: "#003645",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  SmallSquare: {
    height: Dimensions.get("window").width * 0.1,
    width: Dimensions.get("window").width * 0.1,
    borderColor: "#003645",
    borderWidth: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  bigSquareDarkMode: {
    height: Dimensions.get("window").width * 0.9,
    width: Dimensions.get("window").width * 0.9,
    borderColor: "#00A4C5",
    borderWidth: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  MediumRowDarkMode: {
    height: Dimensions.get("window").width * 0.3,
    width: Dimensions.get("window").width * 0.9,
    borderColor: "#00A4C5",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  MediumSquareDarkMode: {
    height: Dimensions.get("window").width * 0.3,
    width: Dimensions.get("window").width * 0.3,
    borderColor: "#00A4C5",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  SmallRowDarkMode: {
    height: Dimensions.get("window").width * 0.1,
    width: Dimensions.get("window").width * 0.3,
    borderColor: "#00A4C5",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  SmallSquareDarkMode: {
    height: Dimensions.get("window").width * 0.1,
    width: Dimensions.get("window").width * 0.1,
    borderColor: "#00A4C5",
    borderWidth: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  SmallSquarePressed: {
    height: Dimensions.get("window").width * 0.1,
    width: Dimensions.get("window").width * 0.1,
    borderColor: "#003645",
    backgroundColor: "pink",
    borderWidth: 0.2,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 5,
  },
  numberContainer: {},
  buttonsContainer: {},
});

export default styles;
