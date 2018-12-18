<template>
  <span :class="`dash__horizontal-${location}`">&nbsp;</span>
</template>

<script>
export default {
  props: {
    location: String
  }
}
</script>
