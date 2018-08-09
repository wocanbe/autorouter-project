<template lang="pug">
  .hello
    h1 {{ msg }}
    app-work/
</template>

<script>
  import { mapGetters } from 'vuex'
  import appWork from '../components/work.vue'
  export default {
    name: 'HelloWorld',
    components: {
      appWork
    },
    data () {
      return {
      }
    },
    computed: {
      ...mapGetters([
        'msg'
      ])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
