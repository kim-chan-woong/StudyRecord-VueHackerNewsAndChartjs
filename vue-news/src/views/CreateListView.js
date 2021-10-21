import ListView from './ListView.vue';
import bus from '../utils/bus.js';

export default function createListView(name) {
  return {
    // 재사용할 컴포넌트(인스턴스) 옵션들이 들어갈 자리
    name: name,
    created() {
      bus.$emit('start:spinner');
      // FETCH_NEWS에서 promise 객체를 리턴 받음
      setTimeout(() => {
        this.$store.dispatch('FETCH_LIST', this.$route.name)
          .then(() => {
            console.log('fetched');
            bus.$emit('end:spinner');
          })
          .catch((error) => {
            console.log(error);
          });
      }, 1500);
    },
    render(createElement) {
      return createElement(ListView);
    }
  }
}