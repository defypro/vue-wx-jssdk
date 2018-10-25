/**
 * vue-bus v0.0.5
 * https://github.com/defypro/vue-wx-jssdk
 * @license MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.VueBus = factory());
}(this, (function () { 'use strict';

    var install = function (Vue, WxJssdk) {
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

    if (typeof window !== 'undefined' && window.Vue) {
        install(window.Vue);
    }

    var index = {install: install};

    return index;

})));
