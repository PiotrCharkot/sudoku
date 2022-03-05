import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "#00586D",
  },
  formContainer: {
    width: 250,
  },
  textTop: {
    color: "white",
    paddingBottom: 30,
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
  textDown: {
    color: "#75CDFC",
  },
  containerDown: {
    paddingTop: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  textTouchable: {
    paddingTop: 5,
  },
});

export default styles;
