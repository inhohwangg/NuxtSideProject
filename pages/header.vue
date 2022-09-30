<template>
  <div class="container">
    <strong class="text-style">velog</strong>
    <div class="container2">
        <button class="btn-style"><strong>로그인</strong></button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  width: 100%;
  background: red;
  margin-top: 10px;
}
.text-style {
    font-size: 23px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    letter-spacing: 1px;
}
.container2 {
  width: 10%;
  float: right;
  background-color: blue;
}
.btn-style {
    width: 80px;
    padding: 5px;
    color: white;
    background: black;
    align-items: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 19px;
}
</style>