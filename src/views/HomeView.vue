<template>
  <header>
    <div class="text-center mt-2">
      <h1>VITAJTE V AutoRENT</h1>
    </div>
  </header>
  <body>
    <div class="text-left" style="margin-left: 40px; margin-top: 40px;">
      <h2>Tu si môžete vybrať vaše auto</h2>
    </div>

  <div>
    <HomeComponent />
  </div>
  </body>
</template>

<script>
import HomeComponent from '../components/HomeComponet.vue'
export default{
components: {
  HomeComponent
}
}
</script>

<style>
.left-icon img {
  float: left;
  margin-right: 30px;
}
 .right-content {
  display: inline;
}
</style>
