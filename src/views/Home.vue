<template>
  <div class="home">
    <Header></Header>
    <Dash location="right"></Dash>
    <About></About>
    <Dash location="left"></Dash>
    <Projects></Projects>
    <Dash location="center"></Dash>
    <Contact></Contact>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/sections/header.vue';
import About from '@/sections/about.vue';
import Projects from '@/sections/projects.vue';
import Contact from '@/sections/contact.vue';
import Footer from '@/sections/footer.vue';
import Dash from '@/components/dash.vue';
export default {
  components: {
    Header,
    About,
    Projects,
    Contact,
    Footer,
    Dash
  }
}
</script>
