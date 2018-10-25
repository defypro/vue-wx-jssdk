# vue-bus [![Build Status](https://img.shields.io/circleci/project/yangmingshan/@defy/vue-wx-jssdk.svg)](https://circleci.com/gh/yangmingshan/@defy/vue-wx-jssdk) [![Coverage Status](https://img.shields.io/codecov/c/github/yangmingshan/@defy/vue-wx-jssdk.svg)](https://codecov.io/gh/yangmingshan/@defy/vue-wx-jssdk) [![Downloads](https://img.shields.io/npm/dt/@defy/vue-wx-jssdk.svg)](https://www.npmjs.com/package/vue-bus) [![Version](https://img.shields.io/npm/v/@defy/vue-wx-jssdk.svg)](https://www.npmjs.com/package/@defy/vue-wx-jssdk) [![License](https://img.shields.io/npm/l/@defy/vue-wx-jssdk.svg)](https://www.npmjs.com/package/@defy/vue-wx-jssdk)

A event bus for Vue.js, support both Vue 1.0 and 2.0. See Vue [documentation](https://vuejs.org/v2/guide/migration.html#Events) for more detail.

## Installation
You can install it via [npm](https://npmjs.com).
```
$ npm i @defy/vue-wx-jssdk -S
```
When used with a module system, you must explicitly install the bus via Vue.use():
```
import Vue from 'vue';
import VueWxJssdk from '@defy/vue-wx-jssdk';

Vue.use(VueWxJssdk);
```

## Usage
```javacript
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
#### Another way to use vue-bus
```

## License
[MIT](https://opensource.org/licenses/MIT)
