<template>
  <div>
    <ul class="news-list">
      <li v-for="item in listItems" v-bind:key="item.id" class="post">
      <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <!-- 타이틀 영역 -->
          <p class="news-title">
            <template v-if="item.domain">
              <a :href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <router-link :to="`item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>
            
          <small class="link-text">
            {{ item.time_ago }} BY
            <router-link 
            v-if="item.user"
            v-bind:to="`/user/${item.user}`"
            class="link-text">
              {{ item.user }}
            </router-link>
            <a :href="item.url" v-else>
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

// 컴포넌트 공통화
export default {
  computed: {
    listItems() {
      return this.$store.state.list;
      // const name = this.$route.name;
      // var stateValue = ''

      // if (name === 'news') {
      //     stateValue = this.$store.state.news;
      // } else if (name === 'ask') {
      //     stateValue = this.$store.state.ask;
      // } else if (name === 'jobs') {
      //     stateValue = this.$store.state.jobs;
      // }
      // // console.log(stateValue);
      // return stateValue;
    }
  },
  // created() {
  //   const name = this.$route.name;

  //   var actionName = '';
  //   if (name === 'news') {
  //       actionName = 'FETCH_NEWS';
  //   } else if (name === 'ask') {
  //       actionName = 'FETCH_ASK';
  //   } else if (name === 'jobs') {
  //       actionName = 'FETCH_JOBS';
  //   }
  //   // console.log(actionName);
  //   this.$store.dispatch(actionName);
  // }
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