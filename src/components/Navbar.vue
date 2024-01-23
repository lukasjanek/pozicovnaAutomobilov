<template>
    <header>
      <nav class="navbar navbar-expand-lg" style="background-color: rgba(17, 105, 156, 0.753);">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 ms-2 h2">
          <img src="..\assets\images\car-1057.png" alt="AutoRENT_Logo" class="me-2" />
          AutoRENT
        </span>
          <div class="navbar-nav">
            <RouterLink class="nav-item nav-link" to="/">HOME</RouterLink>
            <RouterLink class="nav-item nav-link" to="/about">ABOUT</RouterLink>
            <RouterLink class="nav-item nav-link" to="/contact">CONTACT</RouterLink>
          </div>
        </div>
      </nav>
    </header>
    <RouterView />
  
    <footer class="bg-body-tertiary text-center text-lg-start mt-5">
      <div class="text-center p-3" style="background-color: rgba(17, 105, 156, 0.753);">
        © 2024 Copyright: Lukáš Janek
      </div>  
    </footer>
  </template>
  
  <script setup>
  import { RouterLink, RouterView } from 'vue-router'
  </script>

<style scoped>
.navbar-brand img {
  width: 50px; 
  height: 50px; 
}

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}


</style>