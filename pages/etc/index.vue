<template>
  <div id="app">
    <a :href="kakaoLoginLink" alt="kakao login">
      <img
        src="~/assets/images/kakao_login_medium_narrow.png"
        @click="kakaoLogin"
        style="cursor: pointer"
      />
    </a>
  </div>
</template>

<script>
export default {
  data: () => ({
    client_id: process.env.VUE_APP_KAKAO_AUTH_KEY,
    redirect_uri: "http://13.125.96.150:3000/api/user/kakao/callback",
  }),
  computed: {
    kakaoLoginLink() {
      `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.VUE_APP_KAKAO_AUTH_KEY}&redirect_uri=${this.redirect_uri}&response_type=code`;
    },
  },
  methods: {
    kakaoLogin() {
      try {
        console.info("카카오 소셜로그인 성공");
        this.$router.push("/header");
      } catch (error) {
        console.info(error, "카카오 소셜로그인 실패!");
      }
    },
  },
};
</script>
  
  <style>
</style>