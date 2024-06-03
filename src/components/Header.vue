<script>
  export default {
    name: 'Header'
  }
</script>


<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" :to="{ name: 'home' }">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'projects' }">Progetti</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'about' }">Chi siamo</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  </header>
</template>


<style lang="scss" scoped>

</style>