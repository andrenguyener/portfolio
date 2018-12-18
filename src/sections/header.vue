<template>
  <header class="header">
    <div class="header__title">
      <h1 class="header__main">Andre Nguyen</h1>
      <h2 class="header__sub">
        <span>A user-centric software engineer</span>
        <span>that brings to life</span>
        <span>innovative ideas and solutions</span>
      </h2>
    </div>
    <div class="header__date">
      <span class="horizontal-bar-1">&nbsp;</span>
      <p class="header__date-time">Dec 16th, 2018</p>
    </div>
    <span class="horizontal-bar__right"></span>
    <div class="header__fade"></div>
    <!-- <Dash location="right"></Dash> -->
  </header>
</template>

<script>
import Dash from '@/components/dash.vue';
export default {
  components: {
    Dash
  }
}
</script>
