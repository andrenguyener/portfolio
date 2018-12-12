<template>
  <div class="project-box">
    <div class="project-box__icon">
      <img src alt>
    </div>
    <h3 class="project-box__title">{{ project.name }}</h3>
    <div class="project-box__links"></div>
    <div class="modal-box">
      <div class="modal-box__content">
        <div class="modal-box__close">&times;</div>
        <div class="modal-box__title"></div>
        <div class="modal-box__description"></div>
        <div class="modal-box__images"></div>
        <div class="modal-box__tags"></div>
        <div class="modal-box__links"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: Object
  }
}
</script>
