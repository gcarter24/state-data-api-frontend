<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h2>At A Glance</h2>
    <div id="contents">
      <GChart :type="chartType" :settings="chartSettings" :options="chartOptions" :data="chartData" />
    </div>

    <!-- <div v-for="state in states" v-bind:key="state.id">
      State: {{ state }} | Median Income: {{ state.median_household_income }}
    </div> -->
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
      message: "2016 State Data API Map",
      chartType: "GeoChart",

      states: [],
      chartData: [
        [
          "State",

          "Median Houshold Income",
          "Seasonal Unemployment",
          // "Population In Metro Areas",
          // "Population With High School Degree",
        ],

        ["Alabama", 42278, 0.06],
        ["Alaska", 67629, 0.064],
        ["Arizona", 49254, 0.063],
        ["Arkansas", 44922, 0.052],
        ["California", 60487, 0.059],
        ["Colorado", 60940, 0.04],
        ["Connecticut", 70161, 0.052],
        ["Delaware", 57522, 0.049],
        ["District of Columbia", 68277, 0.067],
        ["Florida", 46140, 0.052],
        ["Georgia", 49555, 0.058],
        ["Hawaii", 71223, 0.034],
        ["Idaho", 53438, 0.042],
        ["Illinois", 54916, 0.054],
        ["Indiana", 48060, 0.044],
        ["Iowa", 57810, 0.036],
        ["Kansas", 53444, 0.044],
        ["Kentucky", 42786, 0.05],
        ["Louisiana", 42406, 0.06],
        ["Maine", 51710, 0.044],
        ["Maryland", 76165, 0.051],
        ["Massachusetts", 63151, 0.046],
        ["Michigan", 52005, 0.05],
        ["Minnesota", 67244, 0.038],
        ["Mississippi", 35521, 0.061],
        ["Missouri", 56630, 0.053],
        ["Montana", 51102, 0.041],
        ["Nebraska", 56870, 0.029],
        ["Nevada", 49875, 0.067],
        ["New Hampshire", 73397, 0.034],
        ["New Jersey", 65243, 0.056],
        ["New Mexico", 46686, 0.068],
        ["New York", 54310, 0.051],
        ["North Carolina", 46784, 0.058],
        ["North Dakota", 60730, 0.028],
        ["Ohio", 49644, 0.045],
        ["Oklahoma", 47199, 0.044],
        ["Oregon", 58875, 0.062],
        ["Pennsylvania", 55173, 0.053],
        ["Rhode Island", 58633, 0.054],
        ["South Carolina", 44929, 0.057],
        ["South Dakota", 53053, 0.035],
        ["Tennessee", 43716, 0.057],
        ["Texas", 53875, 0.042],
        ["Utah", 63383, 0.036],
        ["Vermont", 60708, 0.037],
        ["Virginia", 66155, 0.043],
        ["Washington", 59068, 0.052],
        ["West Virginia", 39552, 0.073],
        ["Wisconsin", 58080, 0.043],
        ["Wyoming", 55690, 0.04],
        ["High", 80000, 1],
        ["Low", 35000, 0],
      ],
      chartSettings: {
        packages: ["geochart"],

        mapsApiKey: "API_KEY",
      },
      chartOptions: {
        region: "US",
        resolution: "provinces",
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
    showState: function () {
      axios.get(`api/states`).then((response) => {
        console.log(response.data);

        this.states = response.data;
        console.log(this.states[30].median_household_income);
      });
    },
  },
};
</script>
