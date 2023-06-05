<script>
export default {
  data() {
    return {
      email: "",
      formSubmitted: false,
    };
  },
  computed: {
    isValidEmail() {
      let re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(this.email).toLowerCase());
    },
  },
  methods: {
    handleClick() {
      this.formSubmitted = true;
      if (!this.isValidEmail) return;
      this.$emit("toggle");
    },
  },
};
</script>

<template>
  <form class="form">
    <div class="email-label-wrapper">
      <label class="email-label" htmlFor="email"> Email address </label>
      <label
        v-if="!isValidEmail && formSubmitted"
        class="email-label email-label-error"
        htmlFor="email"
      >
        Valid Email Required
      </label>
    </div>
    <input
      :class="{ 'email-error': !isValidEmail && formSubmitted }"
      v-model="email"
      type="email"
      id="email"
      name="email"
      placeholder="email@company.com"
    />
    <button @click.prevent="handleClick" class="subscribe-button">
      Subscribe to monthly newsletter
    </button>
  </form>
</template>

<style scoped>
.email-label {
  font-weight: bold;
  letter-spacing: 0.025rem;
  font-size: 0.7rem;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
}

#email {
  padding: 18px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 1.25rem;
}

.email-label-error {
  color: red;
}

.email-label-wrapper {
  display: flex;
  justify-content: space-between;
}

.email-error {
  outline: 1px solid red;
  border: 2px solid red !important;
  color: red;
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

.form {
  display: flex;
  flex-direction: column;
}
</style>
