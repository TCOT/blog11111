import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/styles/index.scss' // global css
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(mavonEditor)
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
