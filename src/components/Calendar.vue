<template>
    <div class="calendar">
      <div class="header">
        <button @click="prevMonth">&lt;</button>
        <h2>{{ currentMonth.format('MMMM YYYY') }}</h2>
        <button @click="nextMonth">&gt;</button>
      </div>
      <div class="days-header">
        <div v-for="day in days" :key="day" class="day">{{ day }}</div>
      </div>
      <div class="days">
        <div v-for="date in calendarDates" :key="date">
          <div
            :class="{ 'day-cell': true, 'today': isToday(date), 'selected': isSelected(date) }"
            @click="selectDate(date)"
          >
            {{ date.format('D') }}
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import moment from 'moment';
  
  export default {
    data() {
      return {
        currentMonth: moment(),
        selectedDate: null,
        days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      };
    },
    computed: {
      calendarDates() {
        const startOfMonth = this.currentMonth.clone().startOf('month');
        const endOfMonth = this.currentMonth.clone().endOf('month');
        const startDate = startOfMonth.startOf('week');
        const endDate = endOfMonth.endOf('week');
  
        const calendarDates = [];
        let currentDate = startDate.clone();
  
        while (currentDate.isBefore(endDate)) {
          calendarDates.push(currentDate.clone());
          currentDate.add(1, 'day');
        }
  
        return calendarDates;
      },
    },
    methods: {
      nextMonth() {
        this.currentMonth.add(1, 'month');
      },
      prevMonth() {
        this.currentMonth.subtract(1, 'month');
      },
      selectDate(date) {
        this.selectedDate = date;

        //zvoleny den
        this.$emit('date-selected', date);
      },
      isToday(date) {
        return date.isSame(moment(), 'day');
      },
      isSelected(date) {
        return date.isSame(this.selectedDate, 'day');
      },
    },
  };
  </script>
  
  <style scoped>
  .calendar {
    font-family: Arial, sans-serif;
  }
  
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  .days-header {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }
  
  .day-cell {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    margin: 2px;
    cursor: pointer;
  }
  
  .today {
    background-color: #66ccff;
  }
  
  .selected {
    background-color: #ffd700; /* Highlight color for selected date */
  }
  
  .days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }
  </style>