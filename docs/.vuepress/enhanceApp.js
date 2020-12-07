import Vue from 'vue';
import iView from 'view-design';
import axios from 'axios';
// import style
import 'view-design/dist/styles/iview.css';
import './styles/index.css';

const files = require.context('./components/examples', false, /\.vue$/);
const modules = {};
files.keys().forEach(key => {
    const name = key.replace(/(\.\/|\.vue)/g, '');
    Vue.component(name, files(key).default)
});
console.log(modules);
Vue.mixin({
    mounted() {
        if (this === this.$root) {
            console.log(this)
        }
    }
});
Vue.prototype.axios = axios;

Vue.use(iView);

export default () => {

}
