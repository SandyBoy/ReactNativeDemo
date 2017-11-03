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
    TouchableOpacity,
    Image
} from 'react-native';

import SideMenu from 'react-native-side-menu';
import Menu from './Menu'

export default class MyInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            selectedItem: 'About'
        }
    }

    onMenuItemSelected = (item) => {
        this.setState({
            isOpen: false,
            selectedItem: item,
        });
    }

    updateMenuState(isOpen) {
        this.setState({
            isOpen: isOpen,
        })
    }

    render() {
        const menu = <Menu onItemSelected={this.onMenuItemSelected}/>;
        return (
            <SideMenu isOpen={this.state.isOpen} menu={menu}
                      onChange={(isOpen)=>this.updateMenuState(isOpen)}>

                <View style={styles.container}>
                    <Text style={[styles.instructions, {color: 'red'}]}>
                        默认菜单是: {this.state.selectedItem}
                    </Text>
                </View>

            </SideMenu>
        )
    }
}


const styles = StyleSheet.create({
        contain: {
            flex: 1,
        },
        flex: {
            flex: 1,
        },
        center: {
            justifyContent: 'center',
            alignItems: 'center'
        },
        img: {
            width: 40,
            height: 33,
        },
        button: {
            position: 'absolute',
            padding: 20,
            top: 20
        },
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
        },
        welcome: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
        },
        instructions: {
            textAlign: 'center',
            color: '#333333',
            marginBottom: 5,
        }
    });