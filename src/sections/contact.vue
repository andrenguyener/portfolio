<template>
  <section class="section-contact">
    <h3 class="section-heading">Contact</h3>
    <div class="container">
      <div class="contact__description">
        <p class="paragraph">Have a question?</p>
      </div>

      <form action class="form">
        <div class="form__group">
          <input type="text" class="form__input" placeholder="Full name" id="name" required>
          <label for="name" class="form__label">Full name</label>
        </div>
        <div class="form__group">
          <input type="email" class="form__input" placeholder="Email address" id="email" required>
          <label for="email" class="form__label">Email address</label>
        </div>
        <div class="form__group">
          <button>Send message</button>
        </div>
      </form>
    </div>
  </section>
</template>
