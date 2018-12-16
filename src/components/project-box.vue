<template>
  <div class="project">
    <div class="project__box" @click="showModal = true">
      <div class="project__content">
        <div class="project__icon">
          <img :src="require(`@/assets/projects/${project.icon}`)" alt>
        </div>
      </div>
      <h3 class="project__title">{{ project.name }}</h3>
      <div class="project__links">
        <a href class="project__links-box link-heading">
          <img :src="require(`@/assets/icons/github.svg`)" alt>github
        </a>

        <a href class="project__links-box link-heading">
          <img :src="require(`@/assets/icons/eye.svg`)" alt>live demo
        </a>
      </div>
    </div>

    <Modal v-bind:project="project" v-if="showModal" @close="showModal = false"></Modal>
  </div>
</template>

<script>
import Modal from '@/components/modal.vue';

export default {
  components: {
    Modal
  },
  props: {
    project: Object
  },
  data: function () {
    return {
      showModal: false
    }
  }
}
</script>
