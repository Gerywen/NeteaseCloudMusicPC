<template>
  <div class="home">
    <nav-menu :menu-list="menuList" />
    <carousel :banner="bannerList" />
    <div class="content">
      <!--      <head-nav :title="hotRecommend" />-->
      <main-head-nav />
      <hot-recommend></hot-recommend>
      <main-head-nav2 />
      <swiper :week-data="weekData" />
    </div>
  </div>
</template>

<script>
import NavMenu from "@/components/content/navMenu/NavMenu";
import Carousel from "@/components/content/carousel/Carousel";
import HotRecommend from "@/components/content/recommend/HotRecommend";
// import HeadNav from "@/components/common/headNav/HeadNav";
import mainHeadNav from "@/components/content/mainHeadNav/MainHeadNav";
import MainHeadNav2 from "@/components/content/mainHeadNav/MainHeadNav2";
import { baseUrl } from "@/network/axios";
import { getHomeBanner, getTopAlbum } from "@/network/home";
import { menuList } from "@/common/menuJson";
import Swiper from "@/components/content/Swiper/Swiper";
export default {
  name: "Home",
  components: {
    Swiper,
    NavMenu,
    Carousel,
    HotRecommend,
    mainHeadNav,
    MainHeadNav2,
  },
  data() {
    return {
      menuList: menuList,
      bannerList: [],
      hotRecommend: "热门推荐",
      weekData: [],
    };
  },
  created() {
    this._getHomeBanner();
    this._getTopAlbum();
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
    _getTopAlbum() {
      getTopAlbum().then((res) => {
        this.weekData = res.albums;
      });
    },
  },
};
</script>
<style scoped>
.content {
  width: 1100px;
  margin: 0 auto;
  padding: 20px 20px 40px;
  background-color: #fff;
  border: 1px solid #cccccc;
}
</style>
