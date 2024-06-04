<script>

import {store} from './data/store'
import axios from 'axios';

import Header from './components/Header.vue'

  export default {
    components:{
      Header,
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
  <div class="container-app d-flex">
    <div class="container bg-white h-100 w-100 mt-5 border border-5 rounded">
    <router-view></router-view>
  </div>
  </div>
  
</template>

<style lang="scss" scoped>

</style>