<template>
  <div id="popup">
    <button v-on:click="show" class="button">show!</button>
    <modal name="hello-world" :draggable="true" :resizable="true">
      <div class="modal-header">
        <h2>Modal title</h2>
      </div>
      <div class="modal-body">
        <p>you're reading this text in a modal!</p>
        <button v-on:click="hide">閉じる</button>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  methods: {
    show: function () {
      this.$modal.show("hello-world");
    },
    hide: function () {
      this.$modal.hide("hello-world");
    },
  },
};
</script>

<style>
.modal-header,
.modal-body {
  padding: 5px 25px;
}
.modal-header {
  border-bottom: 1px solid #ddd;
}
</style>
