<template>
  <div class="more-item">
    <slot name="more"></slot>
    <slot name="icon"></slot>
  </div>
</template>

<script>
export default {
  name: "HeadNavMore",
};
</script>

<style scoped>
.more-item {
  float: right;
  margin-top: 9px;
}
.more-item a {
  font-size: 12px;
}
.more-item .icon {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-left: 4px;
  vertical-align: middle;
  background: url("~assets/img/index.png") no-repeat 0 -240px;
}
</style>
