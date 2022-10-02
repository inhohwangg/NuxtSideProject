<template>
  <div style="margin: 0px">
    <div class="main-background">
      <h4 class="main-title">Buy Our Shoes!</h4>
      <p class="main-content">신발을 구매하시려면 아래의 버튼을 클릭해주세요</p>
      <!-- 내가 작성한 버튼 -->
      <button
        style="
          width: 50px;
          margin-top: 10px;
          border-radius: 10px;
          background: aquamarine;
          cursor: pointer;
        "
      >
        <a href="https://naver.com" style="text-decoration: none">이동</a>
      </button>
      <!-- 강의에서 알려준 버튼 -->
      <button class="main-button">구매하기</button>
    </div>
    <div class="main2-title">
      <h4>How we design our shoes</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
    </div>

    <br />

    <div class="main2-title" style="padding: 50px">
      <h4>How we design our shoes</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
div {
  box-sizing: border-boxs;
  margin: 0px;
}


.main-background {
  width: 100%;
  height: 500px;
  background-image: url("https://codingapple.com/wp-content/uploads/2019/06/shoes.jpg"),
    url();
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 1px;
  color: white;
  text-align: conter;
  position: relative;
}
.main-title {
  color: white;
  font-size: 40px;
  margin-top: 100px;
}
.main-content {
  align-content: center;
  margin-left: auto;
  margin-right: auto;
}
.main-button {
  padding: 15px;
  font-size: 20px;
  background-color: white;
  border: none;
  border-radius: 5px;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  width: 150px;
}
.main2-title {
  width: 80%;
  max-width: 600px;
  margin: auto;
  padding: 20px;
  text-align: center;
  background-color: #eee;
  position: relative;
  top: -40px;
}
</style>