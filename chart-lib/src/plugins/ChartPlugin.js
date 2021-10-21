// 여기서 한 번 로딩하고 다른 컴포넌트들에서 씀.
import Chart from 'chart.js/auto';

export default {
  install(Vue) {
    Vue.prototype.$_Chart = Chart;
  }
}