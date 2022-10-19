<template>
  <div class="finish-wrap">
    <div class="container">
      <strong class="text-style" style="cursor: pointer" @click="velogClick"
        >velog</strong
      >
      <div class="container2">
        <div class="btn-box">
          <div class="btn-search" @click="searchPageMove">
            <b-icon
              icon="search"
              style="margin-right: 15px; cursor: pointer"
            ></b-icon>
          </div>
          <button class="btn-style" @click="modalShow()">
            <strong style="font-size: 16px">로그인</strong>
          </button>
        </div>
      </div>
    </div>
    <div class="search-input">
      <!-- <input type="button" class="box" value="검색" /> -->
      <div class="box">
        <b-icon
          icon="search"
          style="
            width: 64px;
            height: 64px;
            margin-top: 80px;
            background: white;
            padding: 18px;
            border-top: 1px solid #bbb;
            border-left: 1px solid #bbb;
            border-bottom: 1px solid #bbb;
            cursor: pointer;
            padding: 10px;
            margin-left: 37px;
          "
        ></b-icon>
      </div>
      <input type="text" name="" id="" placeholder="검색어를 입력하세요" />
    </div>
  </div>
</template>

<script>
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import moment from "moment";
import axios from "axios";
export default {
  data() {
    return {
      title: "",
      content: "",
      postRead: "",
      userId: "",
      password: "",
      client_id: process.env.KAKAO_AUTH_KEY,
      redirect_uri: process.env.REDIRECT_URI,
      showModal: false,
    };
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
.btn-style:hover {
  background: #343a40;
}
.btn-box {
  width: 320px;
  height: 20px;
  margin-right: auto;
  margin-left: -40px;
}
.btn-search {
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  float: inherit;
  padding: 12px;
}
.btn-search:hover {
  background-color: rgba(0, 0, 0, 0.5);
}
.search-input {
  position: relative;
  text-align: center;
  margin: 0 auto;
}
input {
  width: 768px;
  height: 64px;
  border: 1px solid #bbb;
  margin: 80px 0;
  padding: 10px 12px;
  margin-left: 100px;
}
.search {
  position: absolute;
  left: 15px;
  top: 20px;
  margin: 0;
}
.box {
  position: absolute;
  float: left;
  display: inline;
  width: auto;
  border-radius: 0;
  text-align: center;
  color: #bbb;
}
</style>