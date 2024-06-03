<script>

import {store} from './data/store'
import axios from 'axios';

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
  <Header />
  <div class="container mt-3">
  <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>

</style>