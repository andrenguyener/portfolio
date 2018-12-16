<template>
  <div class="page">
    <Logo></Logo>
    <Nav></Nav>
    <slot></slot>
    <Bars type="vertical"></Bars>
  </div>
</template>

<script>
import Nav from '@/components/nav.vue';
import Logo from '@/components/logo.vue';
import Bars from '@/components/bars.vue';
export default {
  components: {
    Nav,
    Logo,
    Bars
  }
}
</script>
