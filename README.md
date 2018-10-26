# vue-wx-jssdk [![Author](https://img.shields.io/badge/author-defy-green.svg)](https://github.com/defypro)  [![Downloads](https://img.shields.io/npm/dt/@defy/vue-wx-jssdk.svg)](https://www.npmjs.com/package/@defy/vue-wx-jssdk) [![Version](https://img.shields.io/npm/v/@defy/vue-wx-jssdk.svg)](https://www.npmjs.com/package/@defy/vue-wx-jssdk) [![License](https://img.shields.io/npm/l/@defy/vue-wx-jssdk.svg)](https://www.npmjs.com/package/@defy/vue-wx-jssdk)

## Installation
You can install it via [npm](https://npmjs.com).
```
$ npm i @defy/vue-wx-jssdk -S
```
```
import Vue from 'vue';
import WxJssdk from '@defy/wx-jssdk'
import VueWxJssdk from '@defy/vue-wx-jssdk';

Vue.use(VueWxJssdk, WxJssdk);
```

## Usage
```
// ...
mounted() {
  this.$wx.config({debug = false, appId:'', timestamp:'', nonceStr:'', signature:'', jsApiList = []})
}
```
#### Trigger
```
// ...
methods: {
  scanQRCode() {
    this.$wx.scanQRCode().then(res=>{
    	console.log(res)
    })
  }
}
```
## License
[MIT](https://opensource.org/licenses/MIT)
