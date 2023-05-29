const subscribeButton = document.querySelector(".subscribe-button");
const successContent = document.querySelector(".success-wrapper");
const mainContent = document.querySelector(".content-wrapper");
const root = document.getElementById("root");

const main = `<section class="content-wrapper">
<div class="image">
  <picture>
    <source
      media="(min-width: 950px)"
      srcset="./assets/images/illustration-sign-up-desktop.svg"
    />
    <source
      media="(min-width: 375px)"
      srcset="./assets/images/illustration-sign-up-mobile.svg"
    />
    <img src="./assets/images/illustration-sign-up-mobile.svg" alt="" />
  </picture>
</div>
<div class="signup-form">
  <h2>Stay updated!</h2>
  <p>Join 60,000+ product managers receiving monthly updates on:</p>
  <ul>
    <li>
      <div class="product-list">
        <img src="assets/images/icon-list.svg" />
        <p>Product discovery and building what matters</p>
      </div>
    </li>
    <li>
      <div class="product-list">
        <img src="assets/images/icon-list.svg" />
        <p>Measuring to ensure updates are a success</p>
      </div>
    </li>
    <li>
      <div class="product-list">
        <img src="assets/images/icon-list.svg" />
        <p>And much more!</p>
      </div>
    </li>
  </ul>
  <form class="form">
  <div class="email-label-wrapper">
    <label class="email-label" for="email">Email address</label>
    <label class="email-label email-label-error" for="email">Valid Email Required</label>
    </div>
    <input
      id="email"
      name="email"
      placeholder="email@company.com"
    /><button class="subscribe-button">
      Subscribe to monthly newsletter
    </button>
  </form>
</div>
</section>`;

const success = `<section class="success-wrapper">
<img class="success-check" src="assets/images/icon-list.svg" />
<h3>Thanks for subscribing!</h3>
<p>
  A confirmation email has been sent to
  <span id="user-email"></span> Please open it and click the button inside
  to confirm your subscription.
</p>
<button class="dismiss-button">Dismiss message</button>
</section>`;

root.innerHTML = main;

document.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.matches(".subscribe-button")) {
    const emailInput = document.getElementById("email");
    const emailLabelErrorText = document.querySelector(".email-label-error");
    const emailIsValid =
      emailInput.value &&
      emailInput.value.match(
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
      );
    if (!emailIsValid) {
      emailInput.classList.add("email-error");
      emailLabelErrorText.classList.add("email-label-error");
      emailLabelErrorText.style.display = "block";
      return;
    }

    root.innerHTML = success;
    const emailUser = document.getElementById("user-email");
    emailUser.innerText = emailInput.value;
  }

  if (event.target.matches(".dismiss-button")) {
    root.innerHTML = main;
  }
});
