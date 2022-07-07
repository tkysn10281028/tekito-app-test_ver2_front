<template>
  <div id="app">
    <MyInputText @getUser="processUser"></MyInputText>
  </div>
</template>
<script>
import MyInputText from "./components/inputText.vue";
export default {
  components: {
    MyInputText,
  },
  methods: {
    processUser(value) {
      // const url = "http://localhost:8080/login";
      const url = "http://www.tekito-app.com/login";
      console.log(value.emailaddress);
      console.log(value.password);
      const params = new URLSearchParams();
      params.append("emailaddress", value.emailaddress); // 渡したいデータ分だけappendする
      params.append("password", value.password);
      this.axios
        .post(url, params, this.serverPass + "login")
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
