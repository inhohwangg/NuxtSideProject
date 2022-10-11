<template>
  <div class="finish-wrap">
    <div class="container">
      <strong class="text-style" style="cursor: pointer" @click="velogClick"
        >velog</strong
      >
      <div class="container2">
        <div class="btn-box">
          <b-icon
            icon="search"
            style="margin-right: 15px; cursor: pointer"
          ></b-icon>
          <button class="btn-write-style">
            <strong style="font-size: 16px"
              ><nuxt-link to="/write">새 글 작성</nuxt-link></strong
            >
          </button>
          <button class="btn-style">
            <strong style="font-size: 16px"
              ><nuxt-link to="/login">로그인</nuxt-link></strong
            >
          </button>
        </div>
      </div>
    </div>
    <div v-for="a in postRead" :key="a" class="container3">
      {{ a.title }} {{ a.content }} {{ a.writer }}
      {{ a.createdAt | formatDate }}
    </div>
  </div>
</template>

<script>
import { IconsPlugin } from "bootstrap-vue";
import moment from "moment";
import dayjs from "dayjs";
import axios from "axios";
export default {
  components: {
    dayjs,
  },
  data() {
    return {
      title: "",
      content: "",
      postRead: "",
      client_id: process.env.KAKAO_AUTH_KEY,
      redirect_uri: process.env.REDIRECT_URI,
    };
  },
  mounted() {
    this.mainPageRequire();
  },
  computed: {
    kakaoLoginLink() {
      return `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.VUE_APP_KAKAO_AUTH_KEY}&redirect_uri=${this.redirect_uri}&response_type=code`;
    },
  },
  methods: {
    velogClick() {
      window.location.reload();
    },
    // 게시글 작성하기
    postWrite() {
      const host = "http://13.125.96.150:3000/api/post/write";
      let token = localStorage.getItem("access_token");
      let data = {
        title: this.title,
        content: this.content,
      };
      axios
        .post(host, data, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          let token = localStorage.getItem("access_token");
          localStorage.setItem("access_token", token);
          window.location.reload();
          console.log(res.data);
          console.log("게시글 작성 성공");
        })
        .catch((error) => {
          console.log(error, "게시글 작성 실패!");
        });
    },
    //전체 게시글 가져오기
    mainPageRequire() {
      const host = "http://13.125.96.150:3000/api/post/main";
      let token = localStorage.getItem("access_token");
      axios
        .get(host)
        .then((res) => {
          console.log(res.data.post);
          this.postRead = res.data.post;
          console.log("게시글 조회성공");
        })
        .catch((error) => {
          console.log(error);
          console.log("게시글 조회 실패...!");
        });
    },
  },
};
</script>

<style>
div {
  box-sizing: border-box;
}
.finish-wrap {
  background-color: #eee;
  height: 100%;
  position: fixed;
  width: 100%;
}
.container {
  width: 90%;
  margin-top: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}
.text-style {
  font-size: 28px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  letter-spacing: 1px;
}
.container2 {
  width: 10%;
  float: right;
}
.btn-style {
  width: 85px;
  padding: 5px;
  color: white;
  background: black;
  border-radius: 19px;
  cursor: pointer;
  text-decoration: none;
}
.container3 {
  display: flex;
  float: left;
  width: 320px;
  height: 332px;
  margin-left: 50px;
  margin-top: 60px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  background: white;
  border-radius: 5px;
}
.container3:hover {
  box-shadow: 0.1px 0.1px 0.1px 1px #eee;
  transform: translateY(-7px);
}
.btn-write-style {
  width: 110px;
  padding: 5px;
  border-radius: 19px;
  cursor: pointer;
}
.btn-box {
  width: 320px;
  height: 20px;
  margin-right: auto;
  margin-left: -40px;
}
</style>