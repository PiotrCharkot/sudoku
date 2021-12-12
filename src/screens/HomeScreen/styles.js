import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  backgroundImg: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "#003645",
  },
  logoContainer: {
    paddingBottom: 150,
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
  textButton: {},
});

export default styles;
