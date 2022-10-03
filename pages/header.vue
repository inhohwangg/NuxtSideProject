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
          <strong style="font-size: 16px">로그인</strong>
        </button>
      </div>
    </div>
    <div class="container3"></div>
    <div>
      <input type="text" placeholder="kakaotest" />
      <button
        @click="kakaotest"
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
    <div>
      <input v-model="title" type="text" placeholder="postTest-title" />
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
  </div>
</template>

<script>
import { IconsPlugin } from "bootstrap-vue";
import axios from "axios";
export default {
  data() {
    return {
      title:'',
      content:'',
    }
  },
  methods: {
    kakaotest() {
      const API_KEY = process.env.KAKAO_AUTH_KEY;
      const data = 'a4f7f774f4ffb1fe8d4a59f3759ea520'
      const REDIRECT_URI = "http://localhost:3000/oauth";
      const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
      axios
        .get(KAKAO_AUTH_URI, {headers: data})
        .then((res) => {
          console.log(res);
          console.log("뭐라고나오려나....");
        })
        .catch((error) => {
          console.log(error, "실패!!");
        });
    },
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
  width: 90%;
  margin-top: 30px;
  background-color: green;
}
</style>