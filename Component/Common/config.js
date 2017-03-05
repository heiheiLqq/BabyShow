/**
 * Created by zzh on 2017/3/5.
 */
const config={
    api:{
        base:'http://rap.taobao.org/mockjs/14739/',
        list:'api/list',
    },
    map:{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        follow: 20,
        timeout: 8000,
        size: 0,
    }
};

module.exports = config