<script>
import {store} from '../data/store'
import axios from 'axios';
import Paginator from '../components/partials/Paginator.vue'
import Loader from '../components/partials/Loader.vue'

  export default {
    name: 'projects',
    components:{
      Paginator,
      Loader,
    },
    data(){
      return{
        projects: [],
        paginator:{},
        loading: true,
      }
    },
    methods:{
      getApi(apiUrl){
        this.loading = true
        axios.get(apiUrl)
        .then(result => {
          this.loading = false;
          this.projects = result.data.data;
          console.log(result.data);
          this.paginator.current_page = result.data.current_page;
          this.paginator.links = result.data.links;
          this.paginator.total = result.data.total;
        })
        .catch(error => {
          this.loading = false;
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
    <ul class="list-unstyled" v-if="!loading" >
      <li
        v-for="project in projects"
        :key="project.id">
          {{ project.id }} - {{ project.title }}
        </li>
    </ul>
    <Loader v-else />
    <Paginator :data="paginator" @callApi="getApi" />
  </div>
</template>


<style lang="scss" scoped>

</style>