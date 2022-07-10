<template>
  <div id="next-page">
    <p>{{ emailaddress }}</p>
    <p>{{ password }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emailaddress: "",
      password: "",
    };
  },
  created: function () {
    this.emailaddress = this.$store.getters.getLogin.emailaddress;
    this.password = this.$store.getters.getLogin.password;
  },
};
</script>
