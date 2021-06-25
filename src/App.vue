<template>
  <div id="app" v-bind:class="switchBg">
    <main class="app-main">
      <div class="search-box">
        <input
          type="text"
          class="search-bar"
          placeholder="Enter your city..."
          v-model="query"
          @keypress.enter="fetchWeather"
        >
      </div>

      <div class="weather-wrap" v-if="(typeof weather.main !== 'undefined')">
        <div class="top-container">
          <div class="location">{{ weather.name }}, {{ weather.sys.country }}</div>
          <div class="date">{{ dateBuilder() }}</div>
        </div>

        <div class="bottom-container">
          <div class="temp">{{ Math.round(weather.main.temp) }}°c</div>
          <div class="weather">{{ weather.weather[0].description }}</div>
          <img :src="`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`">
        </div>
      </div>

      <div class="showcase" v-if="(typeof weather.main === 'undefined')">
        <h1>WeatherCity</h1>
        <p>Access current weather data for any location on Earth<br> including over 200,000 cities!</p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      api_key: '9b6e6fc52460f07ffff6c8f28f989055',
      url_base: 'https://api.openweathermap.org/data/2.5/',
      query: '',
      weather: {}
    }
  },
  methods: {
    fetchWeather() {
      fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
        .then(res => {
          return res.json();
        })
        .then(this.setResults);
    },
    setResults(results) {
      this.weather = results;
      this.query = '';
    },
    dateBuilder() {
      let d = new Date();
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let day = days[d.getDay()];
      console.log(d);
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `${day}, ${date} ${month} ${year}`;
    }
  },
  computed: {
    switchBg() {
      return {
        cold: typeof this.weather.main !== 'undefined' && this.weather.main.temp < 11,
        hot: typeof this.weather.main != 'undefined' && this.weather.main.temp > 25
      }
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  height: 100vh;
}

#app {
  max-width: 1960px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: url('./assets/bg.jpg') no-repeat center/cover;
}

#app.cold {
  background-image: url('./assets/cold.jpg');
}

#app.hot {
  background-image: url('./assets/hot.jpg');
}

.app-main {
  height: 100%;
  padding: 50px 25px 25px;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.5));
}

.search-box {
  max-width: 768px;
  margin: 0 auto 30px;
}

.search-box .search-bar {
  width: 100%;
  padding: 10px 15px;
  font-size: 20px;
  display: block;
  background: none;
  border: none;
  outline: none;
  border-radius: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  color: #000;
  transition: 0.4s;
}

.search-box .search-bar:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.9);
}

.weather-wrap {
  max-width: 400px;
  margin: 0 auto;
  padding: 25px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.2);
}

.top-container .location {
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  color: #fff;
}

.top-container .date {
  margin-top: 5px;
  font-size: 16px;
  font-weight: 300;
  text-align: center;
  color: #fff;
}

.bottom-container {
  text-align: center;
}

.bottom-container .temp {
  margin: 10px 0;
  padding: 10px 25px;
  font-size: 80px;
  font-weight: 900;
  display: inline-block;
  border-radius: 16px;
  color: #fff;
}

.bottom-container .weather {
  font-size: 20px;
  font-weight: 400;
  text-transform: capitalize;
  color: #fff;
}

.showcase {
  max-width: 768px;
  margin: 0 auto;
  padding: 25px;
  text-align: center;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
}

.showcase h1 {
  font-size: 45px;
  margin-bottom: 5px;
  text-shadow: 4px 2px 0px rgba(0, 0, 0, 0.5);
  color: #fff;
}

.showcase p {
  font-size: 18px;
  line-height: 1.2;
  color: #fff;
}

@media screen and (max-width: 590px) {
  .showcase h1 {
    font-size: 35px;
  }

  .showcase p {
    font-size: 17px;
  }

  #app {
    min-width: 300px;
  }

  br {
    display: none;
  }
}

@media screen and (max-width: 370px) {
    .showcase h1 {
    font-size: 30px;
  }

  .showcase p {
    font-size: 16px;
  }
}
</style>
