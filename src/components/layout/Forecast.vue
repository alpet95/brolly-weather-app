<template>
  <card>
    <template #forecast>
      <div class="location-block">
        <p class="location-text" v-text="`${city}, ${country}`"></p>
        <p class="dateline-text" v-text="dateline"></p>
      </div>

      <div class="weather-block">
        <div class="temperature-block">
          <p
            class="temperature-degrees"
            v-html="`${temperature}<span class='celsius'>°c</span>`"
          ></p>
          <p class="description-text" v-text="description"></p>
        </div>

        <div class="icon-block">
          <div class="icon-container">
            <img
              v-if="icon"
              :src="`http://openweathermap.org/img/wn/${icon}@2x.png`"
            />
          </div>
        </div>
      </div>
    </template>
  </card>
</template>

<script>
import { MONTHS, WEEKDAYS } from "../../data/date";

export default {
  props: ["city", "country", "temperature", "description", "icon"],
  data() {
    return {
      dateline: "",
    };
  },
  created() {
    let date = new Date();
    let weekday = WEEKDAYS[date.getDay()];
    let day = date.getDate(); // 19
    let month = MONTHS[date.getMonth()];
    let year = date.getFullYear();
    this.dateline = `${weekday}, ${day} ${month} ${year}`;
  },
};
</script>

<style>
.location-block {
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.location-text {
  margin-bottom: 5px;
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  text-transform: capitalize;
  color: #fff;
}

.dateline-text {
  font-size: 16px;
  text-align: center;
  color: #fff;
}

.weather-block {
  width: 100%;
  height: 60%;
  display: flex;
}

.temperature-block {
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.temperature-degrees {
  margin-bottom: 5px;
  font-size: 40px;
  font-weight: 700;
  color: #fff;
}

.temperature-degrees .celsius {
  font-size: 25px;
}

.description-text {
  font-weight: 500;
  color: #fff;
}

.icon-block {
  flex: 1 1 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-container {
  width: 100px;
  height: 100px;
}

.icon-container img {
  width: 100%;
  height: 100%;
}
</style>
