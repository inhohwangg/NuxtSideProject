<template>
  <div class="container-wrap">
    <div>
      <div>velog</div>
      <div class="search-input">
        <!-- <input type="button" class="box" value="검색" /> -->
        <b-icon
          icon="search"
          class="box"
          style="width: 64px; height: 25px; margin: auto"
        ></b-icon>
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
  margin: 10px 0;
  padding: 10px 12px;
}
.search {
  position: absolute;
  left: 15px;
  top: 20px;
  margin: 0;
}
.box {
  display: inline;
  width: auto;
  border-radius: 0;
  margin: auto;
  text-align: center;
  color: #bbb;
}
</style>