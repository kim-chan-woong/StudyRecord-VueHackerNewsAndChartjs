import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
// import createListView from '../views/CreateListView.js';
import bus from '../utils/bus.js';
import { store } from '../store/index.js';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            // 첫 화면에 뿌려질 컴포넌트
            redirect: '/news',
        },

        {
            // path: url 주소
            path: '/news',
            name: 'news',
            // component: 특정 url 주소로 갔을 때 표시될 컴포넌트
            component: NewsView,
            // 컴포넌트(인스턴스) 로직 재사용, 하이 오더 컴포넌트(HOC)
            // component: createListView('NewsView'),

            // to: 이동할 URL의 라우팅 정보
            // from: 현재 URL의 라우팅 정보
            // next: 호출 해야 URL로 이동
            beforeEnter: (to, from, next) => {
                // console.log('to', to);
                // console.log('from', from);
                // console.log('next', next);
                // next();
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        console.log(5);
                        console.log('fetched');
                        // bus.$emit('end:spinner');
                        next();
                    })
                    .catch((error) => {
                        console.log(error);
                        });
                },
        },

        {
            path: '/ask',
            name: 'ask',
            component: AskView,
            beforeEnter: (to, from, next) => {
                // console.log('to', to);
                // console.log('from', from);
                // console.log('next', next);
                // next();
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        console.log(5);
                        console.log('fetched');
                        // bus.$emit('end:spinner');
                        next();
                    })
                    .catch((error) => {
                        console.log(error);
                        });
                },
            // component: createListView('AskView'),
        },

        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
            // component: createListView('JobsView'),
            beforeEnter: (to, from, next) => {
                // console.log('to', to);
                // console.log('from', from);
                // console.log('next', next);
                // next();
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        console.log(5);
                        console.log('fetched');
                        // bus.$emit('end:spinner');
                        next();
                    })
                    .catch((error) => {
                        console.log(error);
                        });
                },
        },

        {
            path: '/user/:id',
            component: UserView,
        },

        {
            path: '/item/:id',
            component: ItemView,
        }
    ]
});