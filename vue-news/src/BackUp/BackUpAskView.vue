<template>
  <div>
    <ul class="news-list">
      <li v-for="item in getAsk" v-bind:key="item.id" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <router-link :to="`item/${item.id}`">
              {{ item.title }}
            </router-link>
          </p>
            
          <small class="link-text">
            {{ item.time_ago}} BY 
            <router-link v-bind:to="`/user/${item.user}`">
              {{ item.user}}
            </router-link>
          </small>
        </div>
      </li>
    </ul>
    <!-- <ul>
      <li v-for="item in getAsk" v-bind:key="item.id" class="post">
        <router-link :to="`item/${item.id}`">
          {{ item.title }}
        </router-link>
        <small>
          {{ item.time_ago}} BY 
          <router-link v-bind:to="`/user/${item.user}`">
            {{ item.user }}
          </router-link>
        </small>
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  computed: {
    getAsk() {
      return this.$store.state.ask;
    }
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
    // Vuex api 호출
    // fetchAskList()
    //   .then(response => {
    //     this.ask = response.data;
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   })
  },
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