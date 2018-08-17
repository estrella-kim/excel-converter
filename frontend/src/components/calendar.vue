<template>
  <div class="calendar-wrap">
    <h3>{{ date }}</h3>
    <date-range-picker :startDate="startDate" :endDate="endDate" @update="test" v-model="date"></date-range-picker>
  </div>
</template>

<script>
  import DateRangePicker from 'vue2-daterange-picker/src/components/DateRangePicker'
  import 'daterangepicker/daterangepicker.css'

  export default {
    data() {
      return {
        startDate: '2017-09-05',
        endDate: '2017-09-15',
        date : null
      }
    },
    components : {
      DateRangePicker
    },
    mounted () {
      console.log(this)
    },
    methods : {
      test : function(value){
        console.log(value)
      }
    }
  }
</script>
