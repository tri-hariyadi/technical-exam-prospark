import { StyleSheet } from 'react-native';
import normalizeDimens from '../../utils/normalizeDimens';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  wrapper: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins-Bold',
  },
  icon: {
    fontSize: 70,
    marginBottom: 10,
    color: '#252C5B',
  },
  background: {
    resizeMode: 'stretch',
    position: 'absolute',
    zIndex: 9999,
    transform: [
      {
        rotate: '30deg',
      },
      {
        translateX: 110,
      },
      {
        translateY: 140,
      },
    ],
  },
  text: {
    color: '#000',
    marginBottom: normalizeDimens(10),
    fontSize: normalizeDimens(14)
  },
  title: {
    fontSize: normalizeDimens(20),
    fontWeight: 'bold'
  }
});

export default styles;
