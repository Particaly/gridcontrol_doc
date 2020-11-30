import Vue from 'vue';
import iView from 'view-design';
// import style
import 'view-design/dist/styles/iview.css';
import './styles/index.css';

Vue.mixin({
    mounted() {
        if(this === this.$root){
            console.log(this)
        }
    }
})


Vue.use(iView);
// export default ({
// 	Vue,
//     options, // the options for the root Vue instance
//     router, // the router instance for the app
//     siteData // site metadata
// }) => {
// 	Vue.use(iView);
// }
