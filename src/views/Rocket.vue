<template>
  <div class="rocket">
    <h1>Выбор корабля</h1>
    <Card
      title="Корабль"
    >
      <div class="info-container">
        <button
          class="make-btn"
          type="button"
          @click="saveRocket"
        >
          Собрать ракету
        </button>
        <img class="rocket-icon" :src="rockets[curRocketInd].iconPath">
        <dl>
          <div>
            <dt>Имя</dt>
            <dd>{{ rockets[curRocketInd].name }}</dd>
          </div>
          <div>
            <dt>Скорость</dt>
            <dd>{{ rockets[curRocketInd].speed }} км/с</dd>
          </div>
          <div>
            <dt>Экипаж</dt>
            <dd>{{ rockets[curRocketInd].teamNumber }}</dd>
          </div>
        </dl>
      </div>
    </Card>
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
h1 {
  margin-bottom: 21px;
}
.card {
  width: 500px !important;

  .info-container {
    display: flex;
    align-items: center;
    padding: 20px 29px;

    .rocket-icon {
      width: 90px;
      height: 90px;
      margin-right: 35px;
    }
    dl {
      flex: 1;
      margin: 0;

      div {
        display:flex;
        padding: 8px 0;

        dt {
          width: 40%;
          font-weight: bold;
          font-size: 18px;
          color: #0A5499;
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