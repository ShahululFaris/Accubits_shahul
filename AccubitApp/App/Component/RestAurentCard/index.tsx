import React  from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';
import FastImage from 'react-native-fast-image';
import color from '../../modules/Color';

type ActionButtonProps = {
  imageUrl?: string;
  brand: string;
  onPress: () => void;
}

const RestAurentCard = (props: ActionButtonProps) => {

  const onActionPress = () => {
    if (props.onPress) {
      props.onPress()
    }
  }

  return (
      <TouchableOpacity onPress={onActionPress} style={[styles.mainView]}>
          <FastImage
              style={{ width: 200, height: 100 }}
              source={props.imageUrl ? { uri: props.imageUrl } : require('../../assets/PlaceHolder/Restaurent.png')}
              resizeMode={FastImage.resizeMode.contain}
          />
          <Text style = {{fontSize: 20}}>{props.brand}</Text>
      </TouchableOpacity>
  );
}

const styles              = StyleSheet.create({
  container               : {
    width                 : 93,
    height                : 38,
    borderRadius          : 22,
    backgroundColor       : color.white,
    alignItems            : 'center',
    justifyContent        : 'center' 
  }, 
  mainView         : {
    alignSelf: 'center',
    alignItems: "center",
    width: "50%",
    height: 200,
},     
  innerView               : {
      width               : 62,
      alignSelf: 'center',
      marginBottom: 25,
      flexDirection       : 'row',
      alignItems          : 'center',
      justifyContent      : 'space-between'
  },
  titleText               : {
    fontSize              : 15
  }      
});

export default RestAurentCard