import React from 'react';
import { StyleSheet, Dimensions, ActivityIndicator, View, StatusBar,ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import color from '../../modules/Color';
const height = Dimensions.get('window').height

const CustomSafeAreaView = (props: any) => {

  return (
      <>
          <StatusBar translucent = { props.translucent ? props.translucent : false} barStyle={'light-content'} backgroundColor = {props.backgroundColor ? props.backgroundColor : "transparent"}/>
          <SafeAreaView
					edges={props.edges ? props.edges : ['right','left',]}
                    style={[styles.container, props.style]}
				>
              {props.showLoadingIndicator ?
                  <View style={styles.loader}>
                      <ActivityIndicator size='large' />
                  </View>
                  : null
              }
              {props.children}
          </SafeAreaView>
      </>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.semiBlack,
    },
    popup: {
        position: 'absolute',
        alignSelf: 'center',
        marginTop: height - 100,
        zIndex: 2
    },
    loader: {
        zIndex: 999,
        height: 50,
        width: 50,
        left: (Dimensions.get('window').width / 2) - 25,
        top: (Dimensions.get('window').height / 2) - 25,
        position: 'absolute',
    }
});
export default CustomSafeAreaView