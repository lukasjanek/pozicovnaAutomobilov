<template>
    <div class="container-fluid mt-5">
        <div class="row justify-content-md-center">
            <div class="card" style="width: 18rem; margin-right: 10px;" v-for="(item, index) in ContactStore.contact" :key="index">  
                <img :src="'/src/assets/images/' + item.image" class="card-top mt-3" alt="ceo"/>
                <div class="card-body">
                    <h4 class="card-title">{{ item.title }}</h4>
                    <h6 class="card-subtitle">{{ item.text }}</h6>
                    <p class="card-text">{{ item.desc }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useContactStore } from "../stores/ContactStore.js"
export default {
    data() {
        return {
            ContactStore: useContactStore(),
        };  
    },   
}
</script>

<style>
.card-top {
    height: 200px;
    width: 260px;
    object-fit: fill;
  }
</style>