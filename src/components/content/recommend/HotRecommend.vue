<template>
  <div class="hot">
    <recommend-item :recommend-list="recommendList"/>
  </div>
</template>

<script>
import RecommendItem from "@/components/content/recommend/RecommendItem";
import { getHotRecommend } from "@/network/home";

export default {
  name: "HotRecommend",
  data() {
    return {
      recommendList: [],
    };
  },
  components: {
    RecommendItem,
  },
  created() {
    this._getHotRecommend();
  },
  methods: {
    _getHotRecommend() {
      getHotRecommend().then((res) => {
        this.recommendList = res.result;
      });
    },
  },
};
</script>

<style scoped>
.hot {
  display: flex;
}
</style>
