import { defineStore } from "pinia";
import cars from './Cars.json'


export const useCarsStore = defineStore('CarsStore', {
    state: () => ({
         cars: cars
        })
})
