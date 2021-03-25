<template>
  <div class="login" v-if="modelStatu">
    <div class="zbar">
      <div class="title">手机号登录</div>
      <span class="close" @click="closeModel">x</span>
    </div>
    <div class="zcnt">
      <div class="lyct">
        <div class="n-log2">
          <div class="j-mob">
            <input type="phone" placeholder="请输入手机号">
          </div>
          <div class="f-mgt10">
            <input type="password" placeholder="请输入密码">
          </div>
          <div class="f-mgt20">
            <el-button>登录</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginModel",
  props:{
    modelStatu:{
      type:Boolean,
      default: false
    }
  },
  created() {
    console.log(this.modelStatu);
  },
  methods:{
    closeModel() {
      this.modelStatu = !this.modelStatu;
    }
  }
};
</script>

<style scoped>
.login {
  position: absolute;
  top: 312px;
  left: 695px;
  z-index: 9998;
  width: 530px;
  border-radius: 4px;
  box-shadow: 0 5px 16px rgb(0 0 0 / 80%);
  border: none;
}
.zbar {
  position: relative;
  z-index: 10;
  border-bottom: 1px solid #191919;
  border-radius: 4px 4px 0;
  background: #2d2d2d;
  cursor: move;
  user-select: none;
}
.title {
  padding-right: 45px;
  margin: 0;
  height: 38px;
  line-height: 38px;
  padding-left: 18px;
  border-radius: 3px 3px 0 0;
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  background-position: 50% 0;
}
.zcnt {
  padding: 0;
  border: 1px solid #878787;
  border-width: 0 1px 1px;
  border-radius: 0 0 4px 4px;
  background: #fff;
}
.n-log2 {
  padding: 30px 0 43px;
  width: 220px;
  margin: 0 auto;
}
.n-log2 input {
  width: 100%;
  height: 30px;
  padding-left: 10px;
  border: 1px solid #999999;
  border-radius: 3px;
  font-size: 12px;
}
.f-mgt10 {
  margin-top: 10px;
}
.f-mgt20 {
  margin-top: 20px;
}
.el-button {
  width: 220px;
  height: 35px;
  font-size: 12px;
}
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
</style>
