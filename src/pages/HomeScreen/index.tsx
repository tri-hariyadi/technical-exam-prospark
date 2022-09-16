import React, { useCallback, useEffect, useRef, useState } from 'react';
import {Animated, Text, View, FlatList, RefreshControl, NativeSyntheticEvent, NativeScrollEvent} from 'react-native';
import Card from '../../components/Card';
import Gap from '../../components/Gap';
import LoadingRect from '../../components/SkletonLoading/LoadingRect';
import LoadingText from '../../components/SkletonLoading/LoadingText';
import StatusBarApp from '../../components/StatusBarApp';
import normalizeDimens from '../../utils/normalizeDimens';
import styles from './styles';

type product = {
  name: string,
  description: string,
  price: number,
  quantity: number,
  id: string
}

const HomeScreen = () => {
  const [products, setProducts] = useState<Array<product>>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const swipeUpAnimate = useRef(new Animated.Value(0)).current;

  const fetchData = async () => {
    const resp = await fetch('https://63243a65bb2321cba9278067.mockapi.io/api/products');
    try {
      const data = await resp.json();
      if (data.constructor === Array) setProducts(data);
      else setErrorMsg('Data products is empty');
      setLoading(false);
    } catch (error) {
      setErrorMsg('Ooops, something went wrong');
    }
  };

  const onRefresh = useCallback(async () => {
    setProducts([]);
    setLoading(true);
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  }, []);

  const onFlatListScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (event.nativeEvent.contentOffset.y >= 400) {
      Animated.timing(swipeUpAnimate, {
        toValue: 1, duration: 400, useNativeDriver: false,
      }).start();
    } else {
      swipeUpAnimate.setValue(0)
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <StatusBarApp backgroundColor='#3F4EF3' />
      <View style={styles.header}><Text style={styles.textHeader}>Products</Text></View>
      <Animated.View style={[styles.swipeWarn,
        {
          opacity: swipeUpAnimate,
          top: swipeUpAnimate.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 110],
          }),
        },
      ]}>
        <View style={styles.textWrapp}>
          <Text style={styles.swipeText}>Swipe Up to refresh</Text>
        </View>
      </Animated.View>
      <View style={styles.container}>
        <FlatList
          data={products.length ? products : null}
          keyExtractor={({ id }) => `product-${id}`}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
          ListHeaderComponent={() => <Gap height={15} />}
          renderItem={({ item }) => (<View style={styles.wrappItem}><Card data={item}/></View>)}
          ItemSeparatorComponent={() => <Gap height={15} />}
          contentContainerStyle={{ flexGrow: 1 }}
          ListEmptyComponent={() => <>
            {loading
              ? (
                <View style={styles.loadingWrapp}>
                  {Array.from(Array(5)).map((item, idx) =>
                    <View key={`skleton-loading-${idx}`}>
                      <Card>
                        <LoadingRect width='100%' height={normalizeDimens(110)} />
                        <Gap height={15} />
                        <LoadingText />
                      </Card>
                      <Gap height={15} />
                    </View>
                  )}
                </View>
              )
              : (
                <View style={styles.errorContainer}>
                  {errorMsg
                    ? <Text style={styles.errorText}>{errorMsg}</Text>
                    : <Text style={styles.errorText}>Product is empty</Text>
                  }
                </View>
              )
            }
          </>}
          ListFooterComponent={() => <Gap height={30} />}
          onMomentumScrollEnd={onFlatListScrollEnd}
        />
      </View>
    </>
  )
}

export default HomeScreen
