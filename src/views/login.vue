<style lang="scss" scoped>
.login {
  width: 350px;
  margin: 150px auto;
  text-align: center;
  background-color: skyblue;
  padding: 20px;
  button {
    margin: 4px 0;
  }
}
</style>
<template lang="pug">
  .login
    button(@click="login1") 游客登陆
    button(@click="login2") 管理员登陆
</template>
<script>
import {mapActions} from 'vuex'
export default {
  methods: {
    ...mapActions(['loginin']),
    login1 () {
      this.loginin({
        username: 'ceshi',
        password: '123456'
      }).then(() => {
        this.$router.replace('/')
      }).catch(e => {
        console.error(e.message)
      })
    },
    login2 () {
      window.sessionStorage.setItem('userid', '123456')
      window.sessionStorage.setItem('role', 'admin')
      this.$router.replace('/')
    }
  }
}
</script>
