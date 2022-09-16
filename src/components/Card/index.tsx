import React, { ReactNode } from 'react';
import {SafeAreaView, Image, StatusBar, Animated, Text, View} from 'react-native';
import NoImage from '../../assets/noimage.jpeg';
import styles from './styles';

type Props = {
  data?: {
    name: string,
    description: string,
    price: number,
    quantity: number,
    id: string
  },
  children?: ReactNode
}

const Card: React.FC<Props> = ({ data, children }) => {
  return (
    <View style={styles.container}>
      {children
        ? children
        : (
          <View>
            <Image source={NoImage} style={styles.image} />
            <Text style={styles.text}>Name: {data?.name}</Text>
            <Text style={styles.text}>Description: {data?.description}</Text>
            <Text style={styles.text}>Price: $ {data?.price}</Text>
            <Text style={styles.text}>Quantity: {data?.quantity}</Text>
          </View>
        )
      }
    </View>
  )
}

export default Card;
