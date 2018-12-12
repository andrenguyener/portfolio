<template>
  <div class="home">
    <Header></Header>
    <About></About>
    <Projects></Projects>
  </div>
</template>

<script>
import Header from "@/sections/header.vue";
import About from "@/sections/about.vue";
import Projects from "@/sections/projects.vue";
export default {
  components: {
    Header,
    About,
    Projects
  }
};
</script>
