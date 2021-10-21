<template>
  <div>
    <!-- UserProfile에서 state에 바로 접근 하는지, UserView에서 state 접근 후 props로 UserProfile에 내려주는지의 차이 -->
    <user-profile :info="userInfo">
      <div slot="username">{{ userInfo.id }}</div>
      <span slot="time">{{ 'Joined ' + userInfo.created }}, </span>
      <span slot="karma">{{ userInfo.karma }}</span>
    </user-profile>
    <!-- <user-profile></user-profile> -->
  </div>
</template>

<script>

import UserProfile from '../components/UserProfile.vue';

export default {
  components: {
    UserProfile,
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName);
  },
}
</script>

<style>

</style>