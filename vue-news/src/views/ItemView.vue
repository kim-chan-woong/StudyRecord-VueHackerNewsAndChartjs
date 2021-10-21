<template>
  <div>
    <section>
      <!-- 사용자 상세 정보 -->
      <user-profile :info="getAskDetail">
        <!-- <div slot="username">{{ getAskDetail.user }}</div> -->
        <router-link slot="username" :to="`/user/${getAskDetail.user}`">
          {{ getAskDetail.user }}
        </router-link>
        <template slot="time">{{ "Posted " + getAskDetail.time_ago }}</template>
      </user-profile>
    </section>
    <section>
      <h2>{{ getAskDetail.title }}{</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <!-- getAskDetail.content의 기존 데이터는 html형식 그대로 넘어옴
      v-html은 이를 내용만 출력하게함 -->
      <div v-html="getAskDetail.content">
        <!-- {{ getAskDetail.content }} -->
      </div>
    </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';

export default {
  components: { UserProfile },
  computed: {
    getAskDetail() {
      return this.$store.state.askDetail;
    }
  },
  created() {
    const askId = this.$route.params.id;
    this.$store.dispatch('FETCH_ASK_DETAIL', askId);
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>