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

    <div v-for="state in states" v-bind:key="state.id">State: {{ state.name }}</div>
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
      message: "Percentage of Population in Metro Areas",
      chartType: "GeoChart",
      chartData: [
        ["State", "Population in Metro Areas"],
        ["Alabama", 0.64],
        ["Alaska", 0.63],
        ["Arizona", 0.9],
        ["Arkansas", 0.69],
        ["California", 0.97],
        ["Colorado", 0.8],
        ["Connecticut", 0.94],
        ["Delaware", 0.9],
        ["District of Columbia", 1],
        ["Florida", 0.96],
        ["Georgia", 0.82],
        ["Hawaii", 0.76],
        ["Idaho", 0.7],
        ["Illinois", 0.9],
        ["Indiana", 0.79],
        ["Iowa", 0.6],
        ["Kansas", 0.64],
        ["Kentucky", 0.56],
        ["Louisiana", 0.81],
        ["Maine", 0.54],
        ["Maryland", 0.97],
        ["Massachusetts", 0.97],
        ["Michigan", 0.87],
        ["Minnesota", 0.75],
        ["Mississippi", 0.45],
        ["Missouri", 0.78],
        ["Montana", 0.34],
        ["Nebraska", 0.6],
        ["Nevada", 0.87],
        ["New Hampshire", 0.63],
        ["New Jersey", 1],
        ["New Mexico", 0.69],
        ["New York", 0.94],
        ["North Carolina", 0.76],
        ["North Dakota", 0.5],
        ["Ohio", 0.75],
        ["Oklahoma", 0.59],
        ["Oregon", 0.87],
        ["Pennsylvania", 0.87],
        ["Rhode Island", 1],
        ["South Carolina", 0.79],
        ["South Dakota", 0.51],
        ["Tennessee", 0.82],
        ["Texas", 0.92],
        ["Utah", 0.82],
        ["Vermont", 0.35],
        ["Virginia", 0.89],
        ["Washington", 0.86],
        ["West Virginia", 0.55],
        ["Wisconsin", 0.69],
        ["Wyoming", 0.31],
        ["High", 1],
        ["Low", 0],
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
