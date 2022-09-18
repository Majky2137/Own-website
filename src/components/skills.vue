<script>
export default {
  name: 'skills',
  components: {},
  data: () => {
    return {
      stack: [
        "Java Script",
        "React",
        "React Native",
        'Vue',
        'HTML',
        "WordPress",
        "BootStrap",
        "CSS",
        "MySQL",
        "PHP",
        "Figma",
        "Adobe Xd",
        "Illustrator",
        "Photoshop",
      ],
    };
  },
}
</script>
<template>
  <div class="wrap">
    <div class="left_skills_container">
      <div v-motion-slide-visible-top
      :delay="300" class="info_skills">
        <h1><span style="color: #42b983">Skills</span> and tools</h1>
        <h2>
          There's some<span style="color: #42b983"> overview </span>of tools
          that I used to build all of my projects before and all of the tools
          I've planned to use in future projects
        </h2>
      </div>
    </div>

    <div class="right_skills_container">
      <div class="skills_image_container">
        <div v-motion-pop-visible
        :delay="130" v-for="stack in stack" :key="stack" class="badge">{{ stack }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrap {
  overflow-x: hidden;
  flex-direction: row;
  display: flex;
  position: relative;
  min-height: 40vh;
  height: auto;
  justify-content: center;
  padding-inline: 16rem;
  padding-block-start: 6.5rem;
  background-color: transparent;
}
.left_skills_container {
  position: relative;
  flex-direction: column;
  display: flex;
  width: 50%;
}
.info_skills {
  padding-block-start: 2.5rem;
}
::selection {
  color: #fff;
  background: #42b983;
}
.info_skills h1 {
  color: #e3e3e3;
  font-size: 26.5px;
  width: 100%;
  text-align: baseline;
  margin-bottom: 8px;
  white-space: pre-wrap;
}
.info_skills h2 {
  color: #9b9b9b;
  font-size: 17px;
  font-weight: 100;
  margin: 0;
  line-height: 1.8em;
  text-align: justify;
  width: 66%;
}
.right_skills_container {
  position: relative;
  flex-direction: row;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  width: 50%;
}
.skills_image_container {
  display: grid;
  grid-gap: 10px 10px;
  grid-template-columns: repeat(auto, auto);
  grid-template-rows: auto;
  align-content: center;
  width: 100%;
  justify-content: center;
  position: relative;
}
.badge {
  text-align: center;
  position: relative;
  border-radius: 8px;
  background: #9b9b9b;
  margin: 0;
  color: rgb(212, 212, 212);
  padding-block: 0.2em;
  padding-inline: 0.4em;
  cursor: pointer;
  filter: grayscale(50%);
  transition: all 0.25s ease-in-out;
}
.badge:hover {
  filter: grayscale(0%);
}
.badge:nth-child(1) {
  background: #bd9702;
  grid-column-start: 4;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 2;
}
.badge:nth-child(2) {
  background: #5453ff;
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
}
.badge:nth-child(3) {
  background: #09a1be;
  grid-column-start: 4;
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: 3;
}
.badge:nth-child(4) {
  background: #42b983;
  grid-column-start: 6;
  grid-column-end: 10;
  grid-row-start: 2;
  grid-row-end: 3;
}
.badge:nth-child(5) {
  background: #df5a35;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
}
.badge:nth-child(6) {
  background: #006bc0;
  grid-column-start: 5;
  grid-column-end: 13;
  grid-row-start: 3;
  grid-row-end: 4;
}
.badge:nth-child(7) {
  background: #6e10f4;
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 4;
}
.badge:nth-child(8) {
  background: #0675c4;
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 5;
}
.badge:nth-child(9) {
  background: #e28f00;
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 4;
  grid-row-end: 5;
}
.badge:nth-child(10) {
  background: #787cb4;
  grid-column-start: 5;
  grid-column-end: 6;
  grid-row-start: 4;
  grid-row-end: 5;
}
.badge:nth-child(11) {
  background: #ff4774;
  grid-column-start: 6;
  grid-column-end: 10;
  grid-row-start: 4;
  grid-row-end: 5;
}
.badge:nth-child(12) {
  background: #470038;
  grid-column-start: 4;
  grid-column-end: 6;
  grid-row-start: 5;
  grid-row-end: 6;
}
.badge:nth-child(13) {
  background: #3c0000;
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 6;
  grid-row-end: 7;
}
.badge:nth-child(14) {
  background: #00233f;
  grid-column-start: 5;
  grid-column-end: 10;
  grid-row-start: 6;
  grid-row-end: 7;
}
@media screen and (min-width: 320px) and (max-width: 688px){
  .wrap {
    flex-direction: column;
    padding-inline: 2rem;
    padding-block-start: 2rem;
    padding-block-end: 4rem;
  }
  .right_skills_container {
    width: 100%;
  }
  .left_skills_container {
    width: 100%;
    margin-block-end: 3rem;
  }
  .info_skills {
    width: 100%;
    justify-content: center;
    padding-block-start: 0;
  }
  .info_skills h1 {
    font-size: 28px;
  }
  .info_skills h2 {
    width: 100%;
  }
}
@media screen and (min-width: 689px) and (max-width: 922px) {
  .wrap {
    flex-direction: row;
    padding-inline: 2rem;
    padding-block-start: 2rem;
    padding-block-end: 2rem;
  }
  .right_skills_container {
    width: 50%;
    align-items: center;
  }
  .left_skills_container {
    width: 50%;
    align-items: center;
    flex-direction: row;
    margin-block-end: 3rem;
  }
  .info_skills {
    width: 100%;
    justify-content: center;
    padding-block-start: 0;
  }
  .info_skills h1 {
    font-size: 28px;
  }
  .info_skills h2 {
    width: 100%;
    font-size: 17px;
  }
  .skills_image_container{
    padding-inline-start: 4rem;
  }
}
</style>
