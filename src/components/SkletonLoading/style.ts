import { StyleSheet } from "react-native";
import normalizeDimens from "../../utils/normalizeDimens";

const styles = StyleSheet.create({
  LoadingRect: {
    backgroundColor: '#E4E5E7',
    borderRadius: 13,
  },
  loadingTextWrapp: {
    paddingVertical: normalizeDimens(5),
  },
});

export default styles;
