<script>
  import contact from './contact_form.vue';
export default {
  name: 'self',
  components: {},
  methods: {
    download () {
      const url = 'my_url_to_cv';
      window.location.href = url;
    }
  },

}
</script>
<template>
  <div class="self_wrap">
    <div class="left_self_container">
      <div v-motion-slide-visible-left class="image_container">
        <img src="../assets/2.png" />
      </div>
    </div>

    <div class="right_self_container">
      <div v-motion-pop-visible
      :delay="500" class="info_about">
        <h1>ABOUT</h1>
        <div class="about_header">
          Why <span style="color: #42b983"> hire </span> me for your company?
        </div>
        <h2>
          Maybe I don't have much
          <span style="color: #42b983"> commercial </span>experience, but to
          build all of my projects I had to gain some
          <span style="color: #42b983"> non-commercial </span> one. Like some
          knowledge of <span style="color: #bd9702">JavaScript</span> or some of
          the <span style="color: #42b983"> UX/UI </span> design. I also learn
          how to use <span style="color: #bd9702">JavaScript</span> frameworks
          properly, especially <span style="color: #5453ff">React</span>, but I
          also learn how to use some other frameworks like
          <span style="color: #42b983">Vue</span> or even how to build a mobile
          app with <span style="color: #09a1be">React Native</span>.
        </h2>
      </div>

      <div  v-motion-slide-visible-bottom
      :delay="400" class="btn-group">
        <button @click="download" class="btn_cv">Download my CV</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.self_wrap {
  flex-direction: row;
  overflow-x: hidden;
  display: flex;
  position: relative;
  height: auto;
  padding-inline: 16rem;
  padding-block-start: 6.5rem;
  padding-block-end: 6.5rem;
  background-color: #00020e;
}
.left_self_container {
  position: relative;
  flex-direction: row;
  display: flex;
  width: 50%;
}
::selection {
  color: #fff;
  background: #42b983;
}
.info_about {
  justify-content: center;
  align-self: center;
}
.info_about h1 {
  color: #42b983;
  font-size: 23px;
  width: 100%;
  text-align: baseline;
  margin-bottom: 8px;
  white-space: pre-wrap;
}
.about_header {
  color: #fff;
  font-size: 32px;
  font-weight: 100;
  margin: 0;
  line-height: 1.3em;
  width: 70%;
  margin-bottom: 1rem;
}
.info_about h2 {
  color: #9b9b9b;
  font-size: 16px;
  font-weight: 100;
  margin: 0;
  line-height: 1.8em;
  text-align: justify;
  width: 100%;
}

.right_self_container {
  position: relative;
  flex-direction: column;
  display: flex;
  align-self: center;
  padding-block: 4.5rem;
  height: 100%;
  width: 50%;
}
.image_container {
  display: flex;
  width: 445px;
  height: 535px;
  position: relative;
  object-fit: contain;
  border-radius: 10px;
  padding-block-start: 2.5rem;
  filter: drop-shadow(0 0 0.75rem #42b983);
}
.image_container img {
  display: flex;
  filter: #14141b;
  filter: grayscale(1);
  -webkit-filter: grayscale(1);
  border-radius: 10px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: all 0.3s;
}
.image_container img:hover {
  transform: scale(1.1);
}
.btn-group {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  padding-block: 4.5rem;
}
.btn_cv {
  width:170px;
  position: relative;
  font-family: "Poppins", sans-serif;
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.3s;
  background: transparent;
  border: 2px solid #42b983;
  box-shadow: inset 0 0 3px #42b983, 0 0 9px 1px #42b983;
  justify-content: center;
  text-align: center;
  color: #9b9b9b;
  font-size: 16px;
  font-weight: 100;
  margin: 0;
  line-height: 1.8em;
  padding-block: 0.77rem;
  cursor:pointer;
}
.btn_cv:hover {
  color: #E3E3E3;
  border: 2px solid #42b983;
  box-shadow: inset 0 0 40px #42b983, 0 0 2px 0px #9b9b9b;
}
@media screen and (min-width: 320px) and (max-width: 688px) {
  .self_wrap {
    padding-inline: 2rem;
    padding-block-start: 2rem;
    padding-block-end: 2rem;
    flex-direction: column;
    overflow-y: hidden;
  }
  .left_self_container {
    width:100%;
  }
  .image_container {
    width: 345px;
    height: 335px;
}
  .right_self_container {
    width:100%;
    padding-block: 1.5rem;
    width:100%;
  }
  .about_header {
    width: 100%;
    margin-bottom: 1rem;
    font-size: 28px;
  }
}
@media screen and (min-width: 689px) and (max-width: 922px) {
  .self_wrap {
    padding-inline: 2rem;
    padding-block-start: 2rem;
    padding-block-end: 0rem;
    flex-direction: row;
    overflow-y: hidden;
  }
  .left_self_container {
    width:50%;
  }
  .image_container {
    width: 335px;
    height: 635px;
}
  .right_self_container {
    width:50%;
    padding-block: 2.5rem;
  }
  .btn-group {
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    padding-block: 3.5rem;
}
  .about_header {
    margin-block-end: 1rem;
    font-size: 28px;
  }
  .about_header h2 {
    font-size: 18px;
  }
}
</style>
