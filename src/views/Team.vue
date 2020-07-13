<template>
  <div class="team">
    <h1>Сбор команды</h1>
    <div class="card-container">
      <Card
        title="Команда"
        class="team-card"
      >
        <button
          class="make-btn"
          type="button"
          @click="saveTeam"
          :disabled="curTeamNumber !== rockets[curRocketInd].teamNumber"
        >
          Готово
        </button>
        <dl>
          <div
            v-for="(role, i) in team"
            :key="i"
          >
            <dt :class="teamClasses[i]">{{role.role}}</dt>
            <dd>
              <img
                class="member-icon"
                v-for="(emp, i) in curTeam[role.role]"
                :key="i"
                :src="emp.icon"
              >
            </dd>
          </div>
        </dl>
        <span class="warning" v-if="curTeamNumber !== rockets[curRocketInd].teamNumber">
          Неверное количество экипажа!
        </span>
        <span class="success" v-if="isTeamSave">
          Экипаж сохранен!
        </span>
      </Card>
      <Card
        title="Корабль"
        class="rocket-card"
      >
        <div class="rocket-info-container">
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
      <Card
        class="card-man"
        v-for="(role, i) in team"
        :key="i"
        :title="role.role"
      >
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
                v-model="curTeam[role.role]"
                :value="emp"
              >
              <span />
            </label>
          </li>
        </ul>
      </Card>
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
      curRocketInd: 0,
      curTeam: {},
      teamClasses: ['team-captain', 'team-engineer', 'team-doctor', 'team-space-marine'],
      isTeamSave: false
    }
  },
  computed: {
    curTeamNumber() {
      let count = 0
      Object.keys(this.curTeam).forEach(role => count += this.curTeam[role].length)
      return count
    }
  },
  created() {
    if (localStorage.team) {
      this.curTeam = JSON.parse(localStorage.team)
    }
    else {
      this.team.forEach(role => this.$set(this.curTeam, role.role, []))
    }
  },
  mounted() {
    if (localStorage.curRocketInd) {
      this.curRocketInd = localStorage.curRocketInd
    }
  },
  methods: {
    saveTeam() {
      localStorage.team = JSON.stringify(this.curTeam)
      this.isTeamSave = true
      setTimeout(() => this.isTeamSave = false, 1000)
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
  margin: 0 !important;
  padding-bottom: 10px !important;
}
.team-card, .rocket-card {
  dl {
    flex: 1;
    margin: 0 28px;

    div {
      display: flex;
      padding: 5px 0;

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
.rocket-card dt {
  color: #0A5499;
}
.team-card {
  dl {
    margin-top: 7px;
  }
  div {
    height: 20px;
  }
  .member-icon {
    width: 20px;
    height: 20px;
  }
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
.warning, .success {
  border-top: 1px solid #D8DCE3;
  padding: 8px 0 0 28px;
  margin-top: 8px;
}
.warning {
  color: #fb1717;
}
.success {
  color: #73E24D;
}
.make-btn {
  font-weight: bold;
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