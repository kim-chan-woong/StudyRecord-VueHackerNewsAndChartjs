import {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchUserInfo,
    fetchAskDetail,
    fetchList,
} from '../api/index.js';

export default {
    // FETCH_NEWS(context) {
    //     return fetchNewsList()
    //         .then(response => {
    //             context.commit('SET_NEWS', response.data);
    //             // console.log(response.data);
    //             // spinner event 종료 시점을 위함
    //             // actions에서는 mutations에 데이터를 담아주는 역할
    //             return response;
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // },
    async FETCH_NEWS(context) {
        try {
            const response = await fetchNewsList()
            context.commit('SET_NEWS', response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    // FETCH_ASK(context) {
    //     return fetchAskList()
    //         .then(response => {
    //             context.commit('SET_ASK', response.data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // },
    async FETCH_ASK(context) {
        try {
            const response = await fetchAskList()
            context.commit('SET_ASK', response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    // FETCH_JOBS({ commit }) {
    //     return fetchJobsList()
    //         .then(({ data }) => {
    //             commit('SET_JOBS', data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // },
    async FETCH_JOBS(context) {
        try {
            const response = await fetchJobsList()
            context.commit('SET_JOBS', response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    // FETCH_USER({ commit }, name) {
    //     return fetchUserInfo(name)
    //         .then(({ data }) => {
    //             commit('SET_USER', data)
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // },
    async FETCH_USER(context, name) {
        try {
            const response = await fetchUserInfo(name)
            context.commit('SET_USER', response.data);
            return response;            
        } catch (error) {
            console.log(error);
        }
    },
    // FETCH_ASK_DETAIL({ commit }, askid) {
    //     return fetchAskDetail(askid)
    //         .then(({ data }) => {
    //             commit('SET_ASK_DETAIL', data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // },
    async FETCH_ASK_DETAIL(context, askid) {
        try {
            const response = await fetchAskDetail(askid);
            context.commit('SET_ASK_DETAIL', response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },

    // FETCH_LIST({ commit }, pageName) {
    //     return fetchList(pageName)
    //         .then((response) => {
    //             console.log(4);
    //             commit('SET_LIST', response.data)
    //         })
    //         .catch(error => console.log(error));
    // }
    async FETCH_LIST(context, pageName) {
        // api/index.js에서 에러 처리를 했다면 여기선 try, catch구문을 쓰지 않고 가능
        // 기호에 맞게 작성
        try {
            const response = await fetchList(pageName)
            context.commit('SET_LIST', response.data)
            return response;
        } catch (error) {
            console.log(error);
        }
    },
}