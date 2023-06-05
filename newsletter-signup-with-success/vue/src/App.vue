<script setup>
import Landing from "./components/Landing.vue";
import Success from "./components/Success.vue";
</script>

<script>
export default {
  components: {
    Landing,
    Success,
  },
  data() {
    return {
      showLanding: true,
      showSuccess: false,
    };
  },
  methods: {
    toggle() {
      this.showLanding = !this.showLanding;
      this.showSuccess = !this.showSuccess;
    },
  },
};
</script>

<template>
  <Landing v-if="showLanding" @toggle="toggle" />
  <Success v-if="showSuccess" @toggle="toggle" />
</template>
