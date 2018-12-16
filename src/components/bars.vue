<template>
  <transition name="bars">
    <div class="bars">
      <span v-show="type !== 'both'" :class="`bars--${type}`">&nbsp;</span>
      <span v-show="type === 'both'" :class="`bars--vertical`">&nbsp;</span>
      <span v-show="type === 'both'" :class="`bars--horizontal`">&nbsp;</span>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    type: String
  }
};
</script>
