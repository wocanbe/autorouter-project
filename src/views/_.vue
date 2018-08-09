<style lang="scss" scoped>
.error {
  margin: 0 auto;
  padding-top: 80px;
  h1 {
    margin: 0 auto 10px;
    text-align: center;
  }
  .prompt {
    display: block;
    margin: 0 16px;
    color: #42bd56;
    font-size: 16px;
    text-align: center;
  }
}

</style>
<template lang="pug">
  div
    .error
      h1 该页面不存在
      router-link.prompt(to="/") 返回首页
</template>

<script>
export default {
  name: 'page_status_404'
}
</script>
