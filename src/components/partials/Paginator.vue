<script>
  export default {
        name:'Paginator',
        props:{
          data:Object
        },
        methods:{
          callApi(link){
            this.$emit('callApi',link);
          }
        }
  }
</script>


<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <button
        v-for="link in data.links"
        :key="link.label"
        v-html="link.label"
        :disabled="link.active  || (!link.url && link.label !== '...')"
        @click="callApi(link.url)"></button>
    </ul>
  </nav>
</template>


<style lang="scss" scoped>

</style>