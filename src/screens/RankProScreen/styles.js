import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "#003645",
  },
  backgroundImg: {
    height: "100%",
    width: "100%",
  },
  resultContainer: {
    paddingTop: 80,
    paddingBottom: 30,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  playersName: {
    color: "white",
    fontSize: Platform.OS === 'ios' ? 25 : 22,
    paddingBottom: Platform.OS === 'ios' ? 30 : 25,
  },
  inLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    paddingTop: 40,
  },
  inLineLeft: {},
  inLineRight: {},
  textRes: {
    fontSize: Platform.OS === 'ios' ? 22 : 18,
    color: "white",
  },
});

export default styles;
