<template>
  <div class="bars">
    <span v-if="type !== 'both'" :class="`bars--${type}`">&nbsp;</span>
    <span v-if="type === 'both'" :class="`bars--vertical`">&nbsp;</span>
    <span v-if="type === 'both'" :class="`bars--horizontal`">&nbsp;</span>
  </div>
</template>

<script>
export default {
  props: {
    type: String
  }
}
</script>
