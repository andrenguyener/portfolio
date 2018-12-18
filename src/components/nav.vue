<template>
  <div class="navigation">
    <div class="navigation__button" :class="{ navigation__active: isActive}" @click="navClicked">
      <span class="navigation__icon">&nbsp;</span>
      <span class="navigation__icon">&nbsp;</span>
      <span class="navigation__icon">&nbsp;</span>
    </div>
    <transition name="navigation__container">
      <div v-show="isActive" class="navigation__container" :class="{top_visible: isTop}">
        <nav class="navigation__nav">
          <ul class="navigation__list">
            <li class="navigation__item">
              <a href="#" class="navigation__link">About</a>
            </li>
            <li class="navigation__item">
              <a href="#" class="navigation__link">Projects</a>
            </li>
            <li class="navigation__item">
              <a href="#" class="navigation__link">Contact</a>
            </li>
          </ul>
        </nav>
        <div class="navigation__social">
          <span class="vertical-bar">&nbsp;</span>
          <div class="navigation__social-container">
            <a href class="navigation__social-link">
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
              </svg>
            </a>
            <a href class="navigation__social-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 430.117 430.117"
                xml:space="preserve"
              >
                <g>
                  <path
                    id="LinkedIn"
                    d="M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707
		c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21
		v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824
		C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463
		c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z
		 M5.477,420.56h92.184v-277.32H5.477V420.56z"
                  ></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
        <Bars type="both"></Bars>
      </div>
    </transition>
    <!-- <div class="navigation__background">&nbsp;</div> -->
  </div>
</template>

<script>
import Bars from '@/components/bars.vue';
import { dataContext } from '@/main.ts';

export default {
  components: {
    Bars
  },
  data: function () {
    return {
      isActive: false,
      isTop: true
    }
  },
  methods: {
    navClicked () {
      this.isActive = !this.isActive
      dataContext.$emit('navActive', this.isActive)
    }
  },
  created () {
    dataContext.$on('isTop', isTop => {
      this.isTop = isTop
    })
  }
}
</script>
