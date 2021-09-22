<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div id="contents">
      <GChart
        :type="chartType"
        :settings="chartSettings"
        :options="chartOptions"
        :data="chartData"
        @ready="onChartReady"
      />
    </div>

    <!-- <div v-for="state in states" v-bind:key="state.id">State: {{ state.name }}</div> -->
    <!-- <div>{{ states }}</div> -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import { GChart } from "vue-google-charts";

export default {
  data: function () {
    return {
      states: [],
      message: "Seasonal Unemployment Rates",
      chartType: "GeoChart",
      chartData: [
        ["State", "Seasonal Unemployment"],
        ["Alabama", 0.06],
        ["Alaska", 0.064],
        ["Arizona", 0.063],
        ["Arkansas", 0.052],
        ["California", 0.059],
        ["Colorado", 0.04],
        ["Connecticut", 0.052],
        ["Delaware", 0.049],
        ["District of Columbia", 0.067],
        ["Florida", 0.052],
        ["Georgia", 0.058],
        ["Hawaii", 0.034],
        ["Idaho", 0.042],
        ["Illinois", 0.054],
        ["Indiana", 0.044],
        ["Iowa", 0.036],
        ["Kansas", 0.044],
        ["Kentucky", 0.05],
        ["Louisiana", 0.06],
        ["Maine", 0.044],
        ["Maryland", 0.051],
        ["Massachusetts", 0.046],
        ["Michigan", 0.05],
        ["Minnesota", 0.038],
        ["Mississippi", 0.061],
        ["Missouri", 0.053],
        ["Montana", 0.041],
        ["Nebraska", 0.029],
        ["Nevada", 0.067],
        ["New Hampshire", 0.034],
        ["New Jersey", 0.056],
        ["New Mexico", 0.068],
        ["New York", 0.051],
        ["North Carolina", 0.058],
        ["North Dakota", 0.028],
        ["Ohio", 0.045],
        ["Oklahoma", 0.044],
        ["Oregon", 0.062],
        ["Pennsylvania", 0.053],
        ["Rhode Island", 0.054],
        ["South Carolina", 0.057],
        ["South Dakota", 0.035],
        ["Tennessee", 0.057],
        ["Texas", 0.042],
        ["Utah", 0.036],
        ["Vermont", 0.037],
        ["Virginia", 0.043],
        ["Washington", 0.052],
        ["West Virginia", 0.073],
        ["Wisconsin", 0.043],
        ["Wyoming", 0.04],
        ["High", 0.1],
        ["Low", 0],
      ],
      chartSettings: {
        packages: ["geochart"],

        mapsApiKey: "API_KEY",
      },
      chartOptions: {
        region: "US",
        resolution: "provinces",
        // regioncoderVersion: 1,

        // displayMode: "auto",
        // colorAxis: { colors: ["#00853f", "black", "#e31b23"] },
        backgroundColor: "#4da6ff",
        datalessRegionColor: "#ccffb3",
        defaultColor: "ffc2b3",
      },
    };
  },

  components: {
    GChart,
  },
  created: function () {
    this.showState();
  },
  methods: {
    onChartReady(chart, google) {
      const geoChart = new google.visualization.GeoChart(`api/states`);
      geoChart.send((response) => {
        chart.draw(response);
      });
    },
    showState: function () {
      axios.get(`api/states`).then((response) => {
        console.log(response.data);
        this.states = response.data;
      });
    },
  },
};
</script>
