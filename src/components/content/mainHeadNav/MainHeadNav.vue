<template>
  <head-nav>
    <head-nav-title>
      <a href="#" slot="head">热门推荐</a>
    </head-nav-title>
    <head-nav-item>
      <a slot="li-word" href="#">华语</a>
      <span slot="li-line">|</span>
    </head-nav-item>
    <head-nav-item>
      <a slot="li-word" href="#">流行</a>
      <span slot="li-line">|</span>
    </head-nav-item>
    <head-nav-item>
      <a slot="li-word" href="#">摇滚</a>
      <span slot="li-line">|</span>
    </head-nav-item>
    <head-nav-item>
      <a slot="li-word" href="#">民谣</a>
      <span slot="li-line">|</span>
    </head-nav-item>
    <head-nav-item>
      <a slot="li-word" href="#">电子</a>
      <span slot="li-line">|</span>
    </head-nav-item>
    <head-nav-more-item>
      <a href="#" slot="more">更多</a>
      <i slot="icon" class="icon"></i>
    </head-nav-more-item>
  </head-nav>
</template>

<script>
import HeadNav from "@/components/common/headNav/HeadNav";
import HeadNavItem from "@/components/common/headNav/HeadNavCategoryItem";
import HeadNavTitle from "@/components/common/headNav/HeadNavTitle";
import HeadNavMoreItem from "@/components/common/headNav/HeadNavMoreItem";
export default {
  name: "mainHeadNav",
  components: {
    HeadNav,
    HeadNavItem,
    HeadNavTitle,
    HeadNavMoreItem,
  },
};
</script>

<style scoped>

</style>
