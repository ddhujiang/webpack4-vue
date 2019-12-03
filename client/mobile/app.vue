<template>
 <div id="app">
  <h1>{{ `fkflflk${msg}` }}</h1>
 </div>
</template>
<script>
    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your Vue.js 这是手机端'
            }
        },
        created() {
        },
        methods: {
        }
    }
</script>
<style lang="less" scoped>
 #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  h1 {
   color: #CC3333;
  }
 }
</style>