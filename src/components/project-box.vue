<template>
  <div class="project">
    <div class="project__box">
      <div class="project__content" @click="showModal = true">
        <div class="project__icon">
          <img :src="require(`@/assets/projects/${project.icon}`)" alt>
        </div>
      </div>
      <h3 class="project__title">{{ project.name }}</h3>
      <div class="project__links">
        <a
          :href="project.github"
          rel="noopener noreferrer"
          target="_blank"
          class="project__links-box link-heading"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.02 23.02">
            <defs></defs>
            <title>Asset 27</title>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_2-2" data-name="Layer 2">
                <path
                  class="cls-1"
                  d="M11.51,0A11.51,11.51,0,1,0,23,11.51,11.51,11.51,0,0,0,11.51,0Zm3.23,20.28c-.07-.9-.14-2-.15-2.47a2.19,2.19,0,0,0-.9-1.79c3.32-.28,4.91-2.11,5-4.54A4.54,4.54,0,0,0,17.28,7.9a19.2,19.2,0,0,0-.1-2.84c-.75-.22-2.5.7-3,1.1a9.28,9.28,0,0,0-5.08,0,4.89,4.89,0,0,0-3-1.11A3.6,3.6,0,0,0,6,7.89c-.8.74-1.92,1.64-1.62,3.53C4.88,14.18,6.83,15.68,10,16a1,1,0,0,0-.84.86c-2.11.87-2.71-.54-3-.91-.88-1.09-1.68-.77-1.72-.76s-.09.09-.08.12c0,.24.52.48.55.5a4.07,4.07,0,0,1,1,1.61c.94,1.54,3.11.9,3.13.92s0,1.26,0,2.15a9.37,9.37,0,1,1,5.69-.25Z"
                ></path>
              </g>
            </g>
          </svg>github
        </a>

        <a
          :href="project.live"
          rel="noopener noreferrer"
          target="_blank"
          class="project__links-box link-heading"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 15.29">
            <defs></defs>
            <title>Asset 26</title>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_2-2" data-name="Layer 2">
                <path
                  class="cls-1"
                  d="M17.59,3.48A17.59,17.59,0,0,1,22.4,7.65s-4.25,5.63-9.9,5.63S2.6,7.65,2.6,7.65A17.32,17.32,0,0,1,8,3.19a5.66,5.66,0,0,0-1,3.24A5.73,5.73,0,1,0,17.59,3.48ZM12.5,15.29c7.67,0,12.5-7.64,12.5-7.64S20.17,0,12.5,0,0,7.65,0,7.65,4.83,15.29,12.5,15.29ZM11.65,2.71a3,3,0,0,0-3,2.77A.7.7,0,0,0,10,5.55a1.59,1.59,0,0,1,1.61-1.46.69.69,0,0,0,0-1.38Z"
                ></path>
              </g>
            </g>
          </svg>live demo
        </a>
      </div>
    </div>

    <Modal v-bind:project="project" v-show="showModal" @close="showModal = false"></Modal>
  </div>
</template>

<script>
import Modal from '@/components/modal.vue';

export default {
  components: {
    Modal
  },
  props: {
    project: Object
  },
  data: function () {
    return {
      showModal: false
    }
  }
}
</script>
