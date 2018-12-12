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
          icon: '',
          desktopImage: '',
          mobileImage1: '',
          mobileImage2: '',
          github: '',
          live: ''
        }
      ]
    }
  }
}
</script>
