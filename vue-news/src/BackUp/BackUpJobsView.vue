<template>
  <div>
    <ul class="news-list">
      <li v-for="item in getJobs" v-bind:key="item.id" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <a :href="item.url">
              {{ item.title }}
            </a>
          </p>
            
          <small class="link-text">
            {{ item.time_ago}} BY 
            <a :href="item.url">
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
    <!-- <p v-for="item in getJobs" v-bind:key="item.id">
      <a :href="item.url">
        {{ item.title }}
      </a>
      <small>
        {{ item.time_ago }} BY {{ item.domain }}
      </small>
    </p> -->
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';

export default {
  computed: {
    getJobs() {
      return this.$store.state.jobs;
    }
    // ...mapGetters([
    //   'getJobs'
    // ])
    // 1
    // ...mapState({
    //   jobs: state => state.jobs
    // })
    // 2
    // jobs() {
    //   return this.$store.state.jobs;
    // }
  },
  created() {
    this.$store.dispatch('FETCH_JOBS');
  //   Vuex api 호출
  //   fetchJobsList()
  //     .then(response => {
  //       this.jobs = response.data;
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
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