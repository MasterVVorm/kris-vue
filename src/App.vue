<template>
  <div id="app">
    <div class="header">
      <Menu/>
    </div>
    <div class="router_container">
      <transition name="slide">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Menu from "./components/menu.vue";

export default {
  name: "app",
  components: {
    Menu
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Pacifico");
@import url('https://fonts.googleapis.com/css?family=Neucha&display=swap&subset=cyrillic');

html {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: sans-serif;
}

#app {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.router_container {
  position: relative;
  width: 100%;
  height: calc(100% - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
}
#home,
#prices,
#examples,
#contacts,
#school {
  width: 90%;
  height: 90%;
  max-width: 1920px;
  box-shadow: 0 0 40px 2px rgba(0, 0, 0, 0.3);
  align-self: center;
  margin: 0 auto;
  background: white;
}
.slide-enter {
  position: absolute;
  opacity: 0;
  transition: 1s ease-in-out;
  transform: translateX(2000px);
}
.slide-enter-to {
  position: absolute;
  opacity: 1;
  transition: 1s ease-in-out;
  transform: translateX(0px);
}
.slide-leave-active {
  position: absolute;
  opacity: 1;
  transition: .5s ease-in-out;
  transform: translateX(0px);
}
.slide-leave-to {
  position: absolute;
  opacity: 0;
  transition: .5s ease-in-out;
  transform: translateX(-2000px);
}
</style>
