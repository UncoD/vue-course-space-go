<template>
  <div class="rocket">
    <h1>Выбор корабля</h1>
    <div class="choise">
      <h2>Корабль</h2>
      <div class="info-container">
        <button
          class="make-btn"
          type="button"
          @click="saveRocket"
        >
          Собрать ракету
        </button>
        <div class="rocket-icon" :style="{backgroundImage: `url(${rockets[curRocketInd].iconPath})`}"/>
        <table>
          <tr>
            <td>Имя</td>
            <td>{{ rockets[curRocketInd].name }}</td>
          </tr>
          <tr>
            <td>Скорость</td>
            <td>{{ rockets[curRocketInd].speed }} км/с</td>
          </tr>
          <tr>
            <td>Экипаж</td>
            <td>{{ rockets[curRocketInd].teamNumber }}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="rockets-container">
      <RocketInfo
        v-for="(rocket, i) in rockets"
        :key="i"
        :name="rocket.name"
        :speed="rocket.speed"
        :teamNumber="rocket.teamNumber"
        :iconPath="rocket.iconPath"
        :checked="i == curRocketInd"
        :index="i"
        @chooseRocket="setCurrentRocket"
      />
    </div>
  </div>
</template>

<script>
import rockets from "../assets/rockets.json"
export default {
  name: 'Rocket',
  data() {
    return {
      rockets,
      curRocketInd: 0
    }
  },
  mounted() {
    if (localStorage.curRocketInd) {
      this.curRocketInd = localStorage.curRocketInd
    }
  },
  methods: {
    setCurrentRocket(index) {
      this.curRocketInd = index
    },
    saveRocket() {
      localStorage.curRocketInd = this.curRocketInd
    }
  }
}
</script>

<style lang="scss" scoped>
h2, button {
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
}
.choise {
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  background-color: #FFFFFF;
  border-radius: 10px;
  width: 500px;
  min-height: 100px;
  margin-top: 48px;
  position: relative;
  display: flex;
  flex-direction: column;
  
  h2 {
    height: 58px;
    border-bottom: 1px solid #D8DCE3;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0 24px;
  }

  .info-container {
    display: flex;
    align-items: center;
    padding: 20px 29px;

    .rocket-icon {
      background-size: cover;
      width: 90px;
      height: 90px;
      margin-right: 25px;
    }
  }

  table {
    flex: 1;
    border-collapse: collapse;

    tr {
      td {
        font-size: 18px;
        color: #000000;
        line-height: 37px;
        padding: 0;
      }
      td:first-child {
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        width: 50%;
        padding-left: 15px;
        color: #0A5499;
      }
    }
  }
  .make-btn {
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

    &:focus {
      outline: none;
    }
    &:active {
      background: #53b532;
    }
  }
}
.rockets-container {
  margin-top: 39px;
  height: 520px;
  overflow-y: auto;
  margin-right: 75px;

  &::-webkit-scrollbar {
    width: 10px;
    height: 300px;
  }

  &::-webkit-scrollbar-track {
    background: #E8E8E8;
    border-radius: 10px;
    height: 300px;
  }

  &::-webkit-scrollbar-thumb {
    background: #FF5800;
    border-radius: 10px;
    height: 300px;
  }

  .rocket-container {
    margin-right: 45px;
    margin-bottom: 39px;
  }
}
</style>