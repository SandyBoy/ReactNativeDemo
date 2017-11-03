/**
 * Created by voyageSun on 17/10/25.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    RefreshControl,
    TouchableOpacity
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view'
import  FirstPage from './FirstPage'
import NavigationBars from '../NavigationBars'

const languages= ["Android","IOS","Java","React"];
export default class HomeNative extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            isLoading : true
        };
    }

    ChangeTab(obj) {
        this.loadData(languages[obj.i]);
    }

    loadData (flag) {
        var Url = 'https://api.github.com/search/repositories?q=' + flag + '&sort=stars';
        this.setState({isLoading:true});
        fetch(Url)
            .then(response => response.json())
            .then((responseData) => {
                let data = responseData.items;
                let dataBlob = [];
                let i = 0;
                data.map(function (item) {
                    dataBlob.push({
                        key: i,
                        value: item,
                    })
                    i++;
                });
                this.setState({
                    //复制数据源
                    dataSource: dataBlob,
                    isLoading:false,
                });
                data = null;
                dataBlob = null;
            })
            .catch((error) => {
            }).done();

    }
    //返回itemView
    renderItemView = ({item, index}) =>{
        return (

                <TouchableOpacity activeOpacity={0.5}
                                  onPress={this.itemClick.bind(this,item.value.name,index)}>
                <Text style={styles.title}>name: {item.value.name} ({item.value.stargazers_count}
                    stars)</Text>
                <Text style={styles.content}>description: {item.value.description}</Text>
                </TouchableOpacity>

        );
    }

    itemClick({item,index}){
        alert('第'+index+'条'+item)
    }

    createEmptyView(){
        return (
           <Text style={{fontSize:30,alignSelf:'center'}}>数据加载中,请等待。。。</Text>
        );
    }

    createHeaderView(){
        return (
            <Text style={{fontSize:30,alignSelf:'center'}}>Android</Text>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBars/>

                <ScrollableTabView
                    tabBarBackgroundColor="#63B8FF"
                    tabBarActiveTextColor="#FFF"
                    tabBarInactiveTextColor="#F5FFFA"
                    locked={false}
                    tabBarUnderlineStyle={{backgroundColor: "#E7E7E7", height: 2}}
                    onChangeTab={this.ChangeTab.bind(this)}>
                    <View tabLabel="Android">
                        <FlatList
                            data={this.state.dataSource}
                            renderItem={this.renderItemView.bind(this)}
                            ItemSeparatorComponent={()=> {
                                return (<View style={{height: 1, backgroundColor: 'cyan'}}/>)
                            }} //分隔线
                            ListEmptyComponent={this.createEmptyView()}
                            ListHeaderComponent={this.createHeaderView}
                            refreshControl={
                                <RefreshControl
                                    refreshing={this.state.isLoading}
                                    tintColor="#63B8FF"
                                    title="正在加载..."
                                    titleColor="#63B8FF"
                                    colors={['#63B8FF']}
                                ></RefreshControl>
                            }

                        ></FlatList>
                    </View >
                    <View tabLabel="iOS">
                        <FlatList
                            data={this.state.dataSource}
                            renderItem={this.renderItemView.bind(this)}
                            ItemSeparatorComponent={()=> {
                                return (<View style={{height: 1, backgroundColor: 'cyan'}}/>)
                            }} //分隔线
                            refreshControl={
                                <RefreshControl
                                    refreshing={this.state.isLoading}

                                ></RefreshControl>
                            }
                        ></FlatList>
                    </View>
                    <View tabLabel="Java">
                        <FlatList
                            data={this.state.dataSource}
                            renderItem={this.renderItemView.bind(this)}
                            ItemSeparatorComponent={()=> {
                                return (<View style={{height: 1, backgroundColor: 'cyan'}}/>)
                            }} //分隔线
                        ></FlatList>
                    </View>
                    <View tabLabel="RN">
                        <FlatList
                            data={this.state.dataSource}
                            renderItem={this.renderItemView.bind(this)}
                            ItemSeparatorComponent={()=> {
                                      return (<View style={{height: 1, backgroundColor: 'cyan'}}/>)
                                  }} //分隔线
                        ></FlatList>
                    </View>
                    <View tabLabel="更多">
                        <FirstPage tabLabel='传递'/>
                    </View>
                </ScrollableTabView>
            </View>
        )
    }
    componentDidMount() {
        this.loadData(languages[0]);
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    listStyle: {
        marginTop: 20,
        backgroundColor: 'yellow',

    },
    separatorStyle: {
        height: 1,
        backgroundColor: 'gray'
    },
    title: {
        fontSize: 15,
        color: 'blue',
        marginTop: 10,

    },
    content: {
        fontSize: 15,
        color: 'black',
        marginBottom: 10
    },
    lineStyle: {
        height: 1,
        backgroundColor: 'gray'
    }
});