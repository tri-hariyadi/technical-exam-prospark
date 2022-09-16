import React, { useEffect, useRef } from 'react';
import {SafeAreaView, Image, StatusBar, Animated, Text} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import BgPrimary from '../../assets/bg_primary.png';
import styles from './styles';

interface NavigationProps {
  navigation: NativeStackNavigationProp<any, any>;
}

const SplashScreen: React.FC<NavigationProps> = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
      delay: 500
    }).start();
    setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 3000);
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor='transparent' translucent />
        <Animated.View style={[
          styles.wrapper,
          {
            opacity: fadeAnim,
            transform: [
              { scale: fadeAnim },
              { translateY: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [-800, 0],
              }) },
            ] },
        ]}>
          <Text style={[styles.text, styles.title]}>HANDS ON TECHNICAL EXAM</Text>
          <Text style={styles.text}>Mobile Application Developer</Text>
          <Text style={styles.text}>Tri Haryadi</Text>
        </Animated.View>
      </SafeAreaView>
      <Image source={BgPrimary} style={styles.background} />
    </>
  );
};

export default SplashScreen;
