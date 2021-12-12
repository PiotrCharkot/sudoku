import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    paddingTop: 160,
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "#00586D",
  },
  optionsContainer: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  checkbox: {
    alignSelf: "center",
  },
  playButton: {
    flex: 0,
    height: 45,
    width: 250,
    marginTop: 100,
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
});

export default styles;
