<template>
    <form class="login-form">
      <input id="userId" type="text" v-model="userId" class="text-field" placeholder="아이디">
      <input id="password" type="password" v-model="password" class="text-field" placeholder="비밀번호">
      <input id="password" type="password" v-model="passwordCheck" class="text-field" placeholder="비밀번호 체크">
      <input id="nickname" type="text" v-model="nickname" class="text-field" placeholder="닉네임">
      <nuxt-link to="/login"><input type="submit" value="이전" class="submit-btn"></nuxt-link>
      <form v-on:submit.prevent="signupForm">
      <input type="submit" value="회원가입 완료" class="submit-btn">
      </form>
    </form>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
      data() {
          return {
              userId:'',
              password:'',
              passwordCheck:'',
              nickname:'',
          }
      },
      methods:{
          signupForm() {
              let url = 'http://13.125.96.150:3000/api/user/signup'
              let data = {
                  userId:this.userId,
                  password:this.password,
                  passwordCheck:this.passwordCheck,
                  nickname:this.nickname,
              }
              axios.post(url, data)
              .then((res)=> {
                  console.info(res)
                  console.info('회원가입 성공')
              })
              .catch((error)=> {
                  console.info(error)
                  console.info('회원가입 실패')
              })
          }
      }
  }
  </script>
  
  <style>
  * {
      box-sizing: border-box;
  }
  
  body {
      margin: 0;
      background-color: #1BBC9B;
  }
  
  .login-form {
      width: 300px;
      border: 0;
      background-color: #EEEFF1;
      padding: 20px;
      margin: 0 auto;
  }
  
  .text-field {
      font-size: 14px;
      margin-bottom: 10px;
      border: none;
      border-radius: 5px;
      padding: 10px;
      width: 100%;
  }
  
  .submit-btn {
      color: #EEEFF1;
      font-size: 14px;
      background-color: #1BBC9B;
      margin-bottom: 30px;
      padding: 10px;
      border: none;
      border-radius: 5px;
      width: 100%;
  }
  
  .links {
      text-align: center;
  }
  
  .links a {
      font-size: 12px;
      color: #9b9b9b;
  }
  </style>