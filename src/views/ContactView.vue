<template>
  <div class="smallcontainer">
    <ContactPhotos/>
  </div>
  <div class="smallcontainer" style="position:absolute; margin-top: 50px;">
    <ContactForm />
  </div>
  </template>
  

<script>
import ContactForm from '../components/ContactForm.vue'
import ContactPhotos from '../components/ContactPhotos.vue'

export default{
components: {
  ContactForm, ContactPhotos
}
}
</script>

<style>
.smallcontainer{
    height: 500px;
    width: 660px;
    margin-left: 10px;
    display: inline-block;
}
</style>
  