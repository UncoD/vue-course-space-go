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
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss"  scoped>
.home {
  width: 100%;
  height: 100%;
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
  width: calc(100% - 84px);
  min-height: 100px;
  margin: 48px auto;
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

  &--weather {
    table {
      flex: 1;
      margin: 23px 28px 15px;
      border-collapse: collapse;

      tr {
        border-bottom: 1px solid #D1D9E5; /* Граница вокруг ячеек */
        td {
          font-size: 18px;
          color: #000000;
          line-height: 37px;
        }
        td:first-child {
          font-weight: bold;
          font-size: 18px;
          line-height: 21px;
          color: #0A5499;
        }

        &:last-child {
          border: 0;
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
</style>