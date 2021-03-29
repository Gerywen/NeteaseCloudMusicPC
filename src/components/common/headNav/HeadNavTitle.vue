<template>
  <div class="head-title">
    <slot name="head"></slot>
  </div>
</template>

<script>
export default {
  name: "HeadNavTitle",
};
</script>

<style scoped>
.head-title a {
  float: left;
  margin-right: 20px;
  font-size: 20px;
  font-weight: normal;
  line-height: 28px;
}
</style>
