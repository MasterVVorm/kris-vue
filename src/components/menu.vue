<template>
  <nav>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="filter">
      <defs>
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
            result="goo"
          ></feColorMatrix>
        </filter>
      </defs>
    </svg>
    <ul>
      <li>
        <router-link to="/">Главная</router-link>
      </li>
      <li>
        <router-link to="/examples">Примеры</router-link>
      </li>
      <li>
        <router-link to="/school">Обучение</router-link>
      </li>
      <li>
        <router-link to="/prices">Цены</router-link>
      </li>
      <li>
        <router-link to="/contacts">Контакты</router-link>
      </li>
      <div class="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "menu"
};
</script>

<style lang="scss">
$firstColor: #f8ff81;
$secondColor: #b9c3ff;
$thirdColor: #ffc4f6;
$fourthColor: #b7ffb1;
$fifthColor: #dfbeff;
nav {
  width: 100%;
  max-width: 1920px;
  height: 100px;
  /* font-family: "Pacifico", cursive; */
   font-family: 'Neucha', cursive;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  > svg {
    visibility: hidden;
  }
  ul {
    position: relative;
    padding: 0;
    display: flex;
    list-style: none;
    margin-right: 10%;
    li {
      z-index: 100;
      width: 120px;
      height: 40px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      user-select: none;

      &:nth-child(1):hover ~ .background {
        transform: translateX(0);
        span {
          transform: translateX(0px);
        }
      }

      &:nth-child(2):hover ~ .background {
        transform: translateX(120px);
        span {
          transform: translateX(-120px);
        }
      }
      &:nth-child(3):hover ~ .background {
        transform: translateX(240px);
        span {
          transform: translateX(-240px);
        }
      }
      &:nth-child(4):hover ~ .background {
        transform: translateX(360px);
        span {
          transform: translateX(-360px);
        }
      }
      &:nth-child(5):hover ~ .background {
        transform: translateX(480px);
        span {
          transform: translateX(-480px);
        }
      }
      a {
        color: rgba(0, 0, 0, .8);
        text-decoration: none;
      }
    }
    .background {
      position: absolute;
      top: 0;
      left: 0;
      width: 120px;
      height: 100%;
      filter: url(#gooey);
      display: flex;
      align-items: center;
      overflow: hidden;
      transition: 0.3s;
      transform: translateX(-120px);
      span {
        position: absolute;
        width: 110px;
        height: 30px;
        transition: 0.3s;
        transform: translateX(120px);
        &:nth-child(1) {
          background: $firstColor;
          left: 5px;
        }
        &:nth-child(2) {
          background: $secondColor;
          left: 125px;
        }
        &:nth-child(3) {
          background: $thirdColor;
          left: 245px;
        }
        &:nth-child(4) {
          background: $fourthColor;
          left: 365px;
        }
        &:nth-child(5) {
          background: $fifthColor;
          left: 485px;
        }
      }
    }
  }
}
</style>
