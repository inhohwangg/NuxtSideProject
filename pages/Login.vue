<template>
    <form>
      <input
        id="userId"
        type="text"
        v-model="userId"
        class="text-field"
        placeholder="아이디"
      />
      <input
        id="password"
        type="password"
        v-model="password"
        class="text-field"
        placeholder="비밀번호"
      />
      <form v-on:submit.prevent="submitForm">
        <input type="submit" value="로그인" class="submit-btn" />
        <nuxt-link to="/signup"
          ><input type="submit" value="회원가입" class="submit-btn"
        /></nuxt-link>
        <div class="links">
          <a href="#">비밀번호를 잃어버리셨나요?</a>
        </div>
      </form>
    </form>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        userId: "",
        password: "",
        passwordCheck: "",
        nickname: "",
        token: "",
        title: "",
        content: "",
        editTitle: "",
        editContent: "",
        postId: "",
        postRead: [],
      };
    },
    methods: {
      submitForm() {
        let url = "http://13.125.96.150:3000/api/user/login";
        let url2 = "http://13.125.96.150:3000/api/user/islogin";
        let token = localStorage.getItem("access_token");
        let data = {
          userId: this.userId,
          password: this.password,
        };
        axios
          .post(url, data)
          .then((res) => {
            console.log(res);
            let token = res.data.token;
            localStorage.setItem("access_token", token);
            console.log(res.data);
            console.log("로그인 성공");
            // 페이지 전환해주는 부분
            this.$router.push("/userdata");
          })
          .catch((error) => {
            console.log(error, "로그인 실패");
          });
  
        axios
          .get(url2, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            console.info(res);
            console.info("로그인 체크 성공");
          })
          .catch((error) => {
            console.info(error);
            console.info("로그인 체크 실패");
          });
      },
    },
  };
  </script>
  
  <style>
  </style>