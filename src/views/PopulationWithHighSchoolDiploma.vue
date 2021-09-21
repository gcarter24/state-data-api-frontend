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
      message: "Population with a High School Diploma",
      chartType: "GeoChart",
      chartData: [
        ["State", "Population with a High School Diploma"],
        ["Alabama", 0.821],
        ["Alaska", 0.914],
        ["Arizona", 0.842],
        ["Arkansas", 0.824],
        ["California", 0.806],
        ["Colorado", 0.893],
        ["Connecticut", 0.886],
        ["Delaware", 0.874],
        ["District of Columbia", 0.871],
        ["Florida", 0.853],
        ["Georgia", 0.839],
        ["Hawaii", 0.904],
        ["Idaho", 0.884],
        ["Illinois", 0.864],
        ["Indiana", 0.866],
        ["Iowa", 0.914],
        ["Kansas", 0.897],
        ["Kentucky", 0.817],
        ["Louisiana", 0.822],
        ["Maine", 0.902],
        ["Maryland", 0.89],
        ["Massachusetts", 0.89],
        ["Michigan", 0.879],
        ["Minnesota", 0.915],
        ["Mississippi", 0.804],
        ["Missouri", 0.868],
        ["Montana", 0.908],
        ["Nebraska", 0.898],
        ["Nevada", 0.839],
        ["New Hampshire", 0.913],
        ["New Jersey", 0.874],
        ["New Mexico", 0.828],
        ["New York", 0.847],
        ["North Carolina", 0.843],
        ["North Dakota", 0.901],
        ["Ohio", 0.876],
        ["Oklahoma", 0.856],
        ["Oregon", 0.891],
        ["Pennsylvania", 0.879],
        ["Rhode Island", 0.847],
        ["South Carolina", 0.836],
        ["South Dakota", 0.899],
        ["Tennessee", 0.831],
        ["Texas", 0.799],
        ["Utah", 0.904],
        ["Vermont", 0.91],
        ["Virginia", 0.866],
        ["Washington", 0.897],
        ["West Virginia", 0.828],
        ["Wisconsin", 0.898],
        ["Wyoming", 0.918],
        ["High", 0.95],
        ["Low", 0.75],
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
