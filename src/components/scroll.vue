<template>
  <div class="scroll">
    <span class="scroll__bar" ref="scrollbar"></span>
  </div>
</template>

<script>
export default {
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      this.$refs.scrollbar.style.width =
        (window.scrollY /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight)) *
          100 +
        '%';
    }
  }
}
</script>
