<template>
  <section id="home">
    <div class="bg">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="left_block" v-on:click="setShowDesc" v-bind:class="{cactive: showDesc}">
      <div v-bind:class="{iactive: showDesc}" class="img_container">
        <img src="../assets/images/kris.png" alt draggable="false">
      </div>
      <div class="waves" v-bind:class="{wactive: showDesc}">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="desc" v-bind:class="{dactive: showDesc}">
        <span class="close"></span>
        <p>Hi! my name is Kristina</p>
      </div>
    </div>
    <div class="right_block">
      <div class="title">
        <h1>Кристина Марищенко</h1>
        <p>Свадебный стилист и не только</p>
      </div>
      <div class="directions">
        <h3>Направления деятельности</h3>
        <div class="container">
          <div class="direction"></div>
          <div class="direction"></div>
          <div class="direction"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      showDesc: false
    };
  },
  methods: {
    setShowDesc: setShowDesc
  }
};

function setShowDesc(e) {
  this.showDesc = !this.showDesc;
}
</script>

<style lang="scss">
$firstColor: #162833;
$secondColor: #619b8a;
$thirdColor: #f2c14e;
$fourthColor: #ed658a;
$fifthColor: #cefffa;

#home {
  position: relative;
  display: grid;
  grid-template-columns: 50% 50%;
  overflow: hidden;
  font-family: "Neucha", cursive;

  .bg {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    filter: url(#gooey);
    span {
      position: absolute;
      width: 1200px;
      height: 1200px;
      border-radius: 400px;
      animation: rotate 10s infinite linear;
      background: $fourthColor;
      opacity: 0.6;
      &:nth-child(1) {
        animation-duration: 8s;
        animation-delay: -2s;
        left: -700px;
        top: -200px;
      }
      &:nth-child(2) {
        top: 0;
        left: -600px;
        animation-duration: 11s;
        animation-delay: -5s;
      }
      &:nth-child(3) {
        top: 100px;
        left: -500px;
        animation-duration: 13s;
        animation-delay: -3s;
      }
      &:nth-child(4) {
        top: 400px;
        left: -300px;
        animation-duration: 16s;
        animation-delay: -4s;
      }
    }
  }
  > .left_block {
    position: relative;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    align-self: center;
    margin: 0 auto;
    overflow: hidden;
    transition: 0.3s;
    cursor: pointer;
    perspective: 100px;
    transform-style: preserve-3d;
    background: white;
    &:hover {
      box-shadow: 0px 20px 40px 2px rgba($color: $thirdColor, $alpha: 0.6);
      .waves {
        opacity: 1;
      }
    }
    .img_container {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      backface-visibility: hidden;
      transform: rotateY(0) translateZ(-20px);
      transition: 0.3s;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .waves {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: 0.3s;
      span {
        position: absolute;
        left: -300px;
        bottom: -900px;
        width: 1000px;
        height: 1000px;
        border-radius: 400px;
        animation: rotate 10s infinite linear;
        background: $fourthColor;
        opacity: 0.6;
        &:nth-child(1) {
          animation-duration: 8s;
          animation-delay: -2s;
        }
        &:nth-child(2) {
          animation-duration: 11s;
          animation-delay: -5s;
        }
        &:nth-child(3) {
          animation-duration: 13s;
          animation-delay: -3s;
        }
        &:nth-child(4) {
          animation-duration: 16s;
          animation-delay: -4s;
        }
      }
    }
    .desc {
      position: absolute;
      top: 0;
      left: 0;
      width: 400px;
      height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translateZ(20px) rotateY(180deg);
      transition: 0.3s;
      backface-visibility: hidden;
      &:hover {
        .close {
          transform: translateY(50px);
        }
      }
      .close {
        position: absolute;
        top: -30px;
        left: 185px;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        background: rgba(0, 0, 0, 0.3);
        transition: 0.3s;
        &::before,
        &::after {
          position: absolute;
          top: 7.5px;
          left: 14px;
          content: " ";
          width: 2px;
          height: 15px;
          background: #000;
        }
        &::before {
          transform: rotate(45deg);
        }
        &::after {
          transform: rotate(-45deg);
        }
      }
    }
  }
  > .right_block {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .title {
      width: 100%;
      h1 {
        font-size: 24pt;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      p {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .directions {
      width: 100%;
      height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      h3{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .container{
        width: 100%;
        height: 70%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .direction{
          width: 30%;
          height: 100%;
          border: 1px solid;
        }
      }
    }
  }
}
.cactive {
  box-shadow: 0px 0px 40px 2px rgba($color: $thirdColor, $alpha: 0.6);
}
.iactive {
  transform: rotateY(180deg) !important;
}
.dactive {
  transform: rotate(360deg) !important;
}
.wactive {
  opacity: 1 !important;
  filter: url(#gooey);
}

@keyframes rotate {
  from {
    transform: rotate(0%);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

