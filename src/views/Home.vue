<template>
  <div class="home">
    <div class="info-container">
      <Card
        title="Статус"
        class="status"
      >
        <button
          class="start-btn"
          type="button"
          :disabled="!allDone"
          @click="startRocket"
        >
          Поехали!
        </button>
        <ul>
          <li :class="{'status-done' : rocketDone}">Ракета выбрана</li>
          <li :class="{'status-done' : teamDone}">Команда собрана</li>
          <li :class="{'status-done' : weatherDone}">Погода - ок</li>
        </ul>
      </Card>
      <Card
        title="Погодные условия"
        class="weather"
      >
        <dl>
          <div>
            <dt>Локация</dt>
            <dd>{{ weatherLocation }}</dd>
          </div>
          <div>
            <dt>Температура</dt>
            <dd>{{ weatherTemp }}</dd>
          </div>
          <div>
            <dt>Влажность</dt>
            <dd>{{ weatherHumidity }}</dd>
          </div>
          <div>
            <dt>Ветер</dt>
            <dd>{{ weatherWind }}</dd>
          </div>
        </dl>
      </Card>
      <Card
        title="Экипаж"
        class="team"
      >
        <dl>
          <div
            v-for="(emps, role, ind) in curTeam"
            :key="ind"
          >
            <dt :class="teamClasses[ind]">{{role}}</dt>
            <dd>
              {{ emps.length === 0 ? "Нет" : "" }}
              <li
                class="member-info"
                v-for="(emp, i) in emps"
                :key="i"
              >
                {{ emp.name }}
              </li>
            </dd>
          </div>
        </dl>
      </Card>
    </div>
    <div class="images-container">
      <div class="planet" />
      <img 
        v-if="curRocket"
        class="rocket" 
        :src="curRocket.iconPath"
        :class="{'fly-rocket': rocketFly}"
      >
    </div>
  </div>
</template>

<script>
import rockets from "../assets/rockets.json"
import team from "../assets/team.json"
export default {
  name: 'Home',
  props: {
    weather: Object
  },
  data() {
    return {
      rockets,
      team,
      curRocket: {},
      curTeam: {},
      teamClasses: ['team-captain', 'team-engineer', 'team-doctor', 'team-space-marine'],
      rocketFly: false
    }
  },
  computed: {
    teamDone() {
      let count = 0
      Object.keys(this.curTeam).forEach(role => count += this.curTeam[role].length)
      return count !== 0
    },
    rocketDone() {
      return this.curRocket.name !== {}
    },
    weatherDone() {
      return this.weather.location !== undefined
    },
    weatherLocation() {
      return this.weatherDone ? this.weather.location : "Не выбрана"
    },
    weatherTemp() {
      return this.weatherDone ? `${(this.weather.temp > 0 ? '+' : '') + this.weather.temp}°C` : ""
    },
    weatherHumidity() {
      return this.weatherDone ? `${this.weather.humidity}%` : ""
    },
    weatherWind() {
      return this.weatherDone ? `${this.weather.windSpeed}м\\с, ${this.weather.windDir}` : ""
    },
    allDone() {
      return this.teamDone && this.rocketDone && this.weatherDone
    },
  },
  created() {
    if (localStorage.curRocketInd) {
      this.curRocket = rockets[localStorage.curRocketInd]
    }
    if (localStorage.team) {
      this.curTeam = JSON.parse(localStorage.team)
      let count = 0
      Object.keys(this.curTeam).forEach(role => count += this.curTeam[role].length)
      if (count !== this.curRocket.teamNumber) {
        Object.keys(this.curTeam).forEach(role => this.curTeam[role] = [])
      }
    }
    else {
      this.team.forEach(role => this.$set(this.curTeam, role.role, []))
    }
  },
  methods: {
    startRocket() {
      this.rocketFly = true
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  margin-left: -20px;
}

button {
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
}
li {
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
}
.info-container {
  width: 50%;
  height: 100%;
}
.status {
  ul {
    margin: 10px 0 0 24px;
    list-style: none;
    padding: 0;

    li:before {
      content: "";
      display: inline-block;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background-color: #FF7D84;
      margin-right: 9px;
    }
    .status-done:before {
      background-color: #73E24D;
    }
  }
}

.weather, .team {
  dl {
    margin: 23px 28px 10px;

    div {
      border-bottom: 1px solid #D1D9E5;
      display: flex;
      padding: 8px 0;
      align-items: center;

      dt {
        width: 40%;
        font-weight: bold;
        font-size: 18px;
      }
      dd {
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
.weather {
  dt {
    color: #0A5499;
  }
}
.team {
  .team-captain {
    color: #FF7D84;
  }
  .team-engineer {
    color: #E69F54;
  }
  .team-doctor {
    color: #64D03F;
  }
  .team-space-marine {
    color: #5A95F2;
  }
  .member-info {
    list-style: none;
  }

  dl {
    height: 175px;
    overflow-y: auto;
    margin-right: 10px;
    padding-right: 10px;
    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      background: #E8E8E8;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: #FF5800;
      border-radius: 10px;
    }
  }
}
.start-btn {
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
  &:disabled {
    background: #E4E4E4;
    color: #999999;
  }
}

.images-container {
  flex: 1;
  position: relative;
  .planet {
    background: url("../assets/planet.svg") no-repeat;
    width: 438px;
    height: 438px;
    position: absolute;
    top: 0;
    right: -35px;
  }
  .rocket {
    width: 410px;
    height: 410px;
    position: absolute;
    bottom: 50px;
    left: 60px;
  }
  .fly-rocket {
    transform: translateY(-5000px);
    transition: transform 6s ease-in-out;
  }
}
</style>