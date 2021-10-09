import React from 'react';
import {
  StyleSheet
} from 'react-native';

import color from '../modules/Color';
import CustomSafeAreaView from '../Component/CustomSafeAreaView';
import {navigationType} from '../global/types';
import HomeHeader from '../Component/HomeHeader';

const RestAurentDetailScreen = (props: navigationType) => {

  return (
    <CustomSafeAreaView  edges={['top']} style={{ backgroundColor: color.white }} translucent={true}>
        <HomeHeader
                    onLeftButtonPress={() => props.navigation.goBack()}
                    leftIcon="chevron-thin-left"
                    style={styles.headerStyle}
                    title="Home"
                />
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