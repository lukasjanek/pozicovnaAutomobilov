<template>
    <div class="container-fluid mt-5">
        <div class="row justify-content-md-center">
            <div class="card" style="width: 18rem; margin-right: 10px;" v-for="(item, index) in CarsStore.cars" :key="index">  
                <img :src="'/src/assets/images/' + item.image" class="card-top mt-3" alt="Car"/>
                <div class="card-body">
                    <h4 class="card-title">{{ item.title }}</h4>
                    <h6 class="card-subtitle mb-2 text-muted">{{ item.price }}</h6>
                    <p class="card-text">{{ item.text }}</p>
                    <RouterLink class="btn btn-primary" :to="{ name: 'reserve', params: { carIndex: index }}" >Prenajať</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { RouterLink } from "vue-router";
import { useCarsStore } from "../stores/CarsStore.js"
export default {
    data() {
        return {
            CarsStore: useCarsStore(),
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