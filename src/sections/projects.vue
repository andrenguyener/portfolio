<template>
  <section class="section-projects">
    <h3 class="section-heading">Projects</h3>
    <div class="container">
      <template v-for="project in projects">
        <ProjectBox v-bind:project="project" :key="project.name"></ProjectBox>
      </template>
    </div>
  </section>
</template>

<script>
import ProjectBox from '@/components/project-box.vue';
export default {
  components: {
    ProjectBox
  },
  data () {
    return {
      projects: [
        {
          name: 'Mito',
          description: 'lorem lorem lorem',
          icon: 'mito/logo.png',
          desktopImage: 'mito/desktop.jpg',
          mobileImage1: 'mito/mobile1.jpg',
          mobileImage2: 'mito/mobile2.jpg',
          github: 'https://github.com/andrenguyener/mito',
          live: 'https://projectmito.io/'
        },
        {
          name: 'Drippy Chat',
          description: 'lorem lorem lorem',
          icon: 'drippy/logo.png',
          desktopImage: 'drippy/desktop.jpg',
          mobileImage1: 'drippy/mobile1.jpg',
          mobileImage2: 'drippy/mobile2.jpg',
          github: 'https://github.com/andrenguyener/drippy-chat',
          live: 'https://drippy.club/'
        },
        {
          name: 'Husky Break',
          description: 'lorem lorem lorem',
          icon: 'husky/logo.png',
          desktopImage: 'husky/desktop.jpg',
          mobileImage1: 'husky/mobile1.jpg',
          mobileImage2: 'husky/mobile2.jpg',
          github: 'https://github.com/andrenguyener/husky-break',
          live: 'https://huskybreakclub.com/'
        }
      ]
    }
  }
}
</script>
