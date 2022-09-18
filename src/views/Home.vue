<script>
import data, { App } from '../App.vue';

import hero from "@/components/hero.vue";
import content from "@/components/content.vue";

export default {
  name: "About",
  components: {
    hero,
    content,
  }
};
</script>

<template>
  <hero />
  <content />
</template>
<style scoped></style>
