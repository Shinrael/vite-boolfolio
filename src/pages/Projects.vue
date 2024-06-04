<script>
import {store} from '../data/store'
import axios from 'axios';
import Paginator from '../components/partials/Paginator.vue'

  export default {
    name: 'projects',
    components:{
      Paginator,
    },
    data(){
      return{
        projects: [],
        paginator:{}
      }
    },
    methods:{
      getApi(apiUrl){
        axios.get(apiUrl)
        .then(result => {
          this.projects = result.data.data;
          console.log(result.data);
          this.paginator.current_page = result.data.current_page;
          this.paginator.links = result.data.links;
          this.paginator.total = result.data.total;
        })
        .catch(error => {
          console.log(error.message);
        })
      }
    },
    mounted(){
      this.getApi(store.apiUrl);
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
    <Paginator :data="paginator" @callApi="getApi" />
  </div>
</template>


<style lang="scss" scoped>

</style>