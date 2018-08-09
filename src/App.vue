<style lang="scss">
@import '~@/assets/common';
@import '~@/assets/page';
</style>
<template lang="pug">
  .lt-page
    .lt-page-error(v-if="errMsg")
      img(src="../static/error.png" alt="出错了")/
      .lt-page-error-prompt
        h1 {{errMsg}}
        router-link(to="/")
          h2 返回首页
    .lt-page-loading(v-else-if="loading")
      img(src="../static/loading.gif" alt="加载中")/
    router-view(v-if="mask||(!errMsg)")/
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState(['errMsg', 'loading', 'mask'])
  }
}
</script>