/**
 * vue-wx-jssdk v0.1.2
 * https://github.com/defypro/vue-wx-jssdk
 * @license MIT
 */
'use strict';

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

module.exports = VueWxJssdk;
