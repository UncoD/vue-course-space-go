<template>
  <div class="home">
    <div class="info-container">
      <div class="container container--status">
        <h2>Статус</h2>
        <button class="start-btn" disabled>Поехали!</button>
        <ul>
          <li>Ракета выбрана</li>
          <li>Команда собрана</li>
          <li>Погода - ок</li>
        </ul>
      </div>
      <div class="container container--weather">
        <h2>Погодные условия</h2>
        <table>
          <tr>
            <td>Локация</td>
            <td>Космодром Северный</td>
          </tr>
          <tr>
            <td>Температура</td>
            <td>+15</td>
          </tr>
          <tr>
            <td>Влажность</td>
            <td>54%</td>
          </tr>
          <tr>
            <td>Ветер</td>
            <td>5м\с, СЗ</td>
          </tr>
        </table>
      </div>
      <div class="container container--team">
        <h2>Погодные условия</h2>
        <table>
          <tr>
            <td class="team-capitan">Капитан</td>
            <td>Константин Константинопольский</td>
          </tr>
          <tr>
            <td class="team-engineer">Борт инженер</td>
            <td>Иван Иванов</td>
          </tr>
          <tr>
            <td class="team-doctor">Врач</td>
            <td>Петр Петров</td>
          </tr>
          <tr>
            <td class="team-space-marine">Космодесантник</td>
            <td>Анастасия Преображенская</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="images-container">
      <div class="planet" />
      <div class="rocket" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  margin-left: -20px;
}

h2, button {
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
.container {
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  background-color: #FFFFFF;
  border-radius: 10px;
  width: 100%;
  min-height: 100px;
  margin-top: 48px;
  padding-bottom: 20px;
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

  &--status {
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
      li:last-child:before {
        background-color: #73E24D;
      }
    }
  }

  &--weather, &--team {
    table {
      flex: 1;
      margin: 23px 28px 15px;
      border-collapse: collapse;

      tr {
        border-bottom: 1px solid #D1D9E5;
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
          width: 40%;
          padding-left: 15px;
        }

        &:last-child {
          border: 0;
        }
      }
    }
  }

  &--weather {
    td:first-child {
      font-weight: bold;
      font-size: 18px;
      line-height: 21px;
      color: #0A5499;
    }
  }

  &--team {
    table {
      tr {
        .team-capitan {
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
    }
  }
}
.start-btn {
  background: #E4E4E4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: 0;
  width: 150px;
  height: 30px;
  position: absolute;
  top: 15px;
  right: 27px;
  color: #999999;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;
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
    background: url("../assets/rocket.svg") no-repeat;
    width: 410px;
    height: 410px;
    position: absolute;
    bottom: 50px;
    left: 60px;
  }
}
</style>