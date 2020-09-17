<!--
 * @Author: xz
 * @Date: 2020-09-16 09:14:18
 * @LastEditors: xz
 * @LastEditTime: 2020-09-16 11:16:52
 * @FilePath: \my_homepage\my_homepage\src\components\loading.vue
 * @Description: 加载组件
-->
<template>
  <div :class="loading?'wrap':'wrap fadeOut'">
    <img
      src="https://my-homepage-1302786361.cos.ap-guangzhou.myqcloud.com/images/loading.gif"
      class="loading"
      alt
    />
    <p class="text">{{text}}</p>
  </div>
</template>

<script>
export default {
  props: ["loading"],
  data() {
    return {
      text: "加载中",
    };
  },
  created() {
    let count = 0;
    setInterval(() => {
      if (count >= 3) {
        count = 0;
        this.text = "加载中";
      } else {
        count++;
        this.text += ".";
      }
    }, 500);
  },
};
</script>

<style scoped>
@keyframes fadeout {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    display: none;
  }
}
.fadeOut {
  animation: fadeout 1s;
  animation-fill-mode: forwards;
}
.wrap {
    position: fixed;
    z-index: 10000;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -80%);
}
.text {
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-40%, -50%);
  color: #999;
  font-size: 28px;
  font-family: youzai;
}
</style>