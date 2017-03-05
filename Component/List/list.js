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
    View,
    ListView,
    Platform,
    TouchableHighlight,
    Image,
    Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const {width,height} = Dimensions.get('window');
import  config from '../Common/config'
import request from '../Common/request'
export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        };
    }
    componentDidMount() {
        this.fetchNetData();
    }
    fetchNetData(){

        request.get(config.api.list,{
            accessToken:'jjjj'
        }).then(
            (data)=>{

                if(data.success){
                    this.setState({
                        dataSource:this.state.dataSource.cloneWithRows(
                            data.data
                        ),
                    });
                }

            }

        ).catch(
            (err) => {
                console.log('err' + err);
            }
        )

    }

    _renderRow = (rowData) =>{
        return(
            <TouchableHighlight>
                <View style = {styles.item}>
                    <Text style = {styles.title}>{rowData.title}</Text>
                    <Image style = {styles.thumb} source={{uri:rowData.thumb}}>
                        <Icon name="ios-play"
                              size = {28}
                              style = {styles.play}/>
                    </Image>
                    <View style = {styles.itemFooter}>
                        <View style = {styles.handleBox}>
                            <Icon name="ios-heart-outline"
                                  size = {28}
                                  style = {styles.up}/>
                            <Text style = {styles.handleText}>点赞</Text>
                        </View>
                        <View style = {styles.handleBox}>
                            <Icon name="ios-chatbubbles"
                                  size = {28}
                                  style = {styles.commentIcon}/>
                            <Text style = {styles.handleText}>点赞</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );

    }
    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.header}>
                    <Text style = {styles.headerText}>
                        视频列表
                    </Text>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => this._renderRow(rowData)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBEBEB',
    },
    header:{
        backgroundColor:'#EE735C',
        height:Platform.OS === 'ios'? 64:44,
        justifyContent:'center',
        alignItems:'center',
    },
    headerText:{
        fontSize:18,
        color:'white',
    },
    item:{
        width:width,
        marginBottom:10,
        backgroundColor:'white'
    },


    title:{
        fontSize:18,
        padding:10,
        color:'#333'
    },

    thumb:{
        width:width,
        height:width*0.56,
        resizeMode:'cover'
    },

    play:{
        position:'absolute',
        bottom:14,
        right:14,
        width:46,
        height:46,
        paddingTop:9,
        paddingLeft:18,
        backgroundColor:'transparent',
        borderColor:'#000',
        borderWidth:1,
        borderRadius:23,
        color:'#ed7b66'
    },


    itemFooter:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#eee'
    },

    handleBox:{
        padding:10,
        flexDirection:'row',
        width: width/2 - 0.5,
        justifyContent:'center',
        backgroundColor:'white',
    },


    up:{

        fontSize:22,
        color:'#333'
    },

    commentIcon:{
        fontSize:22,
        color:'#333'
    },



    handleText:{
        fontSize:18,
        color:'#333',
        paddingLeft:12,
    },



});

