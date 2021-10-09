import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import color from '../../modules/Color';

const SCREEN_WIDTH = Dimensions.get('window').width

type AppHeaderProps = {
  onLeftButtonPress?: ()=> void;
  style?: any;
  leftIconColor?: string;
  leftTitle?: string;
  leftIcon?: string;
  rightIconColor?: string;
  leftIconSize?: number;
  titleStyle?: any;
  leftText?: string;
  titleTextStyle?: any;
  title?: string;
  leftTextStyle?: any;
}

const HomeHeader = (props: AppHeaderProps) => {


    const onLeftButtonPress = () => {
        if (props.onLeftButtonPress)
            props.onLeftButtonPress()
    }

    const leftButtonComponent = () => {
        return (
            props.leftIcon ?
                <TouchableOpacity style={styles.menu} onPress={() => onLeftButtonPress()}>
                    <Icon
                        style={{ color: props.leftIconColor || color.darkGrey }}
                        name={props.leftIcon}
                        size={props.leftIconSize ? props.leftIconSize : 20}
                    />
                    <Text style={[styles.leftTextStyle,props.leftTextStyle]}>{props.leftText ? props.leftText : ""}</Text>
                </TouchableOpacity>
                : null
        )

    }

    return (
        <View style={[styles.mainView, props.style]}>
            {leftButtonComponent()}
            <View style={[styles.titleView, props.titleStyle]}>
                <Text style={[styles.title, props.titleTextStyle || {}]}>
                    {props.title ? props.title : ""}
                </Text>
            </View>
        </View>
    );
}

const styles              = StyleSheet.create({
   mainView            : {
        flexDirection   : 'row',
        alignItems      : 'center',
        height          : 57,
        zIndex          : 10 ,
        justifyContent  : "center",

    },
    logoContainer       : {
        marginLeft      : 25,
    },
    titleView           : {
        height          : '100%',
        width           : SCREEN_WIDTH*0.4,
        alignItems      : 'center',
        flexDirection   : 'row',
        justifyContent  : 'center',
    }, 
    title               : { 
        fontSize        : 16,
        color           : color.black,
        textAlign       : "center"
    },
    menu                : {  
        justifyContent  : 'center',
        alignItems      : 'center',
        position        : "absolute",
        left            : 19,
        height          : '100%',
        flexDirection: 'row',
    },
    leftTextStyle       : {
        color           : color.black,
        fontSize        : 16
    },   
});

export default HomeHeader