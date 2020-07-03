<template>
  <nav>
    <router-link to="Home">
      <div class="home" />
    </router-link>
    <router-link to="#">
      <div class="small-icon rocket" />
    </router-link>
    <router-link to="#">
      <div class="small-icon team" />
    </router-link>
    <router-link to="#">
      <div class="small-icon weather" />
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavPanel'
}
</script>

<style scoped>
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
