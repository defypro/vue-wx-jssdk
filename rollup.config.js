import { version } from './package.json'
import buble from 'rollup-plugin-buble'

const banner = `/**
 * vue-bus v${version}
 * https://github.com/defypro/vue-wx-jssdk
 * @license MIT
 */`

export default {
    input: 'src/index.js',
    output: [{
        file: 'dist/vue-wx-jssdk.esm.js',
        format: 'es',
        banner
    }, {
        file: 'dist/vue-wx-jssdk.common.js',
        format: 'cjs',
        banner
    }, {
        file: 'dist/vue-wx-jssdk.js',
        format: 'umd',
        name: 'VueBus',
        banner
    }],
    plugins: [ buble() ]
}