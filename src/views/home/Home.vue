<template>
  <div class="home">
    <nav-menu :menu-list="menuList" />
  </div>
</template>

<script>
import NavMenu from "@/components/content/NavMenu/NavMenu";

import { menuList } from "@/common/menuJson";
export default {
  name: "Home",
  components: {
    NavMenu,
  },
  data() {
    return {
      menuList: menuList,
    };
  },
};
</script>
