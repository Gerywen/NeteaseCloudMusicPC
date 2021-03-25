<template>
  <div class="home">
    <nav-menu :menu-list="menuList" />
    <carousel />
  </div>
</template>

<script>
import NavMenu from "@/components/content/NavMenu/NavMenu";
import Carousel from "@/components/content/Carousel/Carousel";
import { menuList } from "@/common/menuJson";
export default {
  name: "Home",
  components: {
    NavMenu,
    Carousel,
  },
  data() {
    return {
      menuList: menuList,
    };
  },
};
</script>
<style scoped></style>
