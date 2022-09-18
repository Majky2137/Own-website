<script>
  import emailjs from 'emailjs-com';
  import {ref} from 'vue';
  export default {
    name: 'contact',
    components: {},
    data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_key', 'template_key', e.target,
        'user_id', {
          name: this.name,
          email: this.email,
          message: this.message
        })

      } catch(error) {
          console.log({error})
      }
      this.name = ''
      this.email = ''
      this.message = ''
    },
  }

  }
  </script>
  <template>
      <div class="form_wrap">
   <div class="left_self_container">
        <div v-motion-pop-visible
        :delay="500" class="info_about">
          <h1>CONTACT</h1>
          <div class="about_header">
            Are <span style="color: #42b983"> you </span> intrested in <span style="color: #09a1be">me</span>?
          </div>
          <h2>
            Let me know if
            <span style="color: #42b983"> you're </span>intrested in <span style="color: #09a1be">me</span>, or you find my work <span style="color: #5453ff">cool</span>.<br>
            Tell me what <span style="color: #42b983"> improvement </span> I can do next, also what can I learn next.
          </h2>
        </div>
      </div>


      <div class="right_self_container">
          <form ref="form" @submit.prevent="sendEmail" v-motion-slide-visible-right class="form_container">
            <input placeholder="Name" type="text" name="name" v-model="name" class="input_text"/>
            <input placeholder="E-mail" type="email" name="email" v-model="email" class="input_text"/>
            <textarea placeholder="Message" type="text" name="message" v-model="message" class="input_text"></textarea>
            <div  v-motion-slide-visible-bottom
            :delay="400" class="btn-group">
            <input type="submit" value="Send" class="btn_cv"/>
          </div>
          </form>
      </div>
    </div>
  </template>

  <style scoped>
  .form_wrap {
    flex-direction: row;
    overflow-x: hidden;
    display: flex;
    position: relative;
    min-height: 60vh;
    height: auto;
    padding-inline: 16rem;
    padding-block-start: 6.5rem;
    padding-block-end: 6.5rem;
    background-color:  #00020E;
  }
  .left_self_container {
    position: relative;
    flex-direction: row;
    display: flex;
    width: 50%;
    padding-right: 2rem;
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
    align-items: center;
    align-items: flex-end;
    padding-left: 2rem;
    justify-content: center;
    padding-block: 4.5rem;
    width: 50%;
  }
  .form_container {
    display: grid;
    grid-gap: 30px 30px;
    grid-template-columns: repeat(auto, auto);
    grid-template-rows: auto;
    align-content: center;
    justify-content: center;
    position: relative;
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
    padding-left:0.46rem;
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
  .btn-group {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  padding-block: 0.1rem;
}
.btn_cv {
  width:130px;
  position: relative;
  font-family: "Poppins", sans-serif;
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.3s;
  background: transparent;
  color: #E3E3E3;
  border: 2px solid #42b983;
  box-shadow: inset 0 0 40px #42b983, 0 0 2px 0px #9b9b9b;
  justify-content: center;
  text-align: center;
  color: #9b9b9b;
  font-size: 16px;
  font-weight: 100;
  margin: 0;
  line-height: 1.8em;
  padding-block: 0.47rem;
  cursor:pointer;
}
.btn_cv:hover {

  background: transparent;
  border: 2px solid #42b983;
  box-shadow: inset 0 0 3px #42b983, 0 0 9px 1px #42b983;
}
  @media screen and (min-width: 320px) and (max-width: 688px) {
    .form_wrap {
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
      padding-left:0;
    }
    .about_header {
      width: 100%;
      margin-bottom: 1rem;
      font-size: 28px;
    }
  }
  @media screen and (min-width: 689px) and (max-width: 922px) {
    .form_wrap {
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
