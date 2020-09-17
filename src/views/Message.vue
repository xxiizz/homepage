<!--
 * @Author: xz
 * @Date: 2020-09-15 09:54:45
 * @LastEditors: xz
 * @LastEditTime: 2020-09-15 12:04:16
 * @FilePath: \my_homepage\my_homepage\src\views\Message.vue
 * @Description: 留言页
-->
<template>
  <div class="hello-world">
    <swiper id="swiperBox" v-bind:options="swiperOption" ref="mySwiper">
      <swiper-slide class="swiper-slide" v-for="(item, index) in list" :key="index">
        <div class="page">
          <h3>第{{item}}页</h3>
        </div>
      </swiper-slide>  
       <div class="swiper-pagination"  slot="pagination">
       1223
       </div> 
    </swiper>
  </div>
</template>
 
<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      list: [], //轮换列表
      swiperOption: {
        notNextTick: true, //notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        direction: "vertical", //水平方向移动
        setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
        autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
        slidesPerView: 1, //设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
        mousewheel: true, //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
        mousewheelControl: true, //同上
        height: window.innerHeight, // 高度设置，占满设备高度
        resistanceRatio: 0, //抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。本业务需要
        observeParents: true, //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新
                pagination: {
          el: '.swiper-pagination',
          type:'custom',
          clickable: true
        },

        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        //debugger: true,

        // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
        on: {
          //监听滑动切换事件，返回swiper对象
          slideChange: () => {
            let swiper = this.$refs.mySwiper.swiper;
            console.log(swiper.activeIndex); //滑动打印当前索引
            if (swiper.activeIndex === this.list.length - 1) {
              //到最后一个加载更多数据
              let newList = [];
              let listLength = this.list.length;
              for (let i = 0; i < 10; i++) {
                newList.push(listLength + i);
              }
              this.list = this.list.concat(newList);
            }
          },
        },
      },
    };
  },
  created() {
    //从后台获取数据
    this.list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  },
  // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    // this.swiper.slideTo(3, 1000, false); //手动跳到指定页
  },
};
</script>
 
<style scoped>
.swiper-slide {
  font-size: 24px;
  text-align: center;
  line-height: 100px;
}
.swiper-slide:nth-child(2n) {
  background: skyblue;
}
.swiper-slide:nth-child(2n-1) {
  background: seashell;
}
</style>
