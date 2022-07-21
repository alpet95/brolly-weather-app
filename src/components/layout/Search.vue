<template>
  <div class="search-box">
    <input
      type="text"
      class="search-input"
      placeholder="Search"
      v-model="location"
      @keypress.enter="fetchData"
    />
  </div>
</template>

<script>
import { ERRORS } from "../../data/errors";

export default {
  emits: ["get-weather-data"],
  data() {
    return {
      key: "9b6e6fc52460f07ffff6c8f28f989055",
      base: "https://api.openweathermap.org/data/2.5/",
      location: "",
      isLoading: false,
      error: null,
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
        this.error = error.message;
        console.log(this.error);
        this.$emit("get-error-state", this.error);
      }
    },
  },
};
</script>
<style>
.search-box {
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
