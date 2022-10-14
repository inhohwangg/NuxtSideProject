<template>
  <div class="finish-wrap">
    <div class="container">
      <strong class="text-style" style="cursor: pointer" @click="velogClick"
        >velog</strong
      >
      <div class="container2">
        <div class="btn-box">
          <b-icon
            icon="search"
            style="margin-right: 15px; cursor: pointer"
          ></b-icon>
          <button class="btn-write-style">
            <strong style="font-size: 16px"
              ><nuxt-link to="/post/write">새 글 작성</nuxt-link></strong
            >
          </button>
          <button class="btn-style" @click="modalShow()">
            <strong style="font-size: 16px">로그인</strong>
          </button>
          <!-- modal -->
          <!-- <div v-if="showModal" class="black-bg">
            <div class="white-bg">
              <h4>로그인페이지임</h4>
              <p>로그인페이지 내용임</p>
              <button @click="showModal = false">닫기</button>
            </div>
          </div> -->
          <template>
            <Transition v-if="showModal" name="modal">
              <div class="modal-mask">
                <div class="modal-wrapper">
                  <div class="close close1" @click="closeModal"></div>
                  <div class="modal-container1"></div>
                  <div class="modal-container2">
                    <div class="modal-header">
                      <div
                        name="header"
                        style="
                          margin-top: 80px;
                          font-size: 21px;
                          font-family: system-ui, -apple-system,
                            BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
                            Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
                            sans-serif;
                          font-weight: bold;
                        "
                      >
                        로그인
                      </div>
                      <div class="login-id">
                        <input
                          type="text"
                          name=""
                          id="userId"
                          v-model="userId"
                          placeholder="아이디를 입력해주세요."
                        />
                      </div>
                      <div class="login-password">
                        <input
                          type="password"
                          name=""
                          id="password"
                          v-model="password"
                          placeholder="비밀번호를 입력해주세요."
                        />
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
                    <div class="modal-body">
                      <div
                        name="body"
                        style="
                          font-size: 16px;
                          font-family: system-ui, -apple-system,
                            BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
                            Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
                            sans-serif;
                          color: #868e96;
                          font-weight: bold;
                        "
                      >
                        소셜 계정으로 로그인
                      </div>
                    </div>
                    <div class="modal-footer"></div>
                  </div>
                </div>
              </div>
            </Transition>
          </template>
        </div>
      </div>
    </div>
    <div v-for="a in postRead" :key="a" class="container3">
      <div>
        <div style="margin-left: 10px; margin-top: 10px">{{ a.title }}</div>
        <div style="margin-left: 10px; margin-top: 10px">{{ a.content }}</div>
        <div style="margin-left: 10px; margin-top: 10px">{{ a.writer }}</div>
        <div style="margin-left: 10px; margin-top: 10px">
          {{ a.createdAt | formatDate }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import moment from "moment";
import dayjs from "dayjs";
import axios from "axios";
import Modal from "~/components/Modal.vue";
export default {
  components: {
    dayjs,
    Modal,
  },
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
  mounted() {
    this.mainPageRequire();
  },
  computed: {
    kakaoLoginLink() {
      return `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.VUE_APP_KAKAO_AUTH_KEY}&redirect_uri=${this.redirect_uri}&response_type=code`;
    },
  },
  methods: {
    modalShow() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    velogClick() {
      window.location.reload();
    },
    // 게시글 작성하기
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
          window.location.reload();
          console.log(res.data);
          console.log("게시글 작성 성공");
          this.$router.push("/header");
        })
        .catch((error) => {
          console.log(error, "게시글 작성 실패!");
        });
    },
    //전체 게시글 가져오기
    mainPageRequire() {
      const host = "http://13.125.96.150:3000/api/post/main";
      let token = localStorage.getItem("access_token");
      axios
        .get(host)
        .then((res) => {
          console.log(res.data.post);
          this.postRead = res.data.post;
          console.log("게시글 조회성공");
        })
        .catch((error) => {
          console.log(error);
          console.log("게시글 조회 실패...!");
        });
    },
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
.container3 {
  display: flex;
  float: left;
  width: 320px;
  height: 332px;
  margin-left: 50px;
  margin-top: 60px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  background: white;
  border-radius: 5px;
}
.container3:hover {
  box-shadow: 0.1px 0.1px 0.1px 1px #eee;
  transform: translateY(-7px);
}
.btn-write-style {
  width: 110px;
  padding: 5px;
  border-radius: 19px;
  cursor: pointer;
}
.btn-box {
  width: 320px;
  height: 20px;
  margin-right: auto;
  margin-left: -40px;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container1 {
  margin-left: 555px;
  width: 216px;
  height: 570px;
  background-color: #f8f9fa;
  float: left;
  border-radius: 5px;
}

.modal-container2 {
  width: 390px;
  height: 570px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin: 0;
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.close {
  position: relative;
  display: inline-block;
  *display: inline;
  width: 50px;
  height: 50px;
  text-align: center;
  float: right;
  right: 768px;
  bottom: 2px;
  cursor: pointer;
}

.close1:after {
  content: "\00d7";
  font-size: 25pt;
  line-height: 45px;
}
.login-id {
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
.submit {
  margin-top: 10px;
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