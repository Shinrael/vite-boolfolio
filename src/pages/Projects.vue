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
        technologies: [],
        types: [],
        paginator:{},
        loading: true,
      }
    },
    methods:{
      getApi(apiUrl, model = ''){
        this.loading = true
        axios.get(apiUrl + model)
        .then(result => {
          this.loading = false;

          switch (model) {
            case 'technologies':
              this.technologies = result.data
              break;

            case 'types':
              this.types = result.data
              break;
          
            default:
            this.projects = result.data.data;
            this.paginator.current_page = result.data.current_page;
            this.paginator.links = result.data.links;
            this.paginator.total = result.data.total;
              break;
          }

          // this.projects = result.data.data;
          // console.log(result.data);
          // this.paginator.current_page = result.data.current_page;
          // this.paginator.links = result.data.links;
          // this.paginator.total = result.data.total;
        })
        .catch(error => {
          this.loading = false;
          console.log(error.message);
        })
      }
    },
    mounted(){
      this.getApi(store.apiUrl, 'projects');
      this.getApi(store.apiUrl, 'technologies');
      this.getApi(store.apiUrl, 'types');
    }
  }
</script>


<template>
  <h1 class="text-center">I miei Progetti</h1>
  <div class="d-flex justify-content-around mt-4"> 
    <div>
      <div v-if="!loading" class="ms-3">
        <h4>Titoli:</h4>
        <ul class="list-unstyled">
          <li
            v-for="project in projects"
            :key="project.id">
              {{ project.id }} - {{ project.title }}
          </li>
        </ul>
      </div>
    <Loader v-else />
    </div>
    
    <div class="me-3">
      <h4>Tecnologie:</h4>
       <div class="inner d-flex flex-wrap">
          <span
            v-for="technology in technologies"
            :key="`t-${technology.id}`"
            class="btn badge text-bg-secondary mx-1"
            :class="{ 'active': technology.isActive }"
            @mouseenter="technology.isActive = true" 
            @mouseleave="technology.isActive = false">
              {{ technology.title }}
          </span>
       </div>
    </div>
    <div>
      <h4>Tipologie:</h4>
      <div class="inner">
        <span
          v-for="type in types"
          :key="`t-${type.id}`"
          class="btn badge text-bg-secondary mx-1"
          :class="{ 'active': type.isActive }"
          @mouseenter="type.isActive = true" 
          @mouseleave="type.isActive = false">
            {{ type.title }}
        </span>
      </div>
    </div>
  </div>
  <div class="paginator">
    <Paginator :data="paginator" @callApi="getApi"/>
  </div>
</template>


<style lang="scss" scoped>
  .paginator{
    margin-left: 30px ;
  }

  .badge.active {
    /* Aggiungi qui gli stili desiderati per quando il badge è attivo */
    background-color: #a60930 !important;
  }
</style>