/**
 * Created by voyageSun on 17/10/24.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Navigator
} from 'react-native';

// react - native - swiper

import TabNavigator from 'react-native-tab-navigator'
import MyInfo from '../App/MySetting/MyInfo'
import  HomeNative from '../App/Home/HomeNative'
import  Find from '../App/Find/find'
import ImagerLoop from '../App/Swiper/ImagerLoop'

export default class HomePager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'popular',
        }
    }

    render() {
        return ( <View style={styles.container}>
            <TabNavigator >
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'popular'} //设置选中的位置
                    title="最热"
                    selectedTitleStyle={{color: '#63B8FF'}}
                    renderIcon={() =>
                        <Image style={styles.icon} source={require('../App/Images/ic_popular.png')}/>}
                    renderSelectedIcon={() =>
                        <Image style={[styles.icon, {tintColor: '#63B8FF'}]}
                               source={require('../App/Images/ic_popular.png')}/>}
                    onPress={() => this.setState({selectedTab: 'popular'})}  //点击
                >
                    <HomeNative/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'renzheng'}
                    title="认证"
                    selectedTitleStyle={{color: '#63B8FF'}}
                    renderIcon={() =>
                        <Image style={styles.icon} source={require('../App/Images/ic_favorite.png')}/>}
                    renderSelectedIcon={() =>
                        <Image style={[styles.icon, {tintColor: '#63B8FF'}]}
                               source={require('../App/Images/ic_favorite.png')}/>}
                    onPress={() => this.setState({selectedTab: 'renzheng'})}
                >
                    <ImagerLoop></ImagerLoop>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'find'}
                    title="发现"
                    selectedTitleStyle={{color: '#63B8FF'}}
                    renderIcon={() =>
                        <Image style={styles.icon} source={require('../App/Images/ic_trending.png')}/>}
                    renderSelectedIcon={() =>
                        <Image style={[styles.icon, {tintColor: '#63B8FF'}]}
                               source={require('../App/Images/ic_trending.png')}/>}
                    onPress={() => this.setState({selectedTab: 'find'})}
                >
                    <Find/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'my'}
                    title="我的"
                    selectedTitleStyle={{color: '#63B8FF'}}
                    renderIcon={() =>
                        <Image style={styles.icon} source={require('../App/Images/ic_my.png')}/>}
                    renderSelectedIcon={() =>
                        <Image style={[styles.icon, {tintColor: '#63B8FF'}]}
                               source={require('../App/Images/ic_my.png')}/>}
                    onPress={() => this.setState({selectedTab: 'my'})}
                >
                    <MyInfo/>
                </TabNavigator.Item>
            </TabNavigator>
        </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    taText: {
        color: "#000000",
        fontSize: 13
    },
    selectedTabText: {
        color: "#999999",
        fontSize: 13
    },
    icon: {
        width: 24,
        height: 24
    }

});