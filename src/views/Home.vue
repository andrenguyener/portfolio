<template>
  <div class="home">
    <div class="loading" v-if="!show">
      <div class="loading__bar" ref="bar"></div>
    </div>

    <template v-if="show">
      <Header></Header>
      <Dash location="right"></Dash>
      <About></About>
      <Dash location="left"></Dash>
      <Projects></Projects>
      <Dash location="center"></Dash>
      <Contact></Contact>
      <Footer></Footer>
    </template>
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
  },
  created () {
    setTimeout(() => {
      this.show = true
    }, 2000)
  },
  data: function () {
    return {
      show: false
    }
  }
}
</script>

<style lang="scss">
.loading {
  position: fixed;
  width: 100%;
  height: 100%;
  // background-color: red;

  &__bar {
    width: 16rem;
    // background-color: white;
    position: absolute;
    top: 50%;
    left: calc(50% - 8rem);
    transform: translate(0, -50%);
    height: 2px;

    &::before {
      position: absolute;
      content: "";
      background-color: var(--color-white);
      height: 2px;
      width: 1px;
      // width: 16rem;

      // transition: all 5s;
      // opacity: 1;
      animation: fadeIn 0.5s, grow forwards 2s;
    }
  }
}
</style>
