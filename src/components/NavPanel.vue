<template>
  <nav>
    <router-link
      v-for="ind in tabNames.length"
      :key="ind"
      :to="toLink[ind - 1]"
    >
      <div
        @click="selectTab(ind - 1)"
        class="icon"
        :class="[{ 'active-tab': activeIndex === ind - 1}, tabNames[ind - 1] ]"
      />
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavPanel',
  data() {
    return {
      activeIndex: 0,
      tabNames: ["home", "small-icon rocket", "small-icon team", "small-icon weather"],
      toLink: ["home", "rocket", "team", "weather"]
    }
  },
  methods: {
    selectTab(index) {
      this.activeIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  width: 120px;
  height: 100%;
  background-color: #FF5800;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.home {
  background: url("../assets/navicons/earth.svg") no-repeat;
  width: 85px;
  height: 85px;
  margin: 50px 0 80px;
  cursor: pointer;
}
.icon {
  opacity: 75%;

  &:hover {
    opacity: 100%;
  }
}
.active-tab {
  opacity: 100%;
}
.small-icon {
  width: 65px;
  height: 65px;
  margin-bottom: 50px;
  cursor: pointer;
}
.rocket {
  background: url("../assets/navicons/rocket.svg") no-repeat;
}
.team {
  background: url("../assets/navicons/astronaut.svg") no-repeat;
}
.weather {
  background: url("../assets/navicons/thermometer.svg") no-repeat;
}
</style>
