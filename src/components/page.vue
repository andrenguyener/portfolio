<template>
  <div class="page">
    <Logo></Logo>
    <Nav></Nav>
    <Scroll></Scroll>
    <slot></slot>
    <Bars type="vertical"></Bars>
  </div>
</template>

<script>
import Nav from '@/components/nav.vue';
import Logo from '@/components/logo.vue';
import Bars from '@/components/bars.vue';
import Scroll from '@/components/scroll.vue';
export default {
  components: {
    Nav,
    Logo,
    Bars,
    Scroll
  }
}
</script>
