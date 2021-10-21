import axios from 'axios';

// 1.HTTP Request & Response와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

// 2. API 함수들을 정리
function fetchNewsList() {
    // return axios.get(conifg.baseUrl + 'news/1.json');
    return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchList(pageName) {
    return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

function fetchUserInfo(username) {
    return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchAskDetail(askid) {
    return axios.get(`${config.baseUrl}item/${askid}.json`);
}

export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchList,
    fetchUserInfo,
    fetchAskDetail,
}
