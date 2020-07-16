<template>
  <div class="weather">
    <h1>Проверка погодных условий</h1>
    <Card
      title="Погодные условия"
      class="card-weather"
    >
      <button
        class="check-btn"
        type="button"
        @click="checkWeather"
      >
        Проверить
      </button>
      <dl>
        <div>
          <dt>Локация</dt>
          <dd>
            <input type="text" v-model="weather.location">
          </dd>
        </div>
        <div>
          <dt>Температура</dt>
          <dd>{{ (weather.temp > 0 ? '+' : '') + weather.temp }}°C</dd>
        </div>
        <div>
          <dt>Влажность</dt>
          <dd>{{ weather.humidity }}%</dd>
        </div>
        <div>
          <dt>Ветер</dt>
          <dd>{{ weather.windSpeed }}м\с, {{ weather.windDir }}</dd>
        </div>
      </dl>
      <span class="warning" v-if="weatherError">
        Неверная локация!
      </span>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'Weather',
  data() {
    return {
      weather: {
        location: "",
        temp: 0,
        windSpeed: 0,
        windDir: "С",
        humidity: 0
      },
      weatherError: false
    }
  },
  methods: {
    async checkWeather() {
      try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.weather.location}&units=metric&appid=7f49ff34c69b8b93550d538db5530967`)
        const data = await response.json()

        this.weather.temp = data.main.temp
        this.weather.windSpeed = data.wind.speed
        this.weather.windDir = this.getWindDir(data.wind.deg)
        this.weather.humidity = data.main.humidity

        this.weatherError = false

        this.$emit('weatherChecked', this.weather)
      }
      catch(error) {
        this.weatherError = true
        console.log(error)
      }
    },
    getWindDir(deg) {
      if (deg === 270) return 'З'
      if (deg === 180) return 'Ю'
      if (deg === 90) return 'В'
      if (deg === 0) return 'С'
      if (270 < deg && deg < 360) return 'СЗ'
      if (180 < deg && deg < 270) return 'ЮЗ'
      if (90 < deg && deg < 180) return 'ЮВ'
      if (0 < deg && deg < 90) return 'СВ'
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  border: 1px solid #DEDBDB;
  border-radius: 10px;
  height: 30px;
  width: 90%;
  outline: none;
  padding: 0 10px;
  font-family: Roboto;
  font-size: 16px;
}
.warning {
  border-top: 1px solid #D8DCE3;
  padding: 8px 0 8px 28px;
  color: #fb1717;
}
.card-weather {
  width: 50% !important;
  padding-bottom: 0 !important;
  dl {
    margin: 10px 28px 10px;

    div {
      border-bottom: 1px solid #D1D9E5;
      display: flex;
      padding: 10px 0;
      align-items: center;

      dt {
        width: 40%;
        font-weight: bold;
        font-size: 18px;
        color: #0A5499;
      }
      dd {
        width: 60%;
        margin-left: 0;
        font-size: 18px;
        color: #000000;
      }

      &:last-child {
        border: 0;
      }
    }
  }
}
.check-btn {
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  background: #73E24D;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: 0;
  width: 150px;
  height: 30px;
  position: absolute;
  top: 15px;
  right: 27px;
  color: #FFFFFF;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;
  outline: none;

  &:hover {
    background: #68ca47;
  }
  &:active {
    background: #59af3d;
  }
}
</style>