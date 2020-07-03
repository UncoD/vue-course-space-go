<template>
  <div id="app">
    <NavPanel />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import NavPanel from "./components/NavPanel"
export default {
  name: 'App',
  components: {
    NavPanel,
  },
  created() {
    window.addEventListener('resize', this.resize)
  },
  mounted() {
    this.resize()
  },
  methods: {
    resize() {
      var scale
      var w = window.innerWidth
      var h = window.innerHeight
      scale = Math.min(
        w / (this.$el.clientWidth + 120),    
        h / (this.$el.clientHeight + 120)
      );
      this.$el.style.transform = `scale(${scale}, ${scale})`
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
