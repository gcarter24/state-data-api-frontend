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
      message: "Population with a High School Diploma",
      chartType: "GeoChart",
      chartData: [
        ["State", "Population with a High School Diploma"],
        ["Alabama", 0.821 * 100],
        ["Alaska", 0.914 * 100],
        ["Arizona", 0.842 * 100],
        ["Arkansas", 0.824 * 100],
        ["California", 0.806 * 100],
        ["Colorado", 0.893 * 100],
        ["Connecticut", 0.886 * 100],
        ["Delaware", 0.874 * 100],
        ["District of Columbia", 0.871 * 100],
        ["Florida", 0.853 * 100],
        ["Georgia", 0.839 * 100],
        ["Hawaii", 0.904 * 100],
        ["Idaho", 0.884 * 100],
        ["Illinois", 0.864 * 100],
        ["Indiana", 0.866 * 100],
        ["Iowa", 0.914 * 100],
        ["Kansas", 0.897 * 100],
        ["Kentucky", 0.817 * 100],
        ["Louisiana", 0.822 * 100],
        ["Maine", 0.902 * 100],
        ["Maryland", 0.89 * 100],
        ["Massachusetts", 0.89 * 100],
        ["Michigan", 0.879 * 100],
        ["Minnesota", 0.915 * 100],
        ["Mississippi", 0.804 * 100],
        ["Missouri", 0.868 * 100],
        ["Montana", 0.908 * 100],
        ["Nebraska", 0.898 * 100],
        ["Nevada", 0.839 * 100],
        ["New Hampshire", 0.913 * 100],
        ["New Jersey", 0.874 * 100],
        ["New Mexico", 0.828 * 100],
        ["New York", 0.847 * 100],
        ["North Carolina", 0.843 * 100],
        ["North Dakota", 0.901 * 100],
        ["Ohio", 0.876 * 100],
        ["Oklahoma", 0.856 * 100],
        ["Oregon", 0.891 * 100],
        ["Pennsylvania", 0.879 * 100],
        ["Rhode Island", 0.847 * 100],
        ["South Carolina", 0.836 * 100],
        ["South Dakota", 0.899 * 100],
        ["Tennessee", 0.831 * 100],
        ["Texas", 0.799 * 100],
        ["Utah", 0.904 * 100],
        ["Vermont", 0.91 * 100],
        ["Virginia", 0.866 * 100],
        ["Washington", 0.897 * 100],
        ["West Virginia", 0.828 * 100],
        ["Wisconsin", 0.898 * 100],
        ["Wyoming", 0.918 * 100],
        ["High", 0.95 * 100],
        ["Low", 0.75 * 100],
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
