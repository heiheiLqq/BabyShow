/**
 * Created by zzh on 2017/3/5.
 */
/**
 * Created by zzh on 2017/3/5.
 */
/**
 * Created by zzh on 2017/3/5.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import List from './../List/list';
import Edit from './../Edit/edit';
import Picture from './../Picture/picture';
import Account from './../Account/account';

import Tabbar from './Tabbar';

import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';

import Icon from 'react-native-vector-icons/Ionicons';
import IconFont from 'react-native-vector-icons/FontAwesome';


export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tabNames: ['列表', '录制', '图片', '我的','Icon练习'],
            tabIconNames: ['ios-videocam','ios-recording','ios-reverse-camera','ios-contact','md-home'],

        };
    }

    // tabIconNames: ['ios-home', 'ios-grid', 'ios-time', 'ios-cart', 'ios-contact'],

    render() {
        let tabNames = this.state.tabNames;
        let tabIconNames = this.state.tabIconNames;
        return (
            <ScrollableTabView
                // renderTabBar={() => <ScrollableTabBar/>}
                renderTabBar={() => <Tabbar tabNames={tabNames} tabIconNames={tabIconNames}/>}
                tabBarPosition='bottom'
                onChangeTab={(obj) => {console.log('被选中的tab下标：' + obj.i);}}
                onScroll={(position) => {console.log('滑动时的位置：' + position);}}
                locked={false}
                initialPage={0}
                prerenderingSiblingsNumber={1}
            >
                <List tabLabel="list"/>
                <Edit tabLabel="edit"/>
                <Picture tabLabel="pic"/>
                <Account tabLabel="account"/>
                <View tabLabel="IconPractice" style={styles.center}>
                    <Text >内容：ReactNative</Text>
                    <IconFont.Button name="facebook" backgroundColor="#3b5998" size={20} >
                        Login with Facebook
                    </IconFont.Button>
                    <Icon name="md-alarm" size={50}></Icon>
                    <IconFont.Button name="twitter" backgroundColor="#3b5998" size={20} >
                        Follow me on Twitter
                    </IconFont.Button>
                </View>



            </ScrollableTabView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    },
});

