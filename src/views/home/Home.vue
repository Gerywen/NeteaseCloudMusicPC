<template>
  <div class="home">
    <nav-menu :menu-list="menuList" />
    <carousel :banner="bannerList" />
  </div>
</template>

<script>
import NavMenu from "@/components/content/NavMenu/NavMenu";
import Carousel from "@/components/content/Carousel/Carousel";
import { baseUrl } from "@/network/axios";
import { getHomeBanner } from "@/network/home";
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
      bannerList: [],
    };
  },
  created() {
    this._getHomeBanner();
  },
  methods: {
    _getHomeBanner() {
      getHomeBanner().then((res) => {
        // this.bannerList = res.banners;
        let length = res.banners.length;
        let data = res.banners;
        let obj = [];
        for (let i = 0; i < length; i++) {
          switch (data[i].typeTitle) {
            case "数字专辑":
              obj.push({ url: data[i].url, imageUrl: data[i].imageUrl });
              break;
            case "MV":
              obj.push({
                url: baseUrl + "/mv/detail?mvid=" + data[i].targetId,
                imageUrl: data[i].imageUrl,
              });
              break;
            default:
              obj.push({
                url: baseUrl + "/song?id=" + data[i].targetId,
                imageUrl: data[i].imageUrl,
              });
          }
        }
        this.bannerList = obj;
      });
    },
  },
};
</script>
<style scoped></style>
