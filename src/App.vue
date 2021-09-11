<template>
  <div id="app">
    <NavPanel />
    <main>
      <router-view
        :weather="weather"
        @weatherChecked="saveWeather"
      />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      weather: {}
    }
  },
  created() {
    window.addEventListener('resize', this.resize)
  },
  mounted() {
    this.resize()
  },
  methods: {
    resize() {
      const w = window.innerWidth
      const h = window.innerHeight
      let scale = Math.min(
        w / (this.$el.clientWidth + 120),    
        h / (this.$el.clientHeight + 120)
      )
      this.$el.style.transform = `scale(${scale}, ${scale})`
    },
    saveWeather(weather) {
      this.weather = weather
    }
  }
}
</script>

<style>
@import "./styles/styles.scss";
#app {
  background-color: #F4F6F9;
  box-shadow: 5px 7px 40px rgba(0, 0, 0, 0.2);
  min-width: 1300px;
  height: 900px;
  border-radius: 50px;
  display: flex;
  overflow: hidden;
}
main {
  flex: 1;
  padding-left: 63px;
}
</style>
