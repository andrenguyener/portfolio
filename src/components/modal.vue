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
            <img
              class="modal-box__images-desktop-outline"
              src="@/assets/projects/desktop-svg-bg.svg"
              alt
            >
            <img
              class="modal-box__images-desktop-img"
              :src="require(`@/assets/projects/${project.desktopImage}`)"
              alt
            >
          </div>
          <div class="modal-box__images-mobile">
            <div class="modal-box__images-mobile-box">
              <img
                class="modal-box__images-mobile-box-outline"
                src="@/assets/projects/mobile-svg-bg.svg"
                alt
              >
              <img
                class="modal-box__images-mobile-box-img"
                :src="require(`@/assets/projects/${project.mobileImage1}`)"
                alt
              >
            </div>
            <div class="modal-box__images-mobile-box">
              <img
                class="modal-box__images-mobile-box-outline"
                src="@/assets/projects/mobile-svg-bg.svg"
                alt
              >
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
          <a href class="modal-box__links-box link-heading">
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

          <a href class="modal-box__links-box link-heading">
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
