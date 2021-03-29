<template>
  <div class="tab-list">
    <slot name="li-word"></slot>
    <slot name="li-line"></slot>
  </div>
</template>

<script>
export default {
  name: "HeadNavCategory",
};
</script>

<style scoped>
.tab-list {
  float: left;
  margin-top: 7px;
}
.tab-list span {
  margin: 0 10px;
  color: #ccc;
}
</style>
