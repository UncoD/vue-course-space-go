<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: { type: String, required: true }
  }
}
</script>

<style lang="scss" scoped>
.card {
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
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    height: 58px;
    border-bottom: 1px solid #D8DCE3;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0 24px;
  }
}
</style>
