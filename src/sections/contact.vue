<template>
  <section id="contact" class="section-contact">
    <h3 class="section-heading">Contact</h3>
    <div class="container">
      <div class="contact__description">
        <p class="paragraph">Have a question?</p>

        <a href="./resume.pdf" rel="noopener noreferrer" target="_blank" class="contact__links">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.76 19.86">
            <path
              class="cls-1"
              d="M12.64,12.88a2.36,2.36,0,0,1-1,0,4.5,4.5,0,0,1-1.24-.37,3.75,3.75,0,0,1,1.78.1,1.6,1.6,0,0,1,.43.25m-4.07-.67-.09,0-.58.15-.24.07c-.5.12-1,.25-1.52.41.19-.47.37-.93.54-1.39l.4-1,.22.35a6.54,6.54,0,0,0,1.27,1.42M7.29,7A4.13,4.13,0,0,1,7,8.63a2.64,2.64,0,0,1,0-2,1,1,0,0,1,.17-.27A1.17,1.17,0,0,1,7.29,7M4.68,14.22a6.17,6.17,0,0,1-.38.63c-.32.48-.84,1-1.1,1a.11.11,0,0,1-.1-.05.12.12,0,0,1,0-.09,1.57,1.57,0,0,1,.58-.77,5.76,5.76,0,0,1,1-.71m8.81-1.32c0-.58-1-1-1-1a3.83,3.83,0,0,0-1.26-.2A7.25,7.25,0,0,0,9.46,12a6,6,0,0,1-1.55-1.6,8.2,8.2,0,0,1-.47-.79A6,6,0,0,0,8,6.94c0-.77-.39-1.3-.87-1.3s-.61.25-.84.73a3.73,3.73,0,0,0,.32,3.24c-.22.53-.43,1.07-.63,1.6s-.51,1.33-.8,2a7.07,7.07,0,0,0-2,1.19,2.18,2.18,0,0,0-.83,1.3.84.84,0,0,0,.23.62.86.86,0,0,0,.64.28c.8,0,1.56-1.09,1.71-1.31a12.17,12.17,0,0,0,.83-1.5,19.31,19.31,0,0,1,2.1-.6l.25-.07.58-.15.65-.18a5.77,5.77,0,0,0,2.24.87,2.8,2.8,0,0,0,1.58-.16.58.58,0,0,0,.35-.57m1.41,5A1.07,1.07,0,0,1,13.79,19h-12A1.08,1.08,0,0,1,.62,17.9V1.76A1.08,1.08,0,0,1,1.75.62H9.93V4a1.76,1.76,0,0,0,1.82,1.84h3.12l0,0ZM14.34,5H11.89a1.08,1.08,0,0,1-1.13-1.13V1.37Zm1.39,13V5.59l-5-5.15v0h0L10.34,0H1.86A1.8,1.8,0,0,0,0,1.87V18a1.8,1.8,0,0,0,1.86,1.86h12A1.8,1.8,0,0,0,15.76,18"
            ></path>
          </svg>
          <span>Resume</span>
        </a>
        <a href="mailto:andrenguyenp@gmail.com" class="contact__links">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 11.86">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_2-2" data-name="Layer 2">
                <path
                  class="cls-1"
                  d="M0,1v9.82a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V1a1,1,0,0,0-1-1H1A1,1,0,0,0,0,1Zm2.24.21h13.6L9.26,7.11a.36.36,0,0,1-.44,0ZM1.23,2,8,8A1.56,1.56,0,0,0,10,8l6.73-6v8.64H1.23Z"
                ></path>
              </g>
            </g>
          </svg>
          <span>andrenguyenp@gmail.com</span>
        </a>
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
