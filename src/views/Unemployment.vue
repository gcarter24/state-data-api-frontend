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
        ["Alabama", 0.06 * 100],
        ["Alaska", 0.064 * 100],
        ["Arizona", 0.063 * 100],
        ["Arkansas", 0.052 * 100],
        ["California", 0.059 * 100],
        ["Colorado", 0.04 * 100],
        ["Connecticut", 0.052 * 100],
        ["Delaware", 0.049 * 100],
        ["District of Columbia", 0.067 * 100],
        ["Florida", 0.052 * 100],
        ["Georgia", 0.058 * 100],
        ["Hawaii", 0.034 * 100],
        ["Idaho", 0.042 * 100],
        ["Illinois", 0.054 * 100],
        ["Indiana", 0.044 * 100],
        ["Iowa", 0.036 * 100],
        ["Kansas", 0.044 * 100],
        ["Kentucky", 0.05 * 100],
        ["Louisiana", 0.06 * 100],
        ["Maine", 0.044 * 100],
        ["Maryland", 0.051 * 100],
        ["Massachusetts", 0.046 * 100],
        ["Michigan", 0.05 * 100],
        ["Minnesota", 0.038 * 100],
        ["Mississippi", 0.061 * 100],
        ["Missouri", 0.053 * 100],
        ["Montana", 0.041 * 100],
        ["Nebraska", 0.029 * 100],
        ["Nevada", 0.067 * 100],
        ["New Hampshire", 0.034 * 100],
        ["New Jersey", 0.056 * 100],
        ["New Mexico", 0.068 * 100],
        ["New York", 0.051 * 100],
        ["North Carolina", 0.058 * 100],
        ["North Dakota", 0.028 * 100],
        ["Ohio", 0.045 * 100],
        ["Oklahoma", 0.044 * 100],
        ["Oregon", 0.062 * 100],
        ["Pennsylvania", 0.053 * 100],
        ["Rhode Island", 0.054 * 100],
        ["South Carolina", 0.057 * 100],
        ["South Dakota", 0.035 * 100],
        ["Tennessee", 0.057 * 100],
        ["Texas", 0.042 * 100],
        ["Utah", 0.036 * 100],
        ["Vermont", 0.037 * 100],
        ["Virginia", 0.043 * 100],
        ["Washington", 0.052 * 100],
        ["West Virginia", 0.073 * 100],
        ["Wisconsin", 0.043 * 100],
        ["Wyoming", 0.04 * 100],
        ["High", 0.1 * 100],
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
