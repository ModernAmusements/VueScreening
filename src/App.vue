<template>
  <div id="app">
    <transition mode="out-in">
      <router-view @save-score="saveScore" />
    </transition>
  </div>
</template>

<script>
// import { store, mutations } from "./store"


export default {
  name: "App",
  components: {
  },
};
</script>

<style lang="scss">

html {
  height: 100%;
}

body {
  height: 100%;
  background: linear-gradient(180deg, #FAF8F5 4.24%, rgba(255, 255, 255, 0) 72.25%);
  color: #3F414E;
}

#app {
  min-height: 100%;
  // padding: 95px 15px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

// Transition
.v-leave {
  opacity: 1;
}
.v-leave-active {
  transition: opacity 0.5s;
}
.v-leave-to {
  opacity: 0;
}
.v-enter {
  opacity: 0;
}
.v-enter-active {
  transition: opacity 0.5s;
}
.v-enter-to {
  opacity: 1;
}
</style>
