<!--
 * @Author: xz
 * @Date: 2020-09-15 09:54:45
 * @LastEditors: xz
 * @LastEditTime: 2020-09-21 16:59:06
 * @FilePath: \my_homepage\my_homepage\src\views\Message.vue
 * @Description: 留言页
-->
<template>
  <div>
    <div class="info">
      <div class="info_board">
        <div class="info_board_title">
          <p>欢迎</p>
          <p>很高兴可以在这个网站运行的</p>
          <p>第{{time|timeFormat}}遇见你</p>
          <p>你是运行以来的第{{visitor_count}}位访客</p>
          <p>在这里你可以畅所欲言</p>
          <p>或者看看别人有什么想法</p>
        </div>
        <hr />
        <div class="info_board_form">
          <el-form label-position="top" :model="messageForm">
            <el-form-item label="请告诉我该如何称呼你">
              <el-input v-model="messageForm.name" placeholder="请输入你的昵称"></el-input>
            </el-form-item>
            <el-form-item label="方便的话可以留个邮箱">
              <el-input v-model="messageForm.email" placeholder="请输入你的邮箱"></el-input>
            </el-form-item>
            <el-form-item label="然后告诉我你想说什么吧">
              <el-input
                type="textarea"
                v-model="messageForm.content"
                placeholder="你也来说两句吧！在此输入留言内容"
              ></el-input>
            </el-form-item>
            <p class="tip">隐私说明：你的昵称以及留言内容会被公开展示，但邮箱不会</p>
            <el-button
              type="primary"
              plain
              class="btn"
              @click="submitMessage"
              :disabled="submiting"
            >给我留言</el-button>
          </el-form>
        </div>
      </div>
    </div>
    <div class="list">
      <el-button type="primary" plain @click="$router.push('/')">返回</el-button>
      <h3 class="title">留言板</h3>
      <p class="title">已有 {{allMessageList.length}} 人留言</p>
      <div class="message">
        <div v-for="(item,index) in showMessageList" :key="index" class="message_item">
          <p class="message_item_name">{{item.name}}</p>
          <p
            class="message_item_info"
          >{{item.time | dateFormat}}{{item.city?' 在 ':''}}{{item.city}} 说：</p>
          <p class="message_item_content">{{item.content}}</p>
          <div class="message_item_list">
            <div class="mil_item">
              <img
                class="mil_item_img"
                @click="agree(item)"
                src="https://my-homepage-1302786361.cos.ap-guangzhou.myqcloud.com/images/flower.png"
                alt
              />
              <p class="mil_item_text">言之有理？送一束花</p>
              <p class="mil_item_text">(收到的鲜花数：{{item.agree}})</p>
            </div>
            <div class="mil_item">
              <img
                class="mil_item_img"
                @click="disagree(item)"
                src="https://my-homepage-1302786361.cos.ap-guangzhou.myqcloud.com/images/tomato.png"
                alt
              />
              <p class="mil_item_text">觉得不对？扔个番茄</p>
              <p class="mil_item_text">(被扔的番茄数：{{item.disagree}})</p>
            </div>
          </div>
        </div>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="allMessageList.length"
          @current-change="handleChange"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "message",
  data() {
    return {
      messageForm: {
        name: "",
        email: "",
        content: "",
      },
      loading: true,
      submiting: false,
      time: 0,
      start_date: "",
      visitor_count: 0,
      allMessageList: [],
      showMessageList: [],
    };
  },
  methods: {
    handleChange(current) {
      this.showMessageList = this.allMessageList.slice(
        (current - 1) * 10,
        current * 10
      );
    },
    agree(item) {
      this.$ajax
        .post("message/agree", {
          id: item.id,
        })
        .then((res) => {
          if (res.data.msg == "agree_success") {
            item.agree++;
          }
        });
    },
    disagree(item) {
      this.$ajax
        .post("message/disagree", {
          id: item.id,
        })
        .then((res) => {
          if (res.data.msg == "disagree_success") {
            item.disagree++;
          }
        });
    },
    submitMessage() {
      if (this.messageForm.name == "" || this.messageForm.content == "") {
        return this.$message(
          "给我留言的话，至少要告诉我你的昵称和留言的内容哦"
        );
      }
      if (this.messageForm.email != "") {
        if (
          !/^([a-zA-Z]|[0-9])(\w)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(
            this.messageForm.email
          )
        ) {
          return this.$message.warning(
            "你的邮箱格式好像有点问题，要不要再检查一下"
          );
        }
      }
      this.submiting = true;
      this.$ajax
        .post("message/comment", {
          ...this.messageForm,
        })
        .then((res) => {
          this.submiting = false;
          if (res.data.msg == "leave_message_success") {
            this.$message.success("留言成功，后台审核通过后会展示在留言板");
            this.messageForm.name = "";
            this.messageForm.email = "";
            this.messageForm.content = "";
          }
        });
    },
  },
  created() {
    // 获取回复列表以及服务开始运行时间
    Promise.all([
      this.$ajax.get("message/server_info"),
      this.$ajax.get("message/list"),
    ]).then((res) => {
      // 根据服务开始运行时间确定运行了多久
      this.start_date = res[0].data.start_date;
      this.visitor_count = res[0].data.visitor_count;
      const start_date = new Date(res[0].data.start_date).getTime();
      const date = new Date().getTime();
      const time = date - start_date;
      this.time = time;
      setInterval(() => {
        this.time += 1000;
      }, 1000);
      this.allMessageList = res[1].data.data;
      this.showMessageList = res[1].data.data.slice(0, 10);
      this.loading = false;
    });
  },
  filters: {
    // 将留言时间格式化
    dateFormat: (time) => {
      const date = new Date(time);
      return `${date.getFullYear()}年 ${
        date.getMonth() + 1
      }月 ${date.getDate()}日`;
    },
    // 将运行时间格式化
    timeFormat: (time) => {
      const totalSec = time / 1000;
      let s = Math.floor(totalSec % 60);
      let m = Math.floor(totalSec / 60);
      let h = 0;
      if (m >= 60) {
        h = Math.floor(m / 60);
        m = Math.floor(m % 60);
      }
      let d = 0;
      if (h >= 24) {
        d = Math.floor(h / 24);
        h = Math.floor(h % 24);
      }
      return `${d}天${h}小时${m}分钟${s}秒`;
    },
  },
};
</script>

<style lang='less' scoped>
.list {
  background-color: #f1f3f7;
  position: absolute;
  min-width: 600px;
  right: 0;
  left: 700px;
  min-height: 100%;
  padding: 30px;
  .title {
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 40px;
  }
  h3.title {
    font-size: 45px;
    margin-bottom: 20px;
  }
  .message {
    width: 600px;
    margin: 0 auto;
    .message_item {
      padding: 20px;
      border: 1px solid #eee;
      border-radius: 10px;
      background-color: white;
      margin-bottom: 20px;
      .message_item_name {
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 10px;
      }
      .message_item_info {
        font-size: 14px;
        color: #999;
        margin-bottom: 15px;
      }
      .message_item_content {
        font-size: 20px;
        color: #999;
        margin-bottom: 40px;
        white-space: pre-wrap;
      }
      .message_item_list {
        display: flex;
        align-items: center;
        justify-content: space-around;
        .mil_item {
          text-align: center;
          .mil_item_img {
            width: 40px;
            cursor: pointer;
          }
          .mil_item_text {
            font-size: 14px;
            color: #999;
          }
        }
      }
    }
  }
}
.info {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 700px;
  background: url("https://my-homepage-1302786361.cos.ap-guangzhou.myqcloud.com/images/bg_12.jpg")
    center center;
  background-size: 100% 100%;
  transition: 1s;
  .info_board {
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 20px;
    padding: 20px;
    .info_board_title {
      font-size: 20px;
      font-family: youzai;
    }
    .info_board_form {
      text-align: center;
      margin-top: 20px;
      .tip {
        font-size: 14px;
        color: #777;
      }
      .btn {
        margin: 20px auto 0;
      }
    }
  }
}
.info:hover {
  background-size: 110% 110%;
}
</style>