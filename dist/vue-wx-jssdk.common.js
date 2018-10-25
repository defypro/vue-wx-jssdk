/**
 * vue-bus v0.0.4
 * https://github.com/defypro/vue-wx-jssdk
 * @license MIT
 */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var WxJssdk = _interopDefault(require('@defy/wx-jssdk'));

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

module.exports = index;
