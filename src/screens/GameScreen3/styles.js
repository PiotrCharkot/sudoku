import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
//screen 3
const styles = StyleSheet.create({
  container: {
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
    flexDirection: "row",
    width: Dimensions.get("window").width * 0.9,
    paddingTop: 50,
    paddingBottom: 20,
    justifyContent: "space-between",
  },
  blurContainer: {
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").width * 0.9,
    position: "absolute",
    top: 140,
    left: (Dimensions.get("window").width * 0.1) / 2,
  },
  blurContainer2: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  insideBlur: {
    zIndex: 0,
  },
  containerEnd: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  textEnd: {
    paddingBottom: 10,
    fontSize: 18,
  },
  buttonHolderTop: {
    width: Dimensions.get("window").width * 0.35,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainerTop: {
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#CCFDFE",
    height: 50,
    width: Dimensions.get("window").width * 0.35,
    borderRadius: 25,
    borderColor: "transparent",
    borderWidth: 1,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
  },
  gridContainer: {},
  bigSquare: {
    borderColor: "black",
    backgroundColor: "green",
    borderWidth: 4,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").width * 0.9,
  },
  row: {
    flexDirection: "row",
  },
  bigRow: {
    backgroundColor: "salmon",
    borderColor: "black",
    height: "100%",
    width: "100%",
    flexDirection: "row",
    flex: 1,
  },
  MediumRow: {
    height: Dimensions.get("window").width * 0.3,
    width: Dimensions.get("window").width * 0.9,
    borderColor: "#003645",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  MediumSquare: {
    height: "100%",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderColor: "black",
    borderWidth: 1.3,
    flex: 1,
  },
  SmallRow: {
    height: "100%",
    width: "100%",
    borderColor: "black",
    flexDirection: "row",
    flex: 1,
  },
  SmallSquare: {
    height: "100%",
    width: "100%",
    borderColor: "black",
    borderRightWidth: 1,
    borderBottomWidth: 1,
    flex: 1,
  },
  bigSquareDarkMode: {
    marginLeft: -4,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderColor: "#00A4C5",
    borderWidth: 4,
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
    borderWidth: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },
  SmallSquarePressed: {
    height: Dimensions.get("window").width * 0.1,
    width: Dimensions.get("window").width * 0.1,
    borderColor: "#003645",
    backgroundColor: "yellow",
    borderWidth: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },
  SmallSquarePressedDarkMode: {
    height: Dimensions.get("window").width * 0.1,
    width: Dimensions.get("window").width * 0.1,
    borderColor: "#003645",
    backgroundColor: "lightblue",
    borderWidth: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },
  opacityStyle: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  animatedWrapper: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
  animatedWrapperDarkMode: {
    backgroundColor: "#75CDFC",
    width: "100%",
    height: "100%",
  },
  valueStyle: {
    color: "transparent",
  },
  valueStyleFixed: {
    color: "brown",
    fontSize: 20,
  },
  valueOpacity: {
    height: 30,
    width: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  valueChoice: {
    color: "brown",
    fontSize: 20,
  },
  numberContainer: {
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#CCFDFE",
    height: 50,
    width: Dimensions.get("window").width * 0.9,
    borderRadius: 25,
    borderColor: "transparent",
    borderWidth: 1,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    elevation: 1,
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
  },
  numberContainerOn: {
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#CCFDFE",
    height: 50,
    width: Dimensions.get("window").width * 0.89,
    borderRadius: 25,
    borderColor: "transparent",
    borderWidth: 1,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    elevation: 1,
    shadowOpacity: 0.36,
    shadowRadius: 3.68,
  },
  numberContainerDarkMode: {
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#003645",
    height: 50,
    width: Dimensions.get("window").width * 0.9,
    borderRadius: 25,
    borderColor: "transparent",
    borderWidth: 1,
    marginTop: 20,
    shadowColor: "#00A4C5",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 1,
    shadowOpacity: 1.36,
    shadowRadius: 12.68,
  },
  buttonContainer: {
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#CCFDFE",
    height: 50,
    width: Dimensions.get("window").width * 0.25,
    borderRadius: 25,
    borderColor: "transparent",
    borderWidth: 1,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    elevation: 1,
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
  },
  buttonContainerOn: {
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#CCFDFE",
    height: 48,
    width: Dimensions.get("window").width * 0.24,
    borderRadius: 25,
    borderColor: "transparent",
    borderWidth: 1,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    elevation: 1,
    shadowOpacity: 0.36,
    shadowRadius: 3.68,
  },
  buttonContainerDarkMode: {
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#003645",
    height: 50,
    width: Dimensions.get("window").width * 0.25,
    borderRadius: 25,
    borderColor: "transparent",
    borderWidth: 1,
    marginTop: 20,
    shadowColor: "#00A4C5",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1.36,
    shadowRadius: 12.68,
  },
  buttonContainerDarkModeOn: {
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#003645",
    height: 48,
    width: Dimensions.get("window").width * 0.24,
    borderRadius: 25,
    borderColor: "transparent",
    borderWidth: 1,
    marginTop: 20,
    shadowColor: "#00A4C5",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1.36,
    shadowRadius: 12.68,
  },
  buttonContainerTime: {
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#CCFDFE",
    height: 50,
    width: "100%",
    borderRadius: 25,
    borderColor: "transparent",
    borderWidth: 1,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
  },
  buttonContainerTimeOn: {
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#CCFDFE",
    height: 50,
    width: Dimensions.get("window").width * 0.24,
    borderRadius: 25,
    borderColor: "transparent",
    borderWidth: 1,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.36,
    shadowRadius: 3.68,
  },
  buttonContainerTimeDarkMode: {
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#003645",
    height: 50,
    width: "100%",
    borderRadius: 25,
    borderColor: "transparent",
    borderWidth: 1,
    marginTop: 20,
    shadowColor: "#00A4C5",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1.36,
    shadowRadius: 12.68,
  },
  button: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    width: Dimensions.get("window").width * 0.9,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonHolder: {
    width: Dimensions.get("window").width * 0.27,
    justifyContent: "center",
    alignItems: "center",
  },
  playButton: {
    flex: 0,
    height: 45,
    width: 250,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#75CDFC",
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
  },
  buttonImg: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  infoViewDown: {
    width: "100%",
    marginLeft: Dimensions.get("window").width * 0.1,
    marginTop: 10,
  },
  infoTextDown: {
    fontWeight: "bold",
  },
  infoTextDownDark: {
    fontWeight: "bold",
    color: "white",
  },
});

export default styles;
