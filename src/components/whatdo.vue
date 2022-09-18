<script>
export default {
  name: 'what_do',
  components: {},
}
</script>
  <template>
      <div class="do_wrap">
        <div class="about_header">
          What I <span style="color: #42b983"> do </span> ?
        </div>
        <div class="do_grid">
          <a href="https://github.com/Majky2137" target=”_blank” v-motion-slide-visible-bottom
          :delay="600" class="do_card">
          <span style="color: #42b983">Web dev</span>
        </a>

           <a href="https://www.behance.net/azzuzel225" target=”_blank” v-motion-slide-visible-top
          :delay="600" class="do_card">
          <span style="color: #42b983">UX/UI</span>
         </a>

          <a href="https://expo.dev/@majky2137/hexanime" target=”_blank” v-motion-slide-visible-right
          :delay="600" class="do_card">
          <span style="color: #42b983">MOBILE DEV</span>
          </a>

        </div>
    </div>
  </template>

  <style scoped>
  .do_wrap {
    overflow-x: hidden;
    overflow-y: hidden;
    flex-direction: column;
    display: flex;
    position: relative;
    min-height: 40vh;
    height: auto;
    justify-content: center;
    padding-inline: 16rem;
    background-color: #14141B;
  }
  ::selection {
    color: #fff;
    background: #42b983;
  }

  .do_grid {
    display: grid;
    grid-gap: 30px 30px;
    grid-template-columns: repeat(auto, auto);
    grid-template-rows: auto;
    align-content: center;
    justify-content: center;
    position: relative;
  }
  .about_header {
  color: #fff;
  font-size: 32px;
  font-weight: 100;
  margin: 0;
  line-height: 1.3em;
  text-align: center;
  width: 100%;
  margin-bottom: 3rem;
}
  .do_card{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 150px;
    width:150px;
    border-radius: 8px;
    background: #00020E;
    transition: all 0.3s;
    border: 0.5px solid #42b983;
    text-decoration: none;
    box-shadow: inset 0 0 2px #42b983, 0 0 2px 0px #9b9b9b;
  }
  .do_card:hover {
    color: #E3E3E3;
    border: 0.5px solid #42b983;
    box-shadow: inset 0 0 3px #42b983, 0 0 9px 1px #42b983;
    cursor: pointer;
  }
  .do_card span{
    color: #9b9b9b;
    font-size: 24px;
    font-weight: 100;
    margin: 0;
    text-transform: uppercase;
    line-height: 1.8em;
    text-align: center;
    width: 66%;
  }
  .do_card:nth-child(1){
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 1;
  }
  .do_card:nth-child(2){
    grid-column-start: 4;
    grid-column-end: 8;
    grid-row-start: 1;
    grid-row-end: 1;
  }
  .do_card:nth-child(3){
    grid-column-start: 8;
    grid-column-end: 12;
    grid-row-start: 1;
    grid-row-end: 1;
  }
  .form_controller {
    position: relative;
    flex-direction: column;
    display: flex;
    justify-content: center;
  }
  .input_text {
    width:100%;
    height: 100%;
    position: relative;
    font-family: "Poppins", sans-serif;
    border-radius: 4px;
    overflow: hidden;
    transition: all 0.3s;
    background: transparent;
    border: 2px solid #42b983;
    box-shadow: inset 0 0 3px #42b983, 0 0 9px 1px #42b983;
    justify-content: center;
    color: #9b9b9b;
    font-size: 16px;
    font-weight: 100;
    margin-block: 0.3rem;
    line-height: 1.8em;
    cursor:pointer;
  }
  .input_text:hover {
    color: #E3E3E3;
    border: 2px solid #42b983;
    box-shadow: inset 0 0 10px #42b983, 0 0 2px 0px #9b9b9b;
  }
  .input_text:nth-child(1){
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  .input_text:nth-child(2){
    grid-column-start: 4;
    grid-column-end: 8;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  .input_text:nth-child(3){
    grid-column-start: 1;
    grid-column-end: 8;
    grid-row-start: 2;
    grid-row-end: 8;
  }
  @media screen and (min-width: 320px) and (max-width: 688px) {
    .do_wrap {
      padding-inline: 2rem;
      padding-block-start: 2rem;
      padding-block-end: 2rem;
      flex-direction: column;
      overflow-y: hidden;
    }
    .do_grid {
      justify-content: flex-start;
      overflow-y: hidden;
      overflow-x: scroll;
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
      padding-left:0;
    }
    .about_header {
      width: 100%;
      margin-bottom: 1rem;
      font-size: 28px;
    }
  }
  @media screen and (min-width: 689px) and (max-width: 922px) {
    .do_wrap {
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
