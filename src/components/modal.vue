<template>
  <transition name="modal-box">
    <div class="modal-box">
      <div class="modal-box__content">
        <div class="modal-box__close" @click="$emit('close')">&times;</div>
        <div class="modal-box__title">
          <h3>{{ project.name }}</h3>
        </div>
        <div class="modal-box__description">
          <p class="paragraph">{{ project.description }}</p>
        </div>
        <div class="modal-box__images">
          <div class="modal-box__images-desktop">
            <svg
              class="modal-box__images-desktop-outline"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 900 721"
            >
              <path
                class="cls-1"
                d="M868.77,619h-839a30.09,30.09,0,0,1-30-30V30a30.09,30.09,0,0,1,30-30h839a30.09,30.09,0,0,1,30,30V589A30.09,30.09,0,0,1,868.77,619Z"
                transform="translate(0.73 0.5)"
              ></path>
              <path
                class="cls-1"
                d="M552.07,619.1c.7,11.1,2,26.3,3.7,40.7,4.5,39.1,8,42.5,8.7,42.8,3.2,1.4,13,2.9,21.7,4.2,15.5,2.4,17.6,2.9,17.6,4.4v2.2c0,.6,0,1-3,1.4v2.6c.1,1.7-94.2,1.6-94.2,1.6l-57.4,1h-57.4c-44.8-.7-94.3-1-94-2.6v-2.6c-3.2-.4-3-1.4-3-1.4v-2.2c0-1.5,2.1-2,17.6-4.4,8.7-1.3,18.5-2.8,21.7-4.2.7-.3,4.2-3.7,8.7-42.8,1.7-14.4,3-29.6,3.7-40.7"
                transform="translate(0.73 0.5)"
              ></path>
              <path
                class="cls-1"
                d="M599.57,714.8c-4,.4-12,.7-27.6.9s-36.7.4-65,.4c-14,0-27.2,0-38.8-.1h-38c-11.7,0-24.9.1-38.8.1-28.2,0-49.5-.1-65-.4s-23.5-.5-27.6-.9"
                transform="translate(0.73 0.5)"
              ></path>
              <circle class="cls-1" cx="450" cy="19.5" r="4.1"></circle>
            </svg>

            <img
              class="modal-box__images-desktop-img"
              :src="require(`@/assets/projects/${project.desktopImage}`)"
              alt
            >
          </div>
          <div class="modal-box__images-mobile">
            <div class="modal-box__images-mobile-box">
              <svg
                class="modal-box__images-mobile-box-outline"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 259 538"
              >
                <path
                  class="cls-1"
                  d="M222.2,537H38.8A35.91,35.91,0,0,1,3,501.2V39.8A35.91,35.91,0,0,1,38.8,4H222.2A35.91,35.91,0,0,1,258,39.8V501.2A35.91,35.91,0,0,1,222.2,537Z"
                  transform="translate(0.5 0.5)"
                ></path>
                <path
                  class="cls-1"
                  d="M220.7,530H40.3A29.38,29.38,0,0,1,11,500.7V41.3A29.38,29.38,0,0,1,40.3,12H220.7A29.39,29.39,0,0,1,250,41.3V500.7A29.39,29.39,0,0,1,220.7,530Z"
                  transform="translate(0.5 0.5)"
                ></path>
                <circle
                  class="cls-1"
                  cx="130.6"
                  cy="497.23"
                  r="21.9"
                  transform="matrix(0.09, -1, 1, 0.09, -375.91, 582.75)"
                ></circle>
                <circle class="cls-1" cx="131.1" cy="31.3" r="5.7"></circle>
                <circle class="cls-1" cx="131.1" cy="31.3" r="2.5"></circle>
                <path
                  class="cls-1"
                  d="M149,56H112.2a5,5,0,0,1-5-5h0a5,5,0,0,1,5-5H149a5,5,0,0,1,5,5h0A5,5,0,0,1,149,56Z"
                  transform="translate(0.5 0.5)"
                ></path>
                <path
                  class="cls-1"
                  d="M2.6,147.9A2.59,2.59,0,0,1,0,145.34V130.1a2.59,2.59,0,0,1,2.56-2.6h0"
                  transform="translate(0.5 0.5)"
                ></path>
                <path
                  class="cls-1"
                  d="M2.6,182.7A2.58,2.58,0,0,1,0,180.14V164.9a2.59,2.59,0,0,1,2.56-2.6h0"
                  transform="translate(0.5 0.5)"
                ></path>
                <path
                  class="cls-1"
                  d="M3,103.3a3,3,0,0,1-3-3v-20a3,3,0,0,1,3-3"
                  transform="translate(0.5 0.5)"
                ></path>
                <path
                  class="cls-1"
                  d="M215,4V3a3,3,0,0,0-3-3H174a3,3,0,0,0-3,3V4"
                  transform="translate(0.5 0.5)"
                ></path>
              </svg>

              <img
                class="modal-box__images-mobile-box-img"
                :src="require(`@/assets/projects/${project.mobileImage1}`)"
                alt
              >
            </div>
            <div class="modal-box__images-mobile-box">
              <svg
                class="modal-box__images-mobile-box-outline"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 259 538"
              >
                <path
                  class="cls-1"
                  d="M222.2,537H38.8A35.91,35.91,0,0,1,3,501.2V39.8A35.91,35.91,0,0,1,38.8,4H222.2A35.91,35.91,0,0,1,258,39.8V501.2A35.91,35.91,0,0,1,222.2,537Z"
                  transform="translate(0.5 0.5)"
                ></path>
                <path
                  class="cls-1"
                  d="M220.7,530H40.3A29.38,29.38,0,0,1,11,500.7V41.3A29.38,29.38,0,0,1,40.3,12H220.7A29.39,29.39,0,0,1,250,41.3V500.7A29.39,29.39,0,0,1,220.7,530Z"
                  transform="translate(0.5 0.5)"
                ></path>
                <circle
                  class="cls-1"
                  cx="130.6"
                  cy="497.23"
                  r="21.9"
                  transform="matrix(0.09, -1, 1, 0.09, -375.91, 582.75)"
                ></circle>
                <circle class="cls-1" cx="131.1" cy="31.3" r="5.7"></circle>
                <circle class="cls-1" cx="131.1" cy="31.3" r="2.5"></circle>
                <path
                  class="cls-1"
                  d="M149,56H112.2a5,5,0,0,1-5-5h0a5,5,0,0,1,5-5H149a5,5,0,0,1,5,5h0A5,5,0,0,1,149,56Z"
                  transform="translate(0.5 0.5)"
                ></path>
                <path
                  class="cls-1"
                  d="M2.6,147.9A2.59,2.59,0,0,1,0,145.34V130.1a2.59,2.59,0,0,1,2.56-2.6h0"
                  transform="translate(0.5 0.5)"
                ></path>
                <path
                  class="cls-1"
                  d="M2.6,182.7A2.58,2.58,0,0,1,0,180.14V164.9a2.59,2.59,0,0,1,2.56-2.6h0"
                  transform="translate(0.5 0.5)"
                ></path>
                <path
                  class="cls-1"
                  d="M3,103.3a3,3,0,0,1-3-3v-20a3,3,0,0,1,3-3"
                  transform="translate(0.5 0.5)"
                ></path>
                <path
                  class="cls-1"
                  d="M215,4V3a3,3,0,0,0-3-3H174a3,3,0,0,0-3,3V4"
                  transform="translate(0.5 0.5)"
                ></path>
              </svg>

              <img
                class="modal-box__images-mobile-box-img"
                :src="require(`@/assets/projects/${project.mobileImage2}`)"
                alt
              >
            </div>
          </div>
        </div>
        <div class="modal-box__tags">
          <h3 class="section-heading">Built with</h3>
          <div class="modal-box__tags-box">
            <div v-for="tag in project.tags" :key="tag" class="modal-box__tags-box-item">{{ tag }}</div>
          </div>
        </div>
        <div class="modal-box__links">
          <template v-if="project.github">
            <a
              :href="project.github"
              rel="noopener noreferrer"
              target="_blank"
              class="modal-box__links-box link-heading"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.02 23.02">
                <path
                  class="cls-1"
                  d="M11.51,0A11.51,11.51,0,1,0,23,11.51,11.51,11.51,0,0,0,11.51,0Zm3.23,20.28c-.07-.9-.14-2-.15-2.47a2.19,2.19,0,0,0-.9-1.79c3.32-.28,4.91-2.11,5-4.54A4.54,4.54,0,0,0,17.28,7.9a19.2,19.2,0,0,0-.1-2.84c-.75-.22-2.5.7-3,1.1a9.28,9.28,0,0,0-5.08,0,4.89,4.89,0,0,0-3-1.11A3.6,3.6,0,0,0,6,7.89c-.8.74-1.92,1.64-1.62,3.53C4.88,14.18,6.83,15.68,10,16a1,1,0,0,0-.84.86c-2.11.87-2.71-.54-3-.91-.88-1.09-1.68-.77-1.72-.76s-.09.09-.08.12c0,.24.52.48.55.5a4.07,4.07,0,0,1,1,1.61c.94,1.54,3.11.9,3.13.92s0,1.26,0,2.15a9.37,9.37,0,1,1,5.69-.25Z"
                ></path>
              </svg>github
            </a>
          </template>
          <template v-if="project.live">
            <a
              :href="project.live"
              rel="noopener noreferrer"
              target="_blank"
              class="modal-box__links-box link-heading"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 15.29">
                <path
                  class="cls-1"
                  d="M17.59,3.48A17.59,17.59,0,0,1,22.4,7.65s-4.25,5.63-9.9,5.63S2.6,7.65,2.6,7.65A17.32,17.32,0,0,1,8,3.19a5.66,5.66,0,0,0-1,3.24A5.73,5.73,0,1,0,17.59,3.48ZM12.5,15.29c7.67,0,12.5-7.64,12.5-7.64S20.17,0,12.5,0,0,7.65,0,7.65,4.83,15.29,12.5,15.29ZM11.65,2.71a3,3,0,0,0-3,2.77A.7.7,0,0,0,10,5.55a1.59,1.59,0,0,1,1.61-1.46.69.69,0,0,0,0-1.38Z"
                ></path>
              </svg>live demo
            </a>
          </template>
        </div>
      </div>
      <div class="page__bars--horizontal"></div>
      <Bars type="both"></Bars>
    </div>
  </transition>
</template>

<script>
import Bars from '@/components/bars.vue';
export default {
  components: {
    Bars
  },
  props: {
    project: Object
  }
}
</script>
