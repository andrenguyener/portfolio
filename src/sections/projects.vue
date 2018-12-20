<template>
  <section id="projects" class="section-projects">
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
          tags: ['Swift', 'Go'],
          github: 'https://github.com/andrenguyener/mito',
          live: 'https://projectmito.io/'
        },
        {
          name: 'Drippy Chat',
          description:
            'Drippy is an instant messaging application similar to slack. Allows users to signup/signin, create channels, and post messages in real time. Features user login with HTTPS authentication, CORS middleware, local caching, and sessions / credentials encryption.',
          icon: 'drippy/logo.png',
          desktopImage: 'drippy/desktop.jpg',
          mobileImage1: 'drippy/mobile1.jpg',
          mobileImage2: 'drippy/mobile2.jpg',
          tags: [
            'React',
            'Node',
            'Go',
            'MongoDB',
            'Websocket',
            'RabbitMQ',
            'Redis'
          ],
          github: 'https://github.com/andrenguyener/drippy-chat',
          live: 'https://drippy.club/'
        },
        {
          name: 'Husky Break',
          description:
            'Husky Break is a student organization at the University of Washington. Developed their site to inform the public about them, showcase their members, and recruit more members.',
          icon: 'husky/logo.png',
          desktopImage: 'husky/desktop.jpg',
          mobileImage1: 'husky/mobile1.jpg',
          mobileImage2: 'husky/mobile2.jpg',
          tags: ['HTML', 'CSS', 'Javascript'],
          github: 'https://github.com/andrenguyener/husky-break',
          live: 'https://huskybreakclub.com/'
        },
        {
          name: 'Lac Hong',
          description:
            'Lac Hong is a Vietnamese non-profit organization that I developed the front end for. Migrated over their previous files and document to work with a new system. Redesigned their pages and layout to communicate the information more effectively.',
          icon: 'lac-hong/logo.png',
          desktopImage: 'lac-hong/desktop.jpg',
          mobileImage1: 'lac-hong/mobile1.jpg',
          mobileImage2: 'lac-hong/mobile2.jpg',
          tags: ['React', 'HTML', 'CSS', 'Javascript'],
          github: 'https://github.com/andrenguyener/lac-hong',
          live: 'https://andrenguyener.github.io/lac-hong/'
        },
        {
          name: 'Epic Pet Health',
          description:
            'Epic Pet Health is a Seattle based company that team members and I reached out to remodel their website. We redesigned their layout of information to help customers find products catered to their preferences.',
          icon: 'epic-pet-health/logo.png',
          desktopImage: 'epic-pet-health/desktop.jpg',
          mobileImage1: 'epic-pet-health/mobile1.jpg',
          mobileImage2: 'epic-pet-health/mobile2.jpg',
          tags: ['React', 'HTML', 'CSS', 'Javascript'],
          github: 'https://github.com/andrenguyener/epic-pet-health',
          live: 'https://andrenguyener.github.io/epic-pet-health/#/'
        }
      ]
    }
  }
}
</script>
