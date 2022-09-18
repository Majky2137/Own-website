<script>
import skills from './skills.vue';
import self from './self.vue';
import contact from './contact_form.vue';
import what_do from './whatdo.vue';

export default {
  name: "content",
  components: {
    skills,
    self,
    contact,
    what_do
  }
};
</script>
<template>
  <div class="content_wrapper">
    <skills></skills>
    <self></self>
    <what_do></what_do>
    <contact></contact>

  </div>
</template>

<style scoped>
.content_wrapper {
  min-height: 90vh;
  flex-direction: column;
  background-color: #14141b;
}
@media screen and (max-width: 688px) {
  .content_wrapper {
    display: flex;
  }
}
</style>
