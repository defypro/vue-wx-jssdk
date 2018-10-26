const VueWxJssdk = {
    install: function (Vue, WxJssdk) {
        Vue.wx = WxJssdk;

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
};

if (window.Vue && window.wx) {
    Vue.use(VueWxJssdk, window.wx)
}

export default VueWxJssdk