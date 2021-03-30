<template>
  <div class="swiper">
    <div class="swiper-content">
      <a href="javascript:void (0);" @click="left" class="click-flag pre"></a>
      <a href="javascript:void (0);" @click="right" class="click-flag nxt"></a>
      <div class="swiper-content-ul f-pr">
        <ul class="f-cb">
          <li v-for="(item, index) in weekData" :key="index" class="liItme">
            <div class="u-cover u-cover-alb1">
              <img :src="item.blurPicUrl" alt="图片1" />
              <a href="" class="msk"></a>
              <a href="" class="icon-play"></a>
            </div>
            <p class="f-thide">{{ item.name }}</p>
            <p class="tit f-thide">
              <a href="#" v-for="(art, index1) in item.artists" :key="index1">
                {{ item.artists.length === 1 ? art.name : art.name + "/" }}</a
              >
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Swiper",
  data() {
    return {
      fcb: "",
      fcbWidth: "",
      fcbLiWidth: "",
      currentIndex: 0,
      flag: true,
    };
  },
  props: ["weekData"],
  methods: {
    init() {
      this.fcb = document.querySelector(".f-cb");
      this.fcbLiWidth = document.querySelector(".liItme").offsetWidth;
      // let first = this.fcb.children[0].cloneNode(true);
      // this.fcb.appendChild(first);
    },
    left() {
      let _that = this;
      this.init();
      if (this.flag) {
        this.flag = false;
        if (this.currentIndex === 0) {
          this.currentIndex = 5;
          this.fcb.style.left = -this.currentIndex * this.fcbLiWidth + "px";
        }
        this.currentIndex--;
        this.animate(
          this.fcb,
          -this.currentIndex * this.fcbLiWidth,
          function () {
            _that.flag = true;
          }
        );
      }
    },
    right() {
      this.init();
      let _that = this;
      if (this.flag) {
        this.flag = false;
        if (this.currentIndex === 4) {
          this.fcb.style.left = 0;
          this.currentIndex = 0;
        }
        this.currentIndex++;
        console.log(this.currentIndex);
        this.animate(
          this.fcb,
          -this.currentIndex * this.fcbLiWidth,
          function () {
            _that.flag = true;
          }
        );
      }
    },

    animate(obj, target, callback) {
      clearInterval(obj.timer);
      obj.timer = setInterval(function () {
        // 步长值写到定时器的里面
        // 把我们步长值改为整数 不要出现小数的问题
        // var step = Math.ceil((target - obj.offsetLeft) / 10);
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft === target) {
          // 停止动画 本质是停止定时器
          clearInterval(obj.timer);
          // 回调函数写到定时器结束里面
          // if (callback) {
          //     // 调用函数
          //     callback();
          // }
          callback && callback();
        }
        // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
        obj.style.left = obj.offsetLeft + step + "px";
      }, 15);
    },
  },
};
</script>
<style scoped>
.swiper {
  position: relative;
  zoom: 1;
  height: 186px;
  margin: 20px 0 37px;
  border: 1px solid #d3d3d3;
}
.swiper .swiper-content {
  height: 184px;
  padding-left: 16px;
  background: #f5f5f5;
  border: 1px solid #fff;
}
.swiper .swiper-content .swiper-content-ul {
  float: left;
  width: 1040px;
  height: 180px;
  overflow: hidden;
}
.f-pr {
  position: relative;
  zoom: 1;
}
.swiper ul {
  position: absolute;
  top: 0;
  width: 9999px;
  margin: 30px 0 0 0;
}
.swiper li {
  float: left;
  display: inline;
  width: 118px;
  height: 150px;
  margin-left: 10px;
  background: url("~assets/img/index.png") no-repeat -260px 100px;
}
.swiper .u-cover {
  position: relative;
  display: block;
  margin-bottom: 7px;
}
.u-cover-alb1 {
  width: 100px;
  height: 100px;
}
.swiper p {
  width: 90%;
  line-height: 18px;
}
.f-thide {
  font-size: 12px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.u-cover img {
  display: block;
  width: 100%;
  height: 100%;
}
.u-cover-alb1 .msk {
  width: 118px;
  height: 100px;
  background: url("~assets/img/coverall.png") no-repeat 0 -570px;
}
.u-cover .msk {
  position: absolute;
  top: 0;
  left: 0;
}
.u-cover-alb1 .icon-play {
  left: 72px;
  width: 22px;
  height: 22px;
  background: url("~assets/img/iconall.png") no-repeat 0 -85px;
}
.u-cover .icon-play {
  float: right;
  position: absolute;
  right: 10px;
  bottom: 5px;
}

.f-cb:after {
  clear: both;
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
}

.swiper .pre,
.swiper .nxt {
  position: absolute;
  top: 71px;
  width: 17px;
  height: 17px;
  z-index: 9999;
}
.swiper .pre {
  left: 1px;
  background: url("~assets/img/index.png") no-repeat -260px -75px;
}
.swiper .nxt {
  right: 1px;
  background: url("~assets/img/index.png") no-repeat -300px -75px;
}
</style>
