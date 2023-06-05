<template>
  <section class="success-wrapper">
    <img class="success-check" src="../assets/images/icon-success.svg" />
    <h3>Thanks for subscribing!</h3>
    <p>
      A confirmation email has been sent to
      <span id="user-email"></span> Please open it and click the button inside
      to confirm your subscription.
    </p>
    <button @click.prevent="$emit('toggle')" class="dismiss-button">
      Dismiss message
    </button>
  </section>
</template>

<style scoped>
.success-wrapper {
  margin: 0 auto;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.success-wrapper > p {
  line-height: 1.5;
  color: var(--charcoal-grey);
}

.success-wrapper > button {
  margin-top: auto;
  margin-bottom: 30px;
}
.success-check {
  height: 75px;
  margin-right: auto;
  margin-top: 130px;
  margin-bottom: 20px;
}

.success-wrapper {
  height: 400px;
  width: 400px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
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
  .success-check {
    margin: 0;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
</style>
