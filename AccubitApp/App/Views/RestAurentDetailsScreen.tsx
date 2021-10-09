import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import color from '../modules/Color';
import CustomSafeAreaView from '../Component/CustomSafeAreaView';
import {navigationType} from '../global/types';
import HomeHeader from '../Component/HomeHeader';
import FastImage from 'react-native-fast-image';

const RestAurentDetailScreen = (props: navigationType) => {
    let initData: any = {}
    const [restAurentDetails,setRestAurentDetails] = useState(initData)

  useEffect(()=>{
    if (props?.route?.params?.restAurentData) {
        setRestAurentDetails(props?.route?.params?.restAurentData)
    }
  },[])


  return (
    <CustomSafeAreaView  edges={['top']} style={{ backgroundColor: color.white }} translucent={true}>
        <HomeHeader
                    onLeftButtonPress={() => props.navigation.goBack()}
                    leftIcon="chevron-thin-left"
                    style={styles.headerStyle}
              title="DetailsScreen"
          />
          <View style={{ flex: 1, alignItems: 'center' }}>
              <FastImage
                  style={{ width: "80%", height: 200 }}
                  source={restAurentDetails?.Image ? { uri: restAurentDetails?.Image } : null}
                  resizeMode={FastImage.resizeMode.contain}
              />
              <Text>Brand: {restAurentDetails?.Brand ? restAurentDetails?.Brand : ""}</Text>
              <Text>Country: {restAurentDetails?.Country ? restAurentDetails?.Country : ""}</Text>
              <Text>Stars: {restAurentDetails?.Stars ? restAurentDetails?.Stars : ""}</Text>
              <Text>Variety: {restAurentDetails?.Variety ? restAurentDetails?.Variety : ""}</Text>
              <Text>Style: {restAurentDetails?.Style ? restAurentDetails?.Style : ""}</Text>
          </View>
      </CustomSafeAreaView>
  );
}

const styles                = StyleSheet.create({
  headerStyle               : {
    shadowOffset            : {
        width               : 0,
        height              : 20,
    },  
    shadowOpacity           : 0.05,
    shadowRadius            : 8.0,
    backgroundColor         : color.white,
    shadowColor             : color.semiBlack,
    elevation               : 10,
  },
});

export default RestAurentDetailScreen