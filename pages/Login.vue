<template>
  <div class="wrap">
    <div class="login">
      <h2>Login</h2>
      <div class="login-sns">
        <li>
          <a :href="kakaoLoginLink" alt="kakao login">
            <img
              src="../assets/images/image.png"
              style="cursor: pointer; width: 60px"
              @click="kakaoLogin"
            />
          </a>
        </li>
      </div>
      <div class="login-id">
        <h4>ID</h4>
        <input
          type="text"
          name=""
          id="userId"
          v-model="userId"
          placeholder="ID"
        />
      </div>
      <div class="login-password">
        <h4>PassWord</h4>
        <input
          type="password"
          name=""
          id="password"
          v-model="password"
          placeholder="PassWord"
        />
      </div>
      <div class="login-etc">
        <div class="checkbox">
          <input type="checkbox" name="" id="" /> 아이디 저장
          <div class="forgot-pw"></div>
        </div>
      </div>
      <div class="submit">
        <form v-on:submit.prevent="submitForm">
          <input type="submit" value="로그인" />
        </form>
      </div>
      <div class="submit-register">
        <input type="submit" value="회원가입" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    userId: "",
    password: "",
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
          this.$router.push("/header");
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}

h2 {
  color: tomato;
  font-size: 2em;
}
.wrap {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.1);
}

.login {
  width: 30%;
  height: 600px;
  background: white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.login-sns {
  padding: 20px;
  display: flex;
}
.login-sns li {
  padding: 0px 15px;
}

.login-sns a {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 50px;
  background: white;
  font-size: 20px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4), -3px -3px 5px rgba(0, 0, 0, 0.1);
}

.login-id {
  margin-top: 20px;
  width: 80%;
}

.login-id input {
  width: 100%;
  height: 50px;
  border-radius: 30px;
  margin-top: 10px;
  padding: 0px 20px;
  border: 1px solid lightgray;
  outline: none;
}

.login-password {
  margin-top: 20px;
  width: 80%;
}

.login-password input {
  width: 100%;
  height: 50px;
  border-radius: 30px;
  margin-top: 10px;
  padding: 0px 20px;
  border: 1px solid lightgray;
  outline: none;
}

.login-etc {
  padding: 10px;
  width: 80%;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
}

.submit {
  margin-top: 50px;
  width: 80%;
}
.submit-register {
  margin-top: 20px;
  width: 80%;
}

.submit-register input {
  width: 100%;
  height: 50px;
  border: 0;
  outline: none;
  border-radius: 40px;
  background: linear-gradient(to left, rgba(255, 77, 46), rgb(255, 155, 47));
  font-size: 1.2em;
  color: white;
  letter-spacing: 2px;
  cursor: pointer;
}
.submit input {
  width: 100%;
  height: 50px;
  border: 0;
  outline: none;
  border-radius: 40px;
  background: linear-gradient(to left, rgba(255, 77, 46), rgb(255, 155, 47));
  color: white;
  font-size: 1.2em;
  letter-spacing: 2px;
  cursor: pointer;
}
</style>