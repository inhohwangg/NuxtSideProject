<template>
  <div>
    <div>
      <textarea
        placeholder="제목을 입력하세요"
        class="bkWYJa"
        style="height: 66px"
      ></textarea>
    </div>
    <tui />
    <button class="out-button">나가기</button>
    <button class="post-button" @click="postWrite">출간하기</button>
  </div>
</template>

<script>
import axios from "axios";
import Tui from "../components/tui.vue";
export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  methods: {
    toastTest1() {
      this.$toast.success("Hello Info");
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
* {
  box-sizing: inherit;
}
textarea {
  font-family: inherit;
}
.bkWYJa {
  background: transparent;
  display: block;
  padding: 0px;
  font-size: 2.75rem;
  width: 100%;
  resize: none;
  line-height: 1.5;
  outline: none;
  border: none;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-left: 10px;
}
.out-button {
  height: 2.5rem;
  padding: 0.5rem 1rem;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: #fff;
}
.post-button {
  padding: 0.5em 1em;
  border-radius: 7px;
  display: inline-block;
  color: #fff;
  background-color: #12b886;
  box-sizing: border-box;
  border: 1px solid #fff;
  cursor: pointer;
  text-transform: uppercase;
  margin-left: 780px;
  margin-top: 10px;
  font-weight: bold;
  font-size: 18px;
  font-family: inherit;
}
</style>