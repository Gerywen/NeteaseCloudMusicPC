<template>
  <head-nav>
    <head-nav-title>
      <a href="#" slot="head">新碟上架</a>
    </head-nav-title>
    <head-nav-more>
      <a href="#" slot="more">更多</a>
      <i slot="icon" class="icon"></i>
    </head-nav-more>
  </head-nav>
</template>

<script>
import HeadNav from "@/components/common/headNav/HeadNav";
import HeadNavTitle from "@/components/common/headNav/HeadNavTitle";
import HeadNavMore from "@/components/common/headNav/HeadNavMoreItem";
export default {
  name: "mainHeadNav2",
  components: { HeadNavMore, HeadNavTitle, HeadNav },
};
</script>

<style scoped></style>
