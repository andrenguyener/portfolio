<template>
  <section id="about" class="section-about">
    <h3
      class="section-heading"
      v-observe-visibility="{callback: sectionVisibility, once: true,  intersection: { rootMargin: '-15%'}}"
      :class="{hidden: !section, slideInLeft: section}"
    >About</h3>
    <div class="container">
      <div
        class="about__profile"
        v-observe-visibility="{callback: profileVisibility, once: true, intersection: {rootMargin: '-15%' }}"
        :class="{hidden: !profile, fadeIn: profile}"
      >
        <img class="about__profile-image" src="@/assets/headshot.jpg" alt>
      </div>
      <div class="about__description">
        <p class="paragraph">
          I am student studying Informatics
          at the University of Washington.
          I spend my time learning new
          web technologies and building
          cool applications.
          Aside from that, you can find me
          spinning on my head or watching
          anime.
        </p>
      </div>
    </div>
    <!-- <div> -->
    <!-- <Dash location="left"></Dash> -->
    <!-- </div> -->
  </section>
</template>

<script>
import Dash from '@/components/dash.vue';
export default {
  components: {
    Dash
  },
  data: function () {
    return {
      section: false,
      profile: false
    }
  },
  methods: {
    sectionVisibility (isVisible) {
      this.section = isVisible
    },
    profileVisibility (isVisible) {
      this.profile = isVisible
    }
  }
}
</script>
