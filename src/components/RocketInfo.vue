<template>
  <div class="rocket-container">
    <div class="rocket-info">
      <img
        class="rocket-icon"
        :src="this.iconPath">
      <dl>
        <div>
          <dt>Имя</dt>
          <dd>{{ name }}</dd>
        </div>
        <div>
          <dt>Скорость</dt>
          <dd>{{ speed }} км/с</dd>
        </div>
        <div>
          <dt>Экипаж</dt>
          <dd>{{ teamNumber }}</dd>
        </div>
      </dl>
    </div>
    <label class="choose">
      <input
        type="radio"
        name="rocket-choose"
        :checked="checked"
        @input="$emit('chooseRocket', index)"
      >
      <span class="mark" />
      Выбрать
    </label>
  </div>
</template>

<script>
export default {
  name: 'RocketInfo',
  props: {
    name: { type: String, required: true },
    iconPath: { type: String, required: true },
    speed: { type: Number, required: true },
    teamNumber: { type: Number, required: true },
    checked: { type: Boolean, required: true },
    index: { type: Number, default: 0 }
  }
}
</script>

<style lang="scss" scoped>
.rocket-container {
  width: 353px;
  height: 186px;
  border: 1px solid #000000;
  border-radius: 10px;
  display: inline-block;
  overflow: hidden;
  
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
}

.rocket-info {
  background-color: #FFFFFF;
  height: 151px;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .rocket-icon {
    width: 80px;
    height: 80px;
    margin: 0 24px;
    background-size: contain;
  }

  dl {
    flex: 1;
    margin: 0 17px 0 0;

    div {
      display: flex;
      padding: 8px 10px;
      border-bottom: 1px solid #D1D9E5;

      dt {
        width: 50%;
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

  table {
    flex: 1;
    border-collapse: collapse;
    margin-right: 17px;

    tr {
      border-bottom: 1px solid #D1D9E5;

      td {
        font-size: 18px;
        color: #000000;
        padding: 8px 0;
      }
      td:first-child {
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        width: 55%;
        padding-left: 15px;
        color: #0A5499;
      }

      &:last-child {
        border: 0;
      }
    }
  }
}

.choose {
  background-color: #D1E1FA;
  border-top: 1px solid #000000;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  input {
    display: none;
  }

  .mark {
    height: 16px;
    width: 16px;
    background-color: #FFFFFF;
    border-radius: 50%;
    border: 1px solid #000000;
    margin-right: 9px;
  }

  input:checked ~ .mark {
    background-color: #73E24D;
    border-color: #FFFFFF;
  }
}
</style>
