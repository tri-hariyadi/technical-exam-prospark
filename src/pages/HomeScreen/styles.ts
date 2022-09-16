import { Platform, StyleSheet } from "react-native";
import normalizeDimens from "../../utils/normalizeDimens";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF0FB',
  },
  wrappItem: {
    paddingHorizontal: normalizeDimens(20)
  },
  header: {
    backgroundColor: '#3F4EF3',
    padding: normalizeDimens(20),
    alignItems: 'center',
    zIndex: 3
  },
  textHeader: {
    fontSize: normalizeDimens(18),
    fontWeight: 'bold',
    color: '#FFF'
  },
  loadingWrapp: {
    paddingHorizontal: normalizeDimens(20)
  },
  swipeWarn: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  textWrapp: {
    backgroundColor: '#7dd3fc',
    paddingVertical: normalizeDimens(10),
    paddingHorizontal: normalizeDimens(15),
    borderRadius: 100/2,
    marginTop: Platform.OS === 'ios' ? 10  :  0
  },
  swipeText: {
    color: '#000',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorText: {
    color:  'red',
    fontSize: normalizeDimens(20),
    fontWeight: 'bold'
  }
});

export default styles;
