import { StyleSheet } from "react-native";
import normalizeDimens from "../../utils/normalizeDimens";

const styles = StyleSheet.create({
  container: {
    borderRadius: 20/2,
    backgroundColor: '#FFF',
    paddingVertical: normalizeDimens(12),
    paddingHorizontal: normalizeDimens(15)
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: normalizeDimens(110),
    marginBottom: normalizeDimens(15),
    borderRadius: 10/2
  },
  text: {
    color: '#000',
    fontSize: normalizeDimens(14),
  }
})

export default styles;
