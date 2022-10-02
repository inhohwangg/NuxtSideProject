<template>
  <div>
    <div class="container">
      <strong class="text-style" style="cursor: pointer">velog</strong>
      <div class="container2">
        <b-icon
          icon="search"
          style="margin-right: 15px; cursor: pointer"
        ></b-icon>
        <button class="btn-style"><strong style="font-size: 16px">로그인</strong></button>
      </div>
    </div>
    <div class="container3">

    </div>
  </div>
</template>

<script>
import { IconsPlugin } from "bootstrap-vue";
export default {};
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