/**
 * Created by voyageSun on 17/10/25.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    Dimensions,
    Button,
    TouchableOpacity
} from 'react-native';


export default class FirstPage extends Component {
    static defaultProps = {
        tabLabel: '默认',
    }


    render() {
        return (
            <View style={styles.contain}>
                <Text>FirstPager+{this.props.tabLabel}</Text>
            </View>
        )
    }


}


const
    styles = StyleSheet.create({
        contain: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
            marginTop: 20
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