<template>
  <!--  轮播图-->
  <div class="carousel">
    <div class="wrap">
      <div class="banner-left">
        <el-carousel :interval="5000" height="285px" arrow="always">
          <el-carousel-item v-for="(item, index) in banner" :key="index">
            <a :href="item.url" target="_blank">
              <img :src="item.imageUrl" alt="" />
            </a>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.carousel {
  width: 100%;
  background-image: linear-gradient(to bottom right, black, rebeccapurple);
}
.wrap {
  width: 1100px;
  margin: 0 auto;
}
.el-carousel__item img {
  height: 285px;
}
.el-carousel__container{
  bottom: 0;
  left: 35%;
  transform: translateX(-50%);
}
</style>
