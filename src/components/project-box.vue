<template>
  <div class="project">
    <div class="project__box" @click="isActive = !isActive">
      <div class="project__content">
        <div class="project__icon">
          <img :src="require(`@/assets/projects/${project.icon}`)" alt>
        </div>
      </div>

      <h3 class="project__title">{{ project.name }}</h3>
      <div class="project__links">
        <a href class="project__links-box link-heading">
          <img :src="require(`@/assets/projects/github.svg`)" alt>github
        </a>

        <a href class="project__links-box link-heading">
          <img :src="require(`@/assets/projects/eye.svg`)" alt>live demo
        </a>
      </div>
    </div>

    <div class="modal-box" :class="{ active: isActive }">
      <div class="modal-box__content">
        <div class="modal-box__close" @click="isActive = !isActive">&times;</div>
        <div class="modal-box__title">
          <h3>{{ project.name }}</h3>
        </div>
        <div class="modal-box__description">
          <p>{{ project.description }}</p>
        </div>
        <div class="modal-box__images">
          <div class="modal-box__images-desktop">
            <img
              class="modal-box__images-desktop-outline"
              src="@/assets/projects/desktop-svg-bg.svg"
              alt
            >
            <img
              class="modal-box__images-desktop-img"
              :src="require(`@/assets/projects/${project.desktopImage}`)"
              alt
            >
          </div>
          <div class="modal-box__images-mobile">
            <div class="modal-box__images-mobile-box">
              <img
                class="modal-box__images-mobile-box-outline"
                src="@/assets/projects/mobile-svg-bg.svg"
                alt
              >
              <img
                class="modal-box__images-mobile-box-img"
                :src="require(`@/assets/projects/${project.mobileImage1}`)"
                alt
              >
            </div>
            <div class="modal-box__images-mobile-box">
              <img
                class="modal-box__images-mobile-box-outline"
                src="@/assets/projects/mobile-svg-bg.svg"
                alt
              >
              <img
                class="modal-box__images-mobile-box-img"
                :src="require(`@/assets/projects/${project.mobileImage2}`)"
                alt
              >
            </div>
          </div>
        </div>
        <div class="modal-box__tags">
          <h3>Built with</h3>
          <div class="modal-box__tags-box">
            <div v-for="tag in project.tags" :key="tag" class="modal-box__tags-box-item">{{ tag }}</div>
          </div>
        </div>
        <div class="modal-box__links">
          <a href class="modal-box__links-box link-heading">
            <img :src="require(`@/assets/projects/github.svg`)" alt>github
          </a>

          <a href class="modal-box__links-box link-heading">
            <img :src="require(`@/assets/projects/eye.svg`)" alt>live demo
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: Object
  },
  data: function () {
    return {
      isActive: false
    }
  }
}
</script>
