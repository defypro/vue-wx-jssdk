/**
 * vue-bus v0.0.4
 * https://github.com/defypro/vue-wx-jssdk
 * @license MIT
 */
import WxJssdk from '@defy/wx-jssdk';

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

export default index;
