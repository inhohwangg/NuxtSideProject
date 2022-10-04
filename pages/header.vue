<template>
  <div>
    <div class="container">
      <strong class="text-style" style="cursor: pointer">velog</strong>
      <div class="container2">
        <b-icon
          icon="search"
          style="margin-right: 15px; cursor: pointer"
        ></b-icon>
        <button class="btn-style">
          <strong style="font-size: 16px"><nuxt-link to="/pages/Login.vue">로그인</nuxt-link></strong>
        </button>
      </div>
    </div>
    <div>
      <input v-model="content" type="text" placeholder="postTest-content" />
      <button
        @click="postWrite"
        style="
          padding: 5px;
          border: none;
          border-radius: 5px;
          background: yellowgreen;
          cursor: pointer;
        "
      >
        전송
      </button>
    </div>
    <div v-for="a in postRead" :key="a" class="container3">
      {{a}}
    </div>
  </div>
</template>

<script>
import { IconsPlugin } from "bootstrap-vue";
import axios from "axios";
export default {
  data() {
    return {
      title: "",
      content: "",
      postRead: "",
      client_id: "a4f7f774f4ffb1fe8d4a59f3759ea520",
      redirect_uri: "http://localhost:3000/api/user/kakao/callback",
    };
  },
  mounted() {
    this.mainPageRequire();
    console.info(this.postRead)
  },
  computed: {
    kakaoLoginLink() {
      return `https://kauth.kakao.com/oauth/authorize?client_id=${this.client_id}&redirect_uri=${this.redirect_uri}&response_type=code`;
    },
  },
  methods: {
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
          this.postRead = res.data.post
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
  width: 80px;
  padding: 5px;
  color: white;
  background: black;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  border-radius: 19px;
  cursor: pointer;
}
.container3 {
  display: inline-block;
  width: 200px;
  height: 100px;
  margin-top: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: green;
}
</style>