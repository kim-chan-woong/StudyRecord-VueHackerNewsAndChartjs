// main.js는 기본적으로 애플리케이션의 설정, 플러그인, 라이브러리 등의
// 구조도가 보여야함 / 한 가지에 너무 편중되어 코드가 길어지는 것 방지
import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js'
import { store } from './store/index.js';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
