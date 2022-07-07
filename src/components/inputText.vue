<template>
  <div id="inputText">
    <input type="text" v-model="emailaddress" /><br />
    <input type="password" v-model="password" /><br />
    <button @click="submit">push me</button>
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
  methods: {
    submit() {
      const user = { emailaddress: this.emailaddress, password: this.password };
      console.log("pressed");
      this.$emit("getUser", user);
    },
  },
};
</script>
