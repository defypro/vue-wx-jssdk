/**
 * vue-wx-jssdk v0.0.9
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

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

var index = {install: install};

export default index;
