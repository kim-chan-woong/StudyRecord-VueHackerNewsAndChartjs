<template>
  <div>
    <section>
      <!-- 질문 상세 정보 -->
      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${getAskDetail.user}`">
            {{ getAskDetail.user }}
          </router-link>
          <div class="time">
            {{ getAskDetail.time_ago }}
          </div>
        </div>
      </div>
      <h2>{{ getAskDetail.title }}</h2>
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
export default {
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