<template>
  <div class="navigation">
    <div
      class="navigation__button"
      :class="{ navigation__active: isActive}"
      @click="isActive = !isActive"
    >
      <span class="navigation__icon">&nbsp;</span>
      <span class="navigation__icon">&nbsp;</span>
      <span class="navigation__icon">&nbsp;</span>
    </div>
    <transition name="navigation__container">
      <template v-if="isActive">
        <div class="navigation__container">
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
          <Bars type="both"></Bars>
        </div>
      </template>
    </transition>
    <!-- <div class="navigation__background">&nbsp;</div> -->
  </div>
</template>

<script>
import Bars from '@/components/bars.vue';
export default {
  components: {
    Bars
  },
  data: function () {
    return {
      isActive: false
    }
  }
}
</script>
