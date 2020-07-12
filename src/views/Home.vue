<template>
  <div class="home">
    <div class="info-container">
      <Card
        title="Статус"
        class="status"
      >
        <button class="start-btn" disabled>Поехали!</button>
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
            <dd>Космодром Северный</dd>
          </div>
          <div>
            <dt>Температура</dt>
            <dd>+15</dd>
          </div>
          <div>
            <dt>Влажность</dt>
            <dd>54%</dd>
          </div>
          <div>
            <dt>Ветер</dt>
            <dd>5м\с, СЗ</dd>
          </div>
        </dl>
      </Card>
      <Card
        title="Экипаж"
        class="team"
      >
        <dl>
          <div>
            <dt class="team-captain">Капитан</dt>
            <dd>Константин Константинопольский</dd>
          </div>
          <div>
            <dt class="team-engineer">Борт инженер</dt>
            <dd>Иван Иванов</dd>
          </div>
          <div>
            <dt class="team-doctor">Врач</dt>
            <dd>Петр Петров</dd>
          </div>
          <div>
            <dt class="team-space-marine">Космодесантник</dt>
            <dd>Анастасия Преображенская</dd>
          </div>
        </dl>
      </Card>
    </div>
    <div class="images-container">
      <div class="planet" />
      <img class="rocket" src="../assets/rocket.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      rocketDone: false,
      teamDone: false,
      weatherDone: false
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
    margin: 23px 28px 15px;

    div {
      border-bottom: 1px solid #D1D9E5;
      display:flex;
      padding: 8px 0;

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
}
</style>