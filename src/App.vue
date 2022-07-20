<template>
  <div class="layout">
    <container>
      <main class="main">
        <search-box @get-weather-data="setWeatherData"></search-box>
        <forecast-box
          :city="weatherData.city"
          :country="weatherData.country"
          :temperature="weatherData.temperature"
          :description="weatherData.description"
          :icon="weatherData.icon"
        ></forecast-box>
      </main>
    </container>
  </div>
</template>

<script>
import Search from "./components/layout/Search.vue";
import Forecast from "./components/layout/Forecast.vue";

export default {
  components: {
    "search-box": Search,
    "forecast-box": Forecast,
  },
  data() {
    return {
      weatherData: {},
      dateFormat: "",
    };
  },
  methods: {
    setWeatherData(data) {
      this.weatherData = {
        id: data.id,
        city: data.name,
        country: data.sys.country,
        temperature: Math.floor(data.main.temp),
        description: data.weather[0].description.toUpperCase(),
        icon: data.weather[0].icon,
      };
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  line-height: 1.2;
}

body {
  width: 100%;
  height: 100vh;
  font-size: 14px;
  font-weight: 400;
}

.layout {
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, #2980b9, #2c3e50);
}

.main {
  width: 100%;
  height: 100%;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

section {
  width: 100%;
  height: auto;
}
</style>
