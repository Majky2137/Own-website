<script>
export default {
  name: 'hero',

  data () {
    return {
      name: 'Michał Wróblewski',
      greet: 'Programming and\nDesign of the future...',
      title: 'Junior Front-End Developer',
    }
  },
  methods: {
  scrollToDown() {
    window.scrollTo(0,490);
    scrollbehavior.scrollToDown();
  }
},
scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  }
}
</script>

<template>
  <div class="wrapper">
    <div class="main_box">
      <nav>

        <router-link to="/">Hello</router-link>
      </nav>
      <div v-motion-slide-left v-motion-slide-visible-left
      :delay="500" class="left_box">
        <div class="info_cont">
          <h1>{{ this.greet }}</h1>
          <h2>{{ this.name }}</h2>
          <h3>{{ this.title }}</h3>
        </div>
      </div>

      <div class="bg">
        <div  class="overlay"/>
        <img
        v-motion-fade
        :delay="300"
          src="https://i.ibb.co/xL6RKFj/purple-web-development-background-76964-167-1.jpg"
        />
      </div>
      <div @click="scrollToDown" v-motion-slide-bottom v-motion-slide-visible-bottom
      :delay="500" class="scrolldown" style="--color: skyblue">
    <div class="chevrons">
        <div class="chevrondown"></div>
        <div class="chevrondown"></div>
    </div>
</div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  min-height: calc(101vh);
  height: auto;
  position: relative;
  display: flex;
  flex-direction: row;
}
.main_box {
  position: relative;
  display: flex;
  flex-direction: row;
  background-color: transparent;
  width: 100%;
}
.left_box {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 50%;
  z-index: 2;
  justify-content: center;
  padding-inline: 16rem;
}
.info_cont {
  font-family: "Poppins";
  position: relative;
  text-align: left;
  display: flex;
  flex-direction: column;
  width: 80%;
}
.info_cont h1 {
  color: #ffffff;
  font-size: 55px;
  width: 100%;
  text-align: baseline;
  text-transform: uppercase;
  margin: 0;
  white-space: pre-wrap;
}
.info_cont h2 {
  color: #9b9b9b;
  font-size: 45px;
  font-weight: 100;
  width: 100%;
  text-align: baseline;
  text-transform: uppercase;
  margin: 0;
}
.info_cont h3 {
  color: #42b983;
  font-size: 35px;
  font-weight: 100;
  width: 100%;
  text-align: baseline;
  text-transform: uppercase;
  margin: 0;
  margin-top: 80px;
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #14141B;
}
.bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: sepia(60%) brightness(50%);
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  filter: opacity(0.8);
  background-color: #14141B;
}
.scrolldown {
  position: relative;
  width: 30px;
  height: 50px;
  margin: 0 auto;
  border: calc(30px / 10) solid #42b983;
  border-radius: 50px;
  box-sizing: border-box;
  cursor: pointer;
  position: absolute;
  bottom:7%;
  left: 0;
  right: 0;
  z-index: 99;
}

.scrolldown::before {
  content: "";
  position: absolute;
  bottom: 30px;
  left: 50%;
  width: 6px;
  height: 6px;
  margin-left: -3px;
  background-color: #42b983;
  border-radius: 100%;
  animation: scrolldown-anim 2s infinite;
  box-sizing: border-box;
  box-shadow: 0px -5px 3px 1px #2a547066;
}

@keyframes scrolldown-anim {
  0% {
    opacity: 0;
    height: 6px;
  }

  40% {
    opacity: 1;
    height: 10px;
  }

  80% {
    transform: translate(0, 20px);
    height: 10px;
    opacity: 0;
  }

  100% {
    height: 3px;
    opacity: 0;
  }
}

.chevrons {
  padding: 6px 0 0 0;
  margin-left: -3px;
  margin-top: 48px;
  width: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.chevrondown {
  margin-top: -6px;
  position: relative;
  border: solid #42b983;
  border-width: 0 3px 3px 0;
  display: inline-block;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
}

.chevrondown:nth-child(odd) {
  animation: pulse54012 500ms ease infinite alternate;
}

.chevrondown:nth-child(even) {
  animation: pulse54012 500ms ease infinite alternate 250ms;
}

@keyframes pulse54012 {
  from {
    opacity: 0;
  }

  to {
    opacity: 0.5;
  }
}

@media (max-width: 1040px) {
  .left_box {
    padding-left: 2rem;
    width: 80%;
  }

  .info_cont {
    width: 100%;
  }
  .info_cont h1 {
    font-size: 40px;
  }
  .info_cont h2 {
    font-size: 30px;
  }

  .overlay {
    width: 100%;
  }
}
</style>
