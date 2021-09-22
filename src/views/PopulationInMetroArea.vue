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
      message: "Percentage of Population in Metro Areas",
      chartType: "GeoChart",
      chartData: [
        ["State", "Population in Metro Areas"],
        ["Alabama", 0.64 * 100],
        ["Alaska", 0.63 * 100],
        ["Arizona", 0.9 * 100],
        ["Arkansas", 0.69 * 100],
        ["California", 0.97 * 100],
        ["Colorado", 0.8 * 100],
        ["Connecticut", 0.94 * 100],
        ["Delaware", 0.9 * 100],
        ["District of Columbia", 1 * 100],
        ["Florida", 0.96 * 100],
        ["Georgia", 0.82 * 100],
        ["Hawaii", 0.76 * 100],
        ["Idaho", 0.7 * 100],
        ["Illinois", 0.9 * 100],
        ["Indiana", 0.79 * 100],
        ["Iowa", 0.6 * 100],
        ["Kansas", 0.64 * 100],
        ["Kentucky", 0.56 * 100],
        ["Louisiana", 0.81 * 100],
        ["Maine", 0.54 * 100],
        ["Maryland", 0.97 * 100],
        ["Massachusetts", 0.97 * 100],
        ["Michigan", 0.87 * 100],
        ["Minnesota", 0.75 * 100],
        ["Mississippi", 0.45 * 100],
        ["Missouri", 0.78 * 100],
        ["Montana", 0.34 * 100],
        ["Nebraska", 0.6 * 100],
        ["Nevada", 0.87 * 100],
        ["New Hampshire", 0.63 * 100],
        ["New Jersey", 1 * 100],
        ["New Mexico", 0.69 * 100],
        ["New York", 0.94 * 100],
        ["North Carolina", 0.76 * 100],
        ["North Dakota", 0.5 * 100],
        ["Ohio", 0.75 * 100],
        ["Oklahoma", 0.59 * 100],
        ["Oregon", 0.87 * 100],
        ["Pennsylvania", 0.87 * 100],
        ["Rhode Island", 1 * 100],
        ["South Carolina", 0.79 * 100],
        ["South Dakota", 0.51 * 100],
        ["Tennessee", 0.82 * 100],
        ["Texas", 0.92 * 100],
        ["Utah", 0.82 * 100],
        ["Vermont", 0.35 * 100],
        ["Virginia", 0.89 * 100],
        ["Washington", 0.86 * 100],
        ["West Virginia", 0.55 * 100],
        ["Wisconsin", 0.69 * 100],
        ["Wyoming", 0.31 * 100],
        ["High", 1 * 100],
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
