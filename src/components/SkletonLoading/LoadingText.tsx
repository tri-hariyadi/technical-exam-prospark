import React from 'react';
import { View, ViewStyle } from 'react-native';
import LoadingRect from './LoadingRect';
import styles from './style';

interface IProps {
  count?: number, height?: number, style?: ViewStyle, styleRect?: ViewStyle
}

const LoadingText: React.FC<IProps> = ({count, height, style, styleRect}) => {
  return (
    <>
      {Array.from(Array(count)).map((item, idx) => {
        const range = (100 - 65) / 5;
        const width = Math.floor(Math.random() * range) * 5 + 70;
        const lineLength = `${width}%`;

        return (
          <View key={idx} style={[styles.loadingTextWrapp, style]}>
            <LoadingRect width={lineLength} height={height as number} style={styleRect} />
          </View>
        );
      })}
    </>
  );
};

LoadingText.defaultProps = {
  count: 4,
  height: 15,
  style: undefined,
  styleRect: undefined,
};

export default React.memo(LoadingText);
