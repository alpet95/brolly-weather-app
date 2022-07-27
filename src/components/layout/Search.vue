<template>
  <div class="search-box">
    <input
      type="text"
      class="search-input"
      placeholder="Search"
      v-model="location"
      @keypress.enter="fetchData"
      @input="getSimilarCityNames"
    />
    <dropdown-box
      v-if="location"
      :cities="searchCities"
      :location="location"
      @get-new-location="setNewLocation"
    ></dropdown-box>
  </div>
</template>

<script>
import Dropdown from "./Dropdown.vue";
import { ERRORS } from "../../data/errors";
import cities from "cities.json";

export default {
  emits: ["get-weather-data", "get-error-state", "get-loading-state"],
  components: {
    "dropdown-box": Dropdown,
  },
  data() {
    return {
      key: "9b6e6fc52460f07ffff6c8f28f989055",
      base: "https://api.openweathermap.org/data/2.5/",
      location: "",
      isLoading: false,
      error: null,
      cityData: [],
      searchCities: [],
    };
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      this.$emit("get-loading-state", this.isLoading);
      this.error = null;
      this.$emit("get-error-state", this.error);

      try {
        const url = `${this.base}weather?q=${this.location}&units=metric&APPID=${this.key}`;
        const response = await fetch(url);

        if (!response.ok) {
          const errorResponse = await response.json();
          if (errorResponse.message === "city not found") {
            throw new Error(ERRORS[0].text);
          } else {
            throw new Error(ERRORS[1].text);
          }
        }

        const data = await response.json();
        this.location = "";
        this.$emit("get-weather-data", data);
        this.isLoading = false;
        this.$emit("get-loading-state", this.isLoading);
      } catch (error) {
        this.isLoading = false;
        this.$emit("get-loading-state", this.isLoading);
        this.location = "";
        this.error = error.message;
        this.$emit("get-error-state", this.error);
      }
    },
    getCityNames() {
      let cityInfo = [];
      for (const key in cities) {
        cityInfo.push({
          name: cities[key].name,
          country: cities[key].country,
        });
      }
      this.cityData = cityInfo.map((cityItem) => {
        return `${cityItem.name}, ${cityItem.country}`;
      });
    },
    getSimilarCityNames() {
      if (this.location !== "") {
        this.searchCities = this.cityData
          .filter((city) =>
            city.toLowerCase().includes(this.location.toLowerCase())
          )
          .slice(0, 8);
        return this.searchCities;
      }
    },
    setNewLocation(newCity) {
      this.location = newCity;
    },
  },
  provide() {
    return {
      fetchData: this.fetchData,
    };
  },
  created() {
    this.getCityNames();
  },
};
</script>
<style>
.search-box {
  position: relative;
  max-width: 300px;
  width: 100%;
  margin: 25px auto;
}

.search-input {
  width: 100%;
  padding: 8px 10px;
  display: block;
  font-size: 16px;
  text-transform: capitalize;
  border: none;
  outline: none;
  border-radius: 8px 0;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  color: #000;
  transition: 0.2s;
}

.search-input::placeholder {
  text-transform: none;
}

.search-input:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.95);
}
</style>
