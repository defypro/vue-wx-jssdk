/**
 * vue-bus v0.0.4
 * https://github.com/defypro/vue-wx-jssdk
 * @license MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@defy/wx-jssdk')) :
    typeof define === 'function' && define.amd ? define(['@defy/wx-jssdk'], factory) :
    (global.VueBus = factory(global.WxJssdk));
}(this, (function (WxJssdk) { 'use strict';

    WxJssdk = WxJssdk && WxJssdk.hasOwnProperty('default') ? WxJssdk['default'] : WxJssdk;

    var install = function (Vue) {
        if (install.installed) { return }

        Vue.wx = WxJssdk;

        Object.defineProperties(Vue.prototype, {

            wx: {
                get: function get() {
                    return WxJssdk
                }
            },

            $wx: {
                get: function get() {
                    return WxJssdk
                }
            }

        });
    };

    var index = {install: install};

    return index;

})));
