import WxJssdk from '@defy/wx-jssdk'

const install = function (Vue) {
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

export default {install}