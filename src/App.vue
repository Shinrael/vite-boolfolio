<script>
import axios from 'axios';
import {store} from './data/store'
import Header from './components/Header.vue'

  export default {
    components:{
      Header
    },
    data(){
      return {
      }
    },

    methods:{
    },

    mounted(){
    },    
}
</script>

<template>
  <div>
    <Header />
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>

</style>