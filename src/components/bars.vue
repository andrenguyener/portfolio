<template>
  <div>
    <template v-if="type !== 'both'">
      <span :class="`bars--${type}`">&nbsp;</span>
    </template>
    <template v-else>
      <span :class="`bars--vertical`">&nbsp;</span>
      <span :class="`bars--horizontal`">&nbsp;</span>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    type: String
  }
}
</script>
