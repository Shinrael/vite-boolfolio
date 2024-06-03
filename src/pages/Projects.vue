<script>
import {store} from '../data/store'
import axios from 'axios';

  export default {
    name: 'projects',
    data(){
      return{
        projects: []
      }
    },
    methods:{
      getApi(){
        axios.get(store.apiUrl)
        .then(result => {
          this.projects = result.data.data;
          console.log(result.data);
        })
        .catch(error => {
          console.log(error.message);
        })
      }
    },
    mounted(){
      this.getApi();
    }
  }
</script>


<template>
  <div>
    <h1>I miei Progetti</h1>
    <ul class="list-unstyled">
      <li
        v-for="project in projects"
        :key="project.id">
          {{ project.id }} - {{ project.title }}
        </li>
    </ul>
  </div>
</template>


<style lang="scss" scoped>

</style>