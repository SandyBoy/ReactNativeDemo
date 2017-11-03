/**
 * Created by voyageSun on 17/11/1.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';



export default class NavigationBars extends Component {
    ClickView(){
        alert(123);
    }

    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.statusBar}>
                    <StatusBar hidden={false} barStyle="light-content"/></View>
                <View style={Styles.nav}>
                    <Text style={{justifyContent:'center',fontSize:20,backgroundColor:'white',flexDirection:'column',}} onPress={this.ClickView}>左边</Text>
                    <Text style={{justifyContent:'center',fontSize:20,backgroundColor:'white',flexDirection:'column',}}>中间</Text>
                    <Text style={{justifyContent:'center',fontSize:20,backgroundColor:'white',flexDirection:'column',}}>右边</Text>
                </View>
            </View>
        )
    }
}

const Styles=StyleSheet.create({
    container:{
        backgroundColor:'#63B8FF',
        padding:5
    },
    statusBar:{
        height:Platform.OS === 'ios' ? 20 : 20
    },
    nav:{
        height:30,
        justifyContent:'space-between',
        flexDirection:'row'
    }
});