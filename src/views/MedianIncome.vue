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
      message: "Median Household Income",
      chartType: "GeoChart",
      chartData: [
        ["State", "Median Houshold Income"],
        ["Alabama", 42278],
        ["Alaska", 67629],
        ["Arizona", 49254],
        ["Arkansas", 44922],
        ["California", 60487],
        ["Colorado", 60940],
        ["Connecticut", 70161],
        ["Delaware", 57522],
        ["District of Columbia", 68277],
        ["Florida", 46140],
        ["Georgia", 49555],
        ["Hawaii", 71223],
        ["Idaho", 53438],
        ["Illinois", 54916],
        ["Indiana", 48060],
        ["Iowa", 57810],
        ["Kansas", 53444],
        ["Kentucky", 42786],
        ["Louisiana", 42406],
        ["Maine", 51710],
        ["Maryland", 76165],
        ["Massachusetts", 63151],
        ["Michigan", 52005],
        ["Minnesota", 67244],
        ["Mississippi", 35521],
        ["Missouri", 56630],
        ["Montana", 51102],
        ["Nebraska", 56870],
        ["Nevada", 49875],
        ["New Hampshire", 73397],
        ["New Jersey", 65243],
        ["New Mexico", 46686],
        ["New York", 54310],
        ["North Carolina", 46784],
        ["North Dakota", 60730],
        ["Ohio", 49644],
        ["Oklahoma", 47199],
        ["Oregon", 58875],
        ["Pennsylvania", 55173],
        ["Rhode Island", 58633],
        ["South Carolina", 44929],
        ["South Dakota", 53053],
        ["Tennessee", 43716],
        ["Texas", 53875],
        ["Utah", 63383],
        ["Vermont", 60708],
        ["Virginia", 66155],
        ["Washington", 59068],
        ["West Virginia", 39552],
        ["Wisconsin", 58080],
        ["Wyoming", 55690],
        ["High", 80000],
        ["Low", 35000],
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
