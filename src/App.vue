<template>
  <Page>
    <router-view v-cloak/>
  </Page>
</template>

<script>
import Page from '@/components/page.vue';
export default {
  components: {
    Page
  }
}
</script>

<style>
[v-cloak] {
  display: none;
}
</style>
