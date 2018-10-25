/**
 * vue-wx-jssdk v0.1.0
 * https://github.com/defypro/vue-wx-jssdk
 * @license MIT
 */
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

var index = {install: install};

export default index;
