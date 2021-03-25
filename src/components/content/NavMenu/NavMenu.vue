<template>
  <div class="wrap">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#242424"
      text-color="#ffffff"
    >
      <h1 id="logo">
        <a href="#">网易云音乐</a>
      </h1>
      <el-menu-item @click="selectIndex(index)" v-for="(item, index) in menuList" :index="item.index" :key="index">{{ item.name }}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  data() {
    return {
      activeIndex: "1",
    };
  },
  props: {
    menuList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    selectIndex(index) {
      console.log("CurrentIndex is " + index);
    }
  }
};
</script>

<style scoped>
.wrap {
  position: relative;
  width: 100%;
  height: 60px;
  z-index: 1000;
  box-sizing: border-box;
  background-color: #242424;
  color: #fff;
  border-bottom: 1px solid #000;
}
#logo {
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  width: 157px;
  height: 100%;
  margin: 0 20px 0 0;
  text-indent: -9999px;
  background: url("../../../assets/img/topbar.png") repeat 0 -8px;
  cursor: pointer;
}

.el-menu--horizontal {
  width: 1100px;
  margin: 0 auto;
}
.el-menu--horizontal:first-child {
  padding-left: 177px;
}
.el-menu-item {
  border-bottom-color: #000 !important;
}
.el-menu--horizontal > .el-menu-item.is-active {
  background-color: #000 !important;
  border-bottom: 0 solid #fff;
  color: #fff !important;
}
.el-menu-item:hover {
  background-color: #000 !important;
}
.el-menu-item:nth-last-of-type(1)::after {
  content: " ";
  position: absolute;
  width: 26px;
  height: 14px;
  top: 10px;
  right: -15px;
  background: url("../../../assets/img/topbar.png") no-repeat -192px 0;
}

</style>
