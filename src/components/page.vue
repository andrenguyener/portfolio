<template>
  <div class="page">
    <Logo></Logo>
    <Nav></Nav>
    <slot></slot>
    <span class="page__bars">&nbsp;</span>
  </div>
</template>

<script>
import Nav from '@/components/nav.vue';
import Logo from '@/components/logo.vue';
export default {
  components: {
    Nav,
    Logo
  }
}
</script>
