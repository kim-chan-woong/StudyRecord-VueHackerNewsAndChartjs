<template>
  <div>
    <div class="user-container">
      <div>
        <i class="fas fa-user"></i>
      </div>
      <div class="user-description">
        <!-- <p>Name: {{ info.id }}</p>
        <p>Karma: {{ info.karma }}</p>
        <p>Created: {{ info.created }}</p> -->
        <slot name="username"></slot>
        <!-- 상위 컴포넌트에서 정의할 영역 -->
        <div class="time">
          <slot name="time"></slot>
          <!-- 상위 컴포넌트에서 정의할 영역 -->
        </div>
        <slot name="karma">
          <!-- 상위 컴포넌트에서 정의할 영역 -->
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object
  },
  // computed: {
  //   userInfo() {
  //     return this.$store.state.user;
  //   }
  // },
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