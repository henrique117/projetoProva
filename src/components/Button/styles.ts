import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  buttonPrimary: {
    backgroundColor: colors.yellow,
    borderRadius: 5,
    margin: 10,
    width: '80%'
  },
  buttonSecondary: {
    backgroundColor: colors.brown,
    borderRadius: 5,
    margin: 10,
    width: '80%'
  },
  buttonThird: {
    backgroundColor: colors.green,
    borderRadius: 5,
    margin: 10,
    width: "80%"
  },
  text: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    fontSize: 18
  }
});

export default styles;