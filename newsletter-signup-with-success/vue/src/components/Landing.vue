<script setup>
import SignupForm from "./SignupForm.vue";
</script>

<script>
export default {
  components: {
    SignupForm,
  },
};
</script>
<template>
  <!-- import "./Landing.css";
import SignupForm from "./SignupForm";
import SignUpDesktop from "../assets/images/illustration-sign-up-desktop.svg";
import SignUpMobile from "../assets/images/illustration-sign-up-mobile.svg";
import IconList from "../assets/images/icon-list.svg"; -->

  <section class="content-wrapper">
    <div class="image">
      <picture>
        <source
          media="(min-width: 950px)"
          srcset="../assets/images/illustration-sign-up-desktop.svg"
        />
        <source
          media="(min-width: 375px)"
          srcset="../assets/images/illustration-sign-up-mobile.svg"
        />
        <img srcset="../assets/images/illustration-sign-up-mobile.svg" alt="" />
      </picture>
    </div>
    <div class="signup-form">
      <h2>Stay updated!</h2>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <ul>
        <li>
          <div class="product-list">
            <img src="../assets/images/icon-list.svg" />
            <p>Product discovery and building what matters</p>
          </div>
        </li>
        <li>
          <div class="product-list">
            <img src="../assets/images/icon-list.svg" />
            <p>Measuring to ensure updates are a success</p>
          </div>
        </li>
        <li>
          <div class="product-list">
            <img src="../assets/images/icon-list.svg" />
            <p>And much more!</p>
          </div>
        </li>
      </ul>
      <SignupForm @toggle="$emit('toggle')" />
    </div>
  </section>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
}

.product-list {
  display: flex;
}

.product-list > img {
  margin-right: 10px;
}

.signup-form {
  padding: 0px 20px;
  margin: 20px 0px;
}

button {
  padding: 18px;
  border-radius: 5px;
  background-color: var(--charcoal-grey);
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background-image: linear-gradient(to right, var(--tomato), #f66a3b);
  box-shadow: 0px 10px 20px -10px var(--tomato);
}

@media (min-width: 950px) {
  .image {
    margin: 20px;
  }

  .signup-form {
    padding: 0px 65px;
    margin: 20px 0px;
  }

  .content-wrapper {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    margin: 0 auto;
  }
}
</style>
