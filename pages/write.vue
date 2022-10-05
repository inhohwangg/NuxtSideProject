<template>
  <div>
    <h1>게시글 글쓰기</h1>
    <p>제목 : <input v-model="title" /></p>
    <p>내용 : <input v-model="content" /></p>
    <button @click="postWrite">작성 완료</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      title:'',
      content:'',
    }
  },
  methods:{
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
  }
};
</script>

<style>
</style>