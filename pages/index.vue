<template>
  <div id="app">
    <h2>For Kakao Vue</h2>
    <a :href="kakaoLoginLink" alt="kakao login">
      <img alt="kakao logo" />
    </a>
  </div>
</template>

<script>
  export default {
    name: "App",
    data: () => ({
      client_id: "a4f7f774f4ffb1fe8d4a59f3759ea520",
      redirect_uri: "http://13.125.96.150:3000/api/user/kakao/callback",
    }),
    computed: {
      kakaoLoginLink() {
        return `https://kauth.kakao.com/oauth/authorize?client_id=${this.client_id}&redirect_uri=${this.redirect_uri}&response_type=code`;
      },
    },
  };
  </script>
  
  <style>
  #app {
    width: 400px;
    padding: 24px;
    margin: 100px auto 0 auto;
    text-align: center;
    border: 1px solid #cccccc;
  }
  
  #app img {
    width: 100%;
  }
  </style>