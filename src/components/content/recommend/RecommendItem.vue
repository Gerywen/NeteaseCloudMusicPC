<template>
  <div class="recommend-item">
    <ul class="recommend-item-list">
      <li v-for="(item, index) in recommendList" :key="index">
        <div class="u-cover">
          <img :src="item.picUrl" alt="" />
          <a href="" :title="item.name" class="msk"></a>
          <div class="bottom">
            <a class="icon-play" title="播放" href="javascript:;"></a>
            <span class="icon-headset"></span>
            <span class="nb">{{item.playCount}}</span>
          </div>
        </div>
        <p class="dec">
          <a href="" :title="item.name" class="tit">{{item.name}}</a>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RecommendItem",
  props: {
    recommendList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    // playCount(){
    //   return
    // }
  }
};
</script>

<style scoped>
.recommend-item-list {
  height: 468px;
  overflow: hidden;
  margin: 20px 0 0 -42px;
}
.recommend-item .recommend-item-list li {
  width: 140px;
  height: 204px;
  padding-left: 42px;
}
.recommend-item-list li {
  float: left;
  display: inline-block;
  box-sizing: content-box;
  overflow: hidden;
  padding: 0 0 30px 50px;
  line-height: 1.4;
}
.u-cover {
  position: relative;
  display: block;
}
.u-cover img {
  display: block;
  width: 100%;
  height: 100%;
}
.u-cover .msk {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("~assets/img/coverall.png") no-repeat 0 0;
}
.u-cover .bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 27px;
  color: #cccccc;
}
.u-cover .bottom {
  background: url("~assets/img/coverall.png") no-repeat 0 -537px;
}
.u-cover .icon-play {
  display: inline-block;
  position: absolute;
  right: 10px;
  bottom: 5px;
  width: 16px;
  height: 17px;
}
.u-cover .icon-play {
  background: url("~assets/img/iconall.png") no-repeat 0 0;
}
.u-cover .icon-headset {
  float: left;
  width: 14px;
  height: 11px;
  margin: 9px 5px 9px 10px;
  display: inline-block;
}
.u-cover .icon-headset {
  background: url("~assets/img/iconall.png") no-repeat 0 -24px;
}
.u-cover .nb {
  float: left;
  font-size: 12px;
  margin: 7px 0 0 0;
}
.recommend-item-list li .dec {
  margin: 8px 0 3px;
  font-size: 14px;
}
.recommend-item-list li p {
  width: 100%;
}
.recommend-item-list li .tit {
  font-size: 14px;
  display: inline-block;
  max-width: 100%;
  vertical-align: middle;
  color: #000;
}
</style>
