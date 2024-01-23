<template>
  <div style="margin: 20px; width: 1800px; height: 800px;">
    <div class="mt-5  smallcontainer" style="float: left; width: 670px;">
        <img :src="'/src/assets/images/' + selectedCar.image" class="carPic" alt="Car" />
    </div>
  <div class="mt-5  smallercontainer" style="float: left; width: 530px;">
            <h6>{{ selectedCar.title }}</h6>
            <h6>{{ selectedCar.price }}</h6>
            <p> {{ selectedCar.text }}</p>
            <p> {{ selectedCar.desc }}</p>
    </div>
  <div class="mt-5 smallercontainer" style="float: left; width: 550px;">
    <Calendar @date-selected="handleDateSelected"/>
    <button @click="reserveCar" class="btn btn-primary">Rezervuj</button>
  </div>
</div>
</template>

  <script>
  import { useCarsStore } from "../stores/CarsStore.js"
  import Calendar from "../components/Calendar.vue";

  export default {
    props: {
      carIndex: {
        type: [String, Number],
        required: true,
      },
    },
      computed: {
    selectedCar() {
        const index = Number(this.carIndex);
        return useCarsStore().cars[index] || {};
    }}, 
    methods: {
    handleDateSelected(selectedDate) {
      this.selectedDate = selectedDate;
    },
    reserveCar() {
      if (this.selectedDate) {
        alert('Auto rezervované, ďakujeme');
        window.location.reload();
      } else {
        alert('Pred rezerváciou vyberte dátum.');
      }
    }},
    data() {
    return {
      selectedDate: null,
    };
  },
    components: {
    Calendar,
  },
  };
  </script>
  
<style>
.carPic {
    height: 500px;
    width: 650px;
    object-fit:contain;
}
.smallcontainer{
    height: 550px;
    width: 660px;
    margin-left: 10px;
}
.smallercontainer{
    height: 300px;
    width: 450px;
    margin-left: 10px;
}
</style>