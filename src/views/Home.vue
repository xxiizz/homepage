<!--
 * @Author: xz
 * @Date: 2020-09-15 09:30:33
 * @LastEditors: xz
 * @LastEditTime: 2020-09-21 10:08:37
 * @FilePath: \my_homepage\my_homepage\src\views\Home.vue
 * @Description: 首页
-->
<template>
  <div>
    <loading :loading="loading" v-if="!hideLoading"></loading>

    <div v-if="!loading">
      <el-button
        type="primary"
        plain
        round
        class="message_btn"
        @click="$router.push('/message')"
      >给我留言</el-button>

      <el-tooltip class="item" effect="dark" content="页面导航" placement="bottom">
        <div class="nav_btn" @click="showNav=!showNav">
          <i class="el-icon-close" v-if="showNav"></i>
          <i class="el-icon-more" v-else></i>
        </div>
      </el-tooltip>

      <div class="nav_list" :style="showNav?'':'width:0'">
        <el-menu :default-active="activePage">
          <el-menu-item index="0" @click="switchToPage(0)">
            <span class="iconfont nav_list-icon">&#xe56a;</span>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="1" @click="switchToPage(1)">
            <span class="iconfont nav_list-icon">&#xe631;</span>
            <span slot="title">关于我</span>
          </el-menu-item>
          <el-menu-item index="2" @click="switchToPage(2)">
            <span class="iconfont nav_list-icon">&#xe617;</span>
            <span slot="title">对于工作</span>
          </el-menu-item>
          <el-menu-item index="3" @click="switchToPage(3)">
            <span class="iconfont nav_list-icon">&#xe6a1;</span>
            <span slot="title">对于生活</span>
          </el-menu-item>
          <el-menu-item index="4" @click="switchToPage(4)">
            <span class="iconfont nav_list-icon">&#xe607;</span>
            <span slot="title">联系我</span>
          </el-menu-item>
        </el-menu>
      </div>

      <swiper id="swiperBox" v-bind:options="swiperOption" ref="mySwiper">
        <swiper-slide class="swiper-slide">
          <div class="page1">
            <div class="wrap">
              <div class="main">
                <h1 class="main-title">Hi, I'm xz</h1>
                <p>你好，我叫西泽</p>
                <p>很高兴能在茫茫人海中遇到你</p>
                <p>来都来了</p>
                <p>不如...</p>
                <p>来互相认识一下吧？</p>
              </div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide class="swiper-slide">
          <div class="page2">
            <div class="wrap">
              <img
                class="avatar"
                src="https://my-homepage-1302786361.cos.ap-guangzhou.myqcloud.com/images/avatar.jpg"
                alt
              />
              <div :class="scrollToP2?'text fadeIn':'text'">
                <p>幸会！</p>
                <p>西泽是我的本名，这个姓比较少见，提前说明一下..</p>
                <p>96年10月的</p>
                <p>我是一名前端开发工程师，坐标深圳</p>
                <p>闲暇时间会去健身，练了快一年依旧毫无训练痕迹</p>
                <p>工作中比较认真，生活中比较随性（沙雕？）</p>
              </div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide class="swiper-slide">
          <div class="page3">
            <div class="wrap clearfix">
              <div :class="scrollToP3?'text fadeIn':'text'">
                <p>any application that can be written in JavaScript</p>
                <p>willeventually be written in JavaScript -- Atwood’s Law</p>
                <p>作为一名前端开发，我深知前端能做的不止于简单的页面布局</p>
                <p>“大前端”已是未来的趋势</p>
                <p>这个网站的留言后台就是用Node写的</p>
                <p>算是对Atwood’s Law的一个实践吧</p>
                <p>下面是我的技术栈</p>
                <div id="chart"></div>
              </div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide class="swiper-slide">
          <div class="page4">
            <div class="wrap clearfix">
              <div :class="scrollToP4?'text fadeIn':'text'">
                <h3 class="title">To test the limits and break through</h3>
                <p>这是冰雪奇缘主题曲 Let it go 里的一句歌词</p>
                <p>同时也是我对生活的态度</p>
                <p>我是一个闲不下来的人</p>
                <p>只有在不断的test the limits的过程中</p>
                <p>才会进步，最终break through</p>
              </div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide class="swiper-slide">
          <div class="page5">
            <div class="wrap clearfix">
              <div :class="scrollToP5?'text fadeIn':'text'">
                <h3 class="title">Thank for watch</h3>
                <p>如需联系我，可通过如下方式</p>
                <p>或者左下角给我留言</p>
                <div class="btn_list">
                  <div class="btn">
                    <img
                      class="icon"
                      src="https://my-homepage-1302786361.cos.ap-guangzhou.myqcloud.com/images/mail.png"
                      alt
                    />
                    <div class="tip">
                      59931713@qq.com
                      <div class="arrow"></div>
                    </div>
                  </div>
                  <div class="btn">
                    <img
                      class="icon"
                      src="https://my-homepage-1302786361.cos.ap-guangzhou.myqcloud.com/images/wechat.png"
                      alt
                    />
                    <div class="tip">
                      <img
                        src="https://my-homepage-1302786361.cos.ap-guangzhou.myqcloud.com/images/qrcode.png"
                        alt
                      />
                      <div class="arrow"></div>
                    </div>
                  </div>
                  <a target="_blank" href="https://github.com/xxiizz" class="btn">
                    <img
                      class="icon"
                      src="https://my-homepage-1302786361.cos.ap-guangzhou.myqcloud.com/images/github.png"
                      alt
                    />
                    <div class="tip">
                      github
                      <div class="arrow"></div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="copyright">
                <p class="title">Designed and developed by Xz.</p>
                <a target="_blank" href="https://beian.miit.gov.cn/">粤ICP备2020081106号-1</a>
                <div style="width:300px;margin:0 auto;">
                  <a
                    target="_blank"
                    href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030402004078"
                    style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"
                  >
                    <img
                      src="https://my-homepage-1302786361.cos.ap-guangzhou.myqcloud.com/images/beian.png"
                      style="float:left;"
                    />
                    <p
                      style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;"
                    >粤公网安备 44030402004078号</p>
                  </a>
                </div>

                <p class="opensource">ps：这套页面的代码已开源至github，如果有需要，可以去我的github主页查看</p>
              </div>
            </div>
          </div>
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
 
<script>
import loading from "../components/loading";
export default {
  name: "Home",
  components: {
    loading,
  },
  data() {
    return {
      scrollToP5: false,
      scrollToP4: false,
      scrollToP3: false,
      scrollToP2: false,
      count: 0,
      hideLoading: false,
      loading: true,
      activePage: "0",
      showNav: false,
      swiperOption: {
        speed: 600,
        notNextTick: true, //notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        direction: "vertical", //垂直方向移动
        autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
        slidesPerView: 1, //设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
        mousewheel: true, //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
        mousewheelControl: true, //同上
        height: window.innerHeight, // 高度设置，占满设备高度
        observer: true,
        observeSlideChildren: true,
        observeParents: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          bulletElement: "li",
          bulletClass: "my-bullet",
          bulletActiveClass: "my-bullet-active",
        },

        // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
        on: {
          //监听滑动切换事件，返回swiper对象
          slideChange: () => {
            let swiper = this.$refs.mySwiper.swiper;
            this.activePage = swiper.activeIndex.toString();
            if (swiper.activeIndex == 1) {
              this.scrollToP2 = true;
            }
            if (swiper.activeIndex == 2) {
              this.drawChart();
              this.scrollToP3 = true;
            }
            if (swiper.activeIndex == 3) {
              this.scrollToP4 = true;
            }
            if (swiper.activeIndex == 4) {
              this.scrollToP5 = true;
            }
            console.log(swiper.activeIndex); //滑动打印当前索引
          },
        },
      },
    };
  },
  methods: {
    switchToPage(page) {
      this.swiper.slideTo(page, 1000, false);
    },
    preload: function () {
      // 背景图预加载
      let imgs = [
        "https://my-homepage-1302786361.cos.ap-guangzhou.myqcloud.com/images/bg_1.jpg",
        "https://my-homepage-1302786361.cos.ap-guangzhou.myqcloud.com/images/bg_2.jpg",
        "https://my-homepage-1302786361.cos.ap-guangzhou.myqcloud.com/images/bg_3.jpg",
        "https://my-homepage-1302786361.cos.ap-guangzhou.myqcloud.com/images/bg_7.jpg",
        "https://my-homepage-1302786361.cos.ap-guangzhou.myqcloud.com/images/bg_8.jpg",
        "https://my-homepage-1302786361.cos.ap-guangzhou.myqcloud.com/images/bg_10.jpg",
        "https://my-homepage-1302786361.cos.ap-guangzhou.myqcloud.com/images/bg_11.jpg",
      ];
      for (let img of imgs) {
        let image = new Image();
        image.onload = () => {
          this.count++;
          if (this.count == imgs.length) {
            this.loading = false;
            setTimeout(() => {
              this.hideLoading = true;
            }, 1000);
          }
        };
        image.src = img;
      }
    },

    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("chart"));
      // 绘制图表
      myChart.setOption({
        angleAxis: {
          max: 100,
          startAngle: 30,
          splitLine: {
            show: false,
          },
        },
        radiusAxis: {
          type: "category",
          data: ["掌握程度"],
          z: 10,
        },
        polar: {},
        series: [
          {
            type: "bar",
            data: [90],
            coordinateSystem: "polar",
            name: "html",
            color: "#e1480e",
            itemStyle: {
              borderColor: "white",
              borderWidth: 1,
            },
          },
          {
            type: "bar",
            data: [90],
            coordinateSystem: "polar",
            name: "css",
            color: "#3d97e2",
            itemStyle: {
              borderColor: "white",
              borderWidth: 1,
            },
          },
          {
            type: "bar",
            data: [90],
            coordinateSystem: "polar",
            name: "javaScript",
            color: "#fcd400",
            itemStyle: {
              borderColor: "white",
              borderWidth: 1,
            },
          },
          {
            type: "bar",
            data: [85],
            coordinateSystem: "polar",
            name: "Vue",
            color: "#41b883",
            itemStyle: {
              borderColor: "white",
              borderWidth: 1,
            },
          },
          {
            type: "bar",
            data: [80],
            coordinateSystem: "polar",
            name: "React",
            color: "#61dafb",
            itemStyle: {
              borderColor: "white",
              borderWidth: 1,
            },
          },
          {
            type: "bar",
            data: [80],
            coordinateSystem: "polar",
            name: "小程序",
            color: "#07c160",
            itemStyle: {
              borderColor: "white",
              borderWidth: 1,
            },
          },
          {
            type: "bar",
            data: [70],
            coordinateSystem: "polar",
            name: "Node",
            color: "#8cc84c",
            itemStyle: {
              borderColor: "white",
              borderWidth: 1,
            },
          },
        ],
        legend: {
          show: true,
          data: ["html", "css", "javaScript", "Vue", "React", "小程序", "Node"],
        },
      });
    },
  },
  created() {
    // 预加载图片
    this.preload();
    // 统计新访客
    this.$ajax.post('message/new_visitor').then(res=>{
      console.log(res)
    })
  },
  computed: {
    swiper() {
      // 获取swiper实例
      return this.$refs.mySwiper.swiper;
    },
  },
};
</script>
 
<style lang='less' scoped>
.fadeIn {
  animation: fadeInUp 1.2s ease 300ms;
  animation-fill-mode: forwards;
}
.page1 {
  background: url("https://my-homepage-1302786361.cos.ap-guangzhou.myqcloud.com/images/bg_2.jpg")
    center center no-repeat;
  background-size: 100%;
  width: 100%;
  height: 100%;
  @keyframes changeBGimg {
    0% {
      background: url("https://my-homepage-1302786361.cos.ap-guangzhou.myqcloud.com/images/bg_2.jpg")
        center center no-repeat;
      background-size: 100%;
    }
    33% {
      background: url("https://my-homepage-1302786361.cos.ap-guangzhou.myqcloud.com/images/bg_1.jpg")
        center center no-repeat;
      background-size: 100%;
    }
    66% {
      background: url("https://my-homepage-1302786361.cos.ap-guangzhou.myqcloud.com/images/bg_3.jpg")
        center center no-repeat;
      background-size: 100%;
    }
    100% {
      background: url("https://my-homepage-1302786361.cos.ap-guangzhou.myqcloud.com/images/bg_2.jpg")
        center center no-repeat;
      background-size: 100%;
    }
  }
  animation: changeBGimg 10s infinite 2.5s;
  .wrap {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .main {
      padding: 20px;
      opacity: 0;
      width: 600px;
      height: 250px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.3);
      box-shadow: 0 0 50px #111;
      animation: fadeInUp 1.2s ease 1000ms;
      animation-fill-mode: forwards;
      transition: 600ms;
      text-align: center;
      .main-title {
        font-family: netsrak;
        cursor: default;
        transition: 600ms;
      }
      p {
        font-family: youzai;
        font-size: 30px;
        line-height: 42px;
        cursor: default;
        transition: 600ms;
      }
    }
    .main:hover {
      padding: 30px;
      background: rgba(255, 255, 255, 0.8);
      p {
        font-size: 35px;
      }
      .main-title {
        font-size: 35px;
      }
    }
  }
}

.page2 {
  background: url("https://my-homepage-1302786361.cos.ap-guangzhou.myqcloud.com/images/bg_8.jpg")
    center center no-repeat;
  background-size: 100%;
  width: 100%;
  height: 100%;
  .wrap {
    width: 1280px;
    height: 100%;
    margin: 0 auto;
    position: relative;
    .avatar {
      position: absolute;
      width: 200px;
      height: 200px;
      left: 48%;
      top: 15%;
      transform: translate(-50%);
      border-radius: 50%;
      transition: 500ms;
    }
    .avatar:hover {
      box-shadow: 0 0 30px #fff;
    }
    .text {
      opacity: 0;
      position: absolute;
      top: 410px;
      left: 400px;
      color: white;
      font-size: 20px;
      line-height: 45px;
      text-align: center;
    }
  }
}

.page3 {
  background: url("https://my-homepage-1302786361.cos.ap-guangzhou.myqcloud.com/images/bg_7.jpg")
    center center no-repeat;
  background-size: 100%;
  width: 100%;
  height: 100%;
  .wrap {
    width: 1280px;
    margin: 0 auto;
    height: 100%;
    position: relative;
    #chart {
      width: 450px;
      height: 450px;
      margin: 30px auto;
    }
    .text {
      opacity: 0;
      font-size: 24px;
      text-align: center;
      width: 690px;
      padding: 20px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.3);
      font-weight: bold;
      transition: 600ms;
      margin: 50px auto;
      color: #444;
      p {
        padding: 5px 0;
      }
    }
    .text:hover {
      color: #111;
      background: rgba(255, 255, 255, 0.7);
    }
  }
}

.page4 {
  background: url("https://my-homepage-1302786361.cos.ap-guangzhou.myqcloud.com/images/bg_11.jpg")
    center center no-repeat;
  background-size: 100%;
  width: 100%;
  height: 100%;
  .wrap {
    width: 1280px;
    height: 100%;
    margin: 0 auto;
    .text {
      margin: 200px auto 0;
      opacity: 0;
      padding: 30px;
      width: 700px;
      background-color: rgba(0, 0, 0, 0.2);
      color: white;
      border-radius: 20px;
      box-shadow: 0 0 10px white;
      transition: 600ms;
      .title {
        font-size: 36px;
        font-family: netsrak;
        text-align: center;
        margin: 30px 0;
      }
      p {
        font-size: 28px;
        text-align: center;
        letter-spacing: 1px;
      }
    }
    .text:hover {
      padding: 40px;
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
}

.page5 {
  background: url("https://my-homepage-1302786361.cos.ap-guangzhou.myqcloud.com/images/bg_10.jpg")
    center center no-repeat;
  background-size: 100%;
  width: 100%;
  height: 100%;
  .wrap {
    width: 1280px;
    height: 100%;
    position: relative;
    margin: 0 auto;
    .text {
      margin: 200px auto 0;
      opacity: 0;
      padding: 30px;
      text-align: center;
      .title {
        font-family: netsrak;
        font-size: 40px;
        margin-bottom: 20px;
      }
      p {
        font-size: 24px;
      }
      .btn_list {
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        .btn {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background-color: rgba(0, 0, 0, 0.2);
          position: relative;
          transition: 300ms;
          .icon {
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -40px;
            margin-left: -40px;
            transition: 300ms;
            width: 80px;
            height: 80px;
          }
          .tip {
            position: absolute;
            padding: 10px;
            top: 100%;
            left: 50%;
            transform: translate(-50%, 6px);
            border-radius: 5px;
            background-color: rgba(0, 0, 0, 0.1);
            color: #777;
            opacity: 0;
            transition: 300ms;
            img {
              width: 200px;
              height: 200px;
            }
            .arrow {
              position: absolute;
              left: 50%;
              top: 0;
              transform: translate(-50%, -12px);
              width: 0;
              height: 0;
              border: 6px solid transparent;
              border-bottom-color: rgba(0, 0, 0, 0.1);
            }
          }
        }
        .btn:hover {
          background-color: rgba(0, 0, 0, 0.7);
          .tip {
            opacity: 1;
          }
        }
      }
    }
    .copyright {
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translate(-50%);
      text-align: center;
      .title {
        text-align: center;
        font-size: 18px;
        font-family: netsrak;
        color: #777;
        margin-bottom: 20px;
      }
      a {
        font-size: 14px;
        color: #939393;
        padding: 5px;
      }
      .opensource {
        font-size: 14px;
        color: #939393;
      }
    }
  }
}

.nav_btn {
  position: fixed;
  top: 50px;
  right: 50px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border-radius: 50%;
  font-size: 35px;
  position: absolute;
  cursor: pointer;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.2);
  background: transparent;
  color: #ddd;
  z-index: 101;
  transition: 0.6s;
}
.nav_btn:hover {
  background: #409eff;
}
.nav_list {
  padding-top: 300px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: white;
  overflow: hidden;
  transition: 0.6s;
  width: 300px;
  .nav_list-icon {
    font-size: 18px;
    display: inline-block;
    width: 30px;
    line-height: 100%;
  }
}
.message_btn {
  position: fixed;
  left: 50px;
  bottom: 50px;
  z-index: 99;
}
</style>

<style lang="less">
@keyframes shadowFadeIn {
  from {
    box-shadow: 0 0 0 0 #409eff;
  }
  to {
    box-shadow: 0 0 0 10px rgba(37, 143, 184, 0);
  }
}
.my-bullet {
  width: 8px;
  height: 8px;
  border: 3px solid #ddd;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  margin: 20px;
}
.my-bullet-active {
  background-color: #409eff;
  animation: shadowFadeIn 1.2s ease infinite;
}
</style>
