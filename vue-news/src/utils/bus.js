// spinner의 이벤트 버스 설정
// 이벤트 버스: 빈 이벤트 객체를 생성하여 그를 통해 컴포넌트 간의 데이터를 전송
import Vue from 'vue';

// export 형태간 import 차이
// bus.js
// export const bus = new Vue();

// App.vue
// import { bus } from '../filepath';

// bus.js
// export default new Vue();

// App.vue
// import 원하는 아무 문자 from '../filepath';

export default new Vue();