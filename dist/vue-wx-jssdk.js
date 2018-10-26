/**
 * vue-wx-jssdk v0.1.2
 * https://github.com/defypro/vue-wx-jssdk
 * @license MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.VueWxJssdk = factory());
}(this, (function () { 'use strict';

    var VueWxJssdk = {
        install: function (Vue, WxJssdk) {
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
        }
    };

    if (window.Vue && window.wx) {
        Vue.use(VueWxJssdk, window.wx);
    }

    return VueWxJssdk;

})));
