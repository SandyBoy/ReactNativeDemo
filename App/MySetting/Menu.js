/**
 * Created by voyageSun on 17/11/1.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image
} from 'react-native';
export default class Menu extends Component {
    render() {
        return (
            <ScrollView style={styles.menu} scrollsToTop={false}>
                <View style={styles.avatarContainer}>
                    <Image
                        style={styles.avatar}
                        source={require('../Images/ic_popular.png')}
                    />
                    <Text style={styles.nickName}>Hello</Text>
                </View>
                <Text style={styles.item} onPress={()=>this.props.onItemSelected('我的收藏')}>我的收藏</Text>
                <Text style={styles.item} onPress={()=>this.props.onItemSelected('我的文章')}>我的文章</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    menu:{
        flex:1,
        width:window.width,
        height:window.height,
        backgroundColor:'gray',
        padding:20
    },
    avatarContainer:{
        marginBottom:20,
        marginTop:20
    },
    avatar:{
        width:50,
        height:50,
        borderRadius:20,
    },
    nickName:{
        position:'absolute',
        left:70,
        top:20,
        fontSize:18,
    },
    item:{
        fontSize:16,
        fontWeight:'300',
        paddingTop:10,
    }
});