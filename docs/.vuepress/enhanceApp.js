import Vue from 'vue';
import iView from 'view-design';
import axios from 'axios';
// import style
import 'view-design/dist/styles/iview.css';
import './styles/index.css';

const files = require.context('./components/examples', true, /\.vue$/);
const modules = {};
files.keys().forEach(key => {
    const path = key;
    if(key.includes('/')){
        key = key.split('/');
        key = key[key.length - 1];
    }
    const name = key.replace(/(\.\/|\.vue)/g, '');
    
    Vue.component(name, files(path).default)
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
