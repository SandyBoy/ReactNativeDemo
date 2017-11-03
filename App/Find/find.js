/**
 * Created by voyageSun on 17/10/25.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    ToastAndroid,
    TouchableHighlight,
} from 'react-native';


import * as WeChat from 'react-native-wechat';
class CustomButton extends Component {
    render() {
        return (
            <TouchableHighlight
                style={styles.button}
                underlayColor="#a5a5a5"
                onPress={this.props.onPress}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}

export default class find extends Component {
    static defaultProps = {
        tabLabel: 'IOS',
    }
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],

        };
    }

    onClick() {
        WeChat.isWXAppInstalled().then((isInstalled) => {
            if (isInstalled){
                WeChat.ShareToSession({
                    type:'news',
                    title:'微信分享',
                    description:'描述',
                    webpageUrl:'https://www.baidu.com/'
                }).catch((error) => {
                    alert(error.message)
                });
            }else {
           alert('未安装微信') ;
            }
        });
    }

    render() {
        return (  <View style={{margin:20}}>
            <Text style={styles.welcome}>
                微信好友/朋友圈分享实例
            </Text>
            <CustomButton text='微信好友分享-文本'
                          onPress={() => {
                              WeChat.isWXAppInstalled()
                                  .then((isInstalled) => {
                                      if (isInstalled) {
                                          WeChat.shareToSession({type: 'text', description: '测试微信好友分享文本'})
                                              .catch((error) => {
                                                  alert(error.message);
                                              });
                                      } else {
                                          alert('没有安装微信软件，请您安装微信之后再试');
                                      }
                                  });
                          }}
            />
            <CustomButton text='微信好友分享-链接'
                          onPress={() => {
                              WeChat.isWXAppInstalled()
                                  .then((isInstalled) => {
                                      if (isInstalled) {
                                          WeChat.shareToSession({
                                              title:'微信好友测试链接',
                                              description: '分享自:江清清的技术专栏(www.lcode.org)',
                                              thumbImage: 'http://mta.zttit.com:8080/images/ZTT_1404756641470_image.jpg',
                                              type: 'news',
                                              webpageUrl: 'http://www.lcode.org'
                                          })
                                              .catch((error) => {
                                                  alert(error.message);
                                              });
                                      } else {
                                          alert('没有安装微信软件，请您安装微信之后再试');
                                      }
                                  });
                          }}
            />
            <CustomButton text='微信朋友圈分享-文本'
                          onPress={() => {
                              WeChat.isWXAppInstalled()
                                  .then((isInstalled) => {
                                      if (isInstalled) {
                                          WeChat.shareToTimeline({type: 'text', description: '测试微信朋友圈分享文本'})
                                              .catch((error) => {
                                                  alert(error.message);
                                              });
                                      } else {
                                          alert('没有安装微信软件，请您安装微信之后再试');
                                      }
                                  });
                          }}
            />
            <CustomButton text='微信朋友圈分享-链接'
                          onPress={() => {
                              WeChat.isWXAppInstalled()
                                  .then((isInstalled) => {
                                      if (isInstalled) {
                                          WeChat.shareToTimeline({
                                              title:'微信朋友圈测试链接',
                                              description: '分享自:江清清的技术专栏(www.lcode.org)',
                                              thumbImage: 'http://mta.zttit.com:8080/images/ZTT_1404756641470_image.jpg',
                                              type: 'news',
                                              webpageUrl: 'http://www.lcode.org'
                                          })
                                              .catch((error) => {
                                                  alert(error.message);
                                              });
                                      } else {
                                          alert('没有安装微信软件，请您安装微信之后再试');
                                      }
                                  });
                          }}
            />
        </View>);
    }
    componentDidMount (){
        WeChat.registerApp('wx7abb72c88abe0526')
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    button: {
        margin:5,
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
    },
});