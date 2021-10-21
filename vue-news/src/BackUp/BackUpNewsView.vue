<template>
  <div>
    <ul class="news-list">
      <li v-for="item in getNews" v-bind:key="item.id" class="post">
      <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <a :href="item.url">
              {{ item.title }}
            </a>
          </p>
            
          <small class="link-text">
            {{ item.time_ago }} BY
            <router-link v-bind:to="`/user/${item.user}`" class="link-text">
              {{ item.user }}
            </router-link>
          </small>
        </div>
      </li>
    </ul>
        <!-- <p v-for="item in getNews" v-bind:key="item.id">
            <a :href="item.url">
                {{ item.title }}
            </a>
            <small>
                {{ item.time_ago }} BY  -->
                <!-- <router-link v-bind:to="'/user/' + item.user">
                    {{ item.user }}
                </router-link> -->
                <!-- <router-link v-bind:to="`/user/${item.user}`">
                    {{ item.user }}
                </router-link>
            </small>
        </p> -->
  </div>
</template>

<script>

export default {
  computed: {
    getNews() {
      return this.$store.state.news;
    }
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
    // Vuex api 호출
    // axios 호출 전과 후의 this는 다르기 때문에 현재 this에 접근하기 위함
    // ES6 화살표 문법 사용 시 호전 전, 후의 this는 같음
    // var vm = this;
    // = new Promise()
    // fetchNewsList()
    //     .then(response => {
    //         console.log(response);
    //         // vm.users = response.data;
    //         this.users = response.data;
    //         })
    //     .catch(error => 
    //         console.log(error));
  }
}
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>