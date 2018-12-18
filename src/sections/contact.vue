<template>
  <section class="section-contact">
    <h3 class="section-heading">Contact</h3>
    <div class="container">
      <div class="contact__description">
        <p class="paragraph">Have a question?</p>
      </div>

      <form action class="form">
        <div class="form__group">
          <input type="text" class="form__input" required placeholder="Full name" id="name">
          <label for="name" class="form__label">Full name</label>
        </div>
        <div class="form__group">
          <input type="email" class="form__input" required placeholder="Email address" id="email">
          <label for="email" class="form__label">Email address</label>
        </div>
        <div class="form__group">
          <textarea name id minlength="1" required class="form__text-area" placeholder="Message"></textarea>
          <label for="message" class="form__label">Message</label>
        </div>
        <div class="form__group">
          <button class="form__button">Send message</button>
        </div>
      </form>
    </div>
  </section>
</template>
