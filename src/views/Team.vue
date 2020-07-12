<template>
  <div class="team">
    <h1>Сбор команды</h1>
    <div class="card-container">
      <div class="card card-team">
        <h2>Команда</h2>
        <button
          class="make-btn"
          type="button"
          @click="saveTeam"
        >
          Готово
        </button>
        <table>
          <tr>
            <td class="team-captain">Капитан</td>
            <td>1</td>
          </tr>
          <tr>
            <td class="team-engineer">Борт инженер</td>
            <td>2</td>
          </tr>
          <tr>
            <td class="team-doctor">Врач</td>
            <td>3</td>
          </tr>
          <tr>
            <td class="team-space-marine">Космодесантник</td>
            <td>4</td>
          </tr>
        </table>
      </div>
      <div class="card">
        <h2>Корабль</h2>
        <div class="rocket-info-container">
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
      <div
        class="card card-man"
        v-for="(role, i) in team"
        :key="i"
      >
        <h2>{{ role.role }}</h2>
        <ul>
          <li
            v-for="(emp, e) in role.employees"
            :key="e"
          >
            <label class="emp-container">
              <div class="man-icon" :style="{backgroundImage: `url(${emp.icon})`}" />
              {{ emp.name }}
              <input
                class="team-check"
                type="checkbox"
              >
              <span />
            </label>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import rockets from "../assets/rockets.json"
import team from "../assets/team.json"
export default {
  name: 'Team',
  data() {
    return {
      rockets,
      team,
      curRocketInd: 0
    }
  },
  mounted() {
    if (localStorage.curRocketInd) {
      this.curRocketInd = localStorage.curRocketInd
    }
  },
  methods: {
    saveTeam() {

    }
  }
}
</script>

<style lang="scss" scoped>
.card-container {
  margin-left: -20px;
  display: grid;
  grid-template-columns: repeat(2, 500px);
  grid-column-gap: 76px;
  grid-row-gap: 52px;
}
.card {
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  background-color: #FFFFFF;
  border-radius: 10px;
  width: 500px;
  height: 203px;
  position: relative;
  display: flex;
  flex-direction: column;
  
  h2 {
    min-height: 58px;
    font-size: 18px;
    border-bottom: 1px solid #D8DCE3;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0 24px;
  }

  &--caps h2 {
    color: #FF7D84;
  }
}
.card-team {
  table {
    margin: 6px 28px 18px 31px;
    border-collapse: collapse;

    tr {
      td {
        padding: 6px 0;
      }
      td:first-child {
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        width: 40%;
      }
    }
    tr {
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
  }
}
.rocket-info-container {
  display: flex;
  align-items: center;
  padding: 20px 29px;

  .rocket-icon {
    background-size: cover;
    width: 90px;
    height: 90px;
    margin-right: 25px;
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
        width: 35%;
        padding-left: 15px;
        color: #0A5499;
      }
    }
  }
}
.card-man {
  ul {
    margin: 16px 16px 0;
    list-style: none;
    padding: 0;
    
    li {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #D8DCE3;
      margin-bottom: 12px;

      .emp-container {
        width: 100%;
        cursor: pointer;
        display: inline-block;
        
        .man-icon {
          margin: 0 26px 0 12px;
          width: 40px;
          height: 40px;
          display: inline-block;
          vertical-align: middle;
        }
        .team-check {
          display: none;

          & ~ span {
            content: "";
            width: 16px;
            height: 16px;
            float: right;
            margin-top: 10px;
            border: 1px solid #000000;
          }

          &:checked ~ span {
            background: url("../assets/check.svg") no-repeat;
            background-position: center 3px;
            color: #73E24D;
          }
        }
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
</style>