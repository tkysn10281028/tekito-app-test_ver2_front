<template>
  <div id="home-page">
    <div class="content">
      <p><input type="text" v-model="emailaddress" /></p>
    </div>
    <div class="content">
      <p><input type="password" v-model="password" /></p>
    </div>
    <div class="content">
      <p><button @click="submit">提出</button></p>
    </div>
    <router-link to="/next">次のページ</router-link>
    <MyPopUp></MyPopUp>
  </div>
</template>

<script>
import MyPopUp from "../organisms/PopUp.vue";
export default {
  components: {
    MyPopUp,
  },
  data() {
    return {
      emailaddress: "",
      password: "",
    };
  },
  methods: {
    submit: function () {
      let user = { emailaddress: this.emailaddress, password: this.password };
      this.$store.commit("setLogin", user);
    },
  },
};
</script>
<style>
.content {
  display: flex;
  justify-content: center;
}
</style>
