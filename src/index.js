const install = function (Vue, WxJssdk) {
    if (install.installed) return

    Vue.wx = WxJssdk

    Object.defineProperties(Vue.prototype, {

        wx: {
            get() {
                return WxJssdk
            }
        },

        $wx: {
            get() {
                return WxJssdk
            }
        }

    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {install}