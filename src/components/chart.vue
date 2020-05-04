<template>
  <div class="small">
    <bar-chart></bar-chart>
  </div>
</template>

<script>
  import BarChart from './BarChart.js'

  export default {
    name: 'chart',
    components: {
      BarChart
    }
  }
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>