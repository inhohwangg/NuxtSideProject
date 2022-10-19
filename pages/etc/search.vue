<template>
  <div class="container-wrap">
    <div>
      <div>
        <div class="text-style">
          velog<span name="header" class="btn-style" style="font-size: 16px"
            >로그인</span
          >
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
            "
          ></b-icon>
        </div>
        <input type="text" name="" id="" placeholder="검색어를 입력하세요" />
      </div>
    </div>
  </div>
</template>

<script>
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import axios from "axios";
export default {};
</script>

<style>
* {
  box-sizing: border-box;
}
.container-wrap {
  width: 100vw;
  height: 100vh;
  background: #eee;
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
  margin-left: 63px;
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
.container {
  width: 90%;
  margin-top: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}
.btn-style {
  width: 85px;
  padding: 5px;
  color: white;
  background: black;
  border-radius: 19px;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;
  margin-left: 1600px;
}
.text-style {
  font-size: 28px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  letter-spacing: 1px;
}
</style>