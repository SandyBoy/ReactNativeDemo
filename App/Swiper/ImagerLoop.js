/**
 * Created by voyageSun on 17/11/1.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,

} from 'react-native';

import Swiper from 'react-native-swiper'

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;

export default class ImagerLoop extends Component {
    render() {
        return (
            <Swiper style={{alignItems:'center',justifyContent:'center'}}
                height={200}
                horizontal={true}
                paginationStyle={{bottom: 10}}
                showsButtons={false}>
                <Image source={require('../Images/banner.png')} style={styles.img}/>
                <Image source={require('../Images/banner.png')} style={styles.img}/>
                <Image source={require('../Images/banner.png')} style={styles.img}/>
                </Swiper>
        )
    }

}


const styles = StyleSheet.create({
    img: {
        width: ScreenWidth,
        height: 200,
    }
})