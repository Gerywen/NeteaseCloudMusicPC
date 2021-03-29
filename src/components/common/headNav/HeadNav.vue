<template>
  <div class="headNav">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "headNav",
  props: {
    title: {
      type: String,
      default() {
        return "";
      },
    },
  },
};
</script>

<style scoped>
.headNav {
  height: 32px;
  padding: 0 10px 0 34px;
  border-bottom: 2px solid #c10d0c;
  background: url("~assets/img/index.png") no-repeat -225px -156px;
}
</style>
