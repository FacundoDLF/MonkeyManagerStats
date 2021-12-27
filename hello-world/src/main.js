import Vue from 'vue';
import Store from './store';
import App from './App.vue';
import router from './router'

new Vue({
  render: h => h(App),
  router,
  store: Store
}).$mount('#app');