<template>
  <body>
    <div class="container">
      <div class="left_Side">
        <div class="profileText">
          <div class="imgBx">
            <img src="~assets/images/도로로.jpg" />
          </div>
          <h2>Inho Hwang<br /><span>Full Stack Developer</span></h2>
        </div>

        <div class="contactInfo">
          <h3 class="title">연락처 정보</h3>
          <ul>
            <li>
              <span class="icon"
                ><i class="fa fa-phone" aria-hidden="true"></i
              ></span>
              <span class="text">+82 010-xxxx-xxxx</span>
            </li>
            <li>
              <span class="icon"
                ><i class="fa-solid fa-envelope" aria-hidden="true"></i
              ></span>
              <span class="text">sk1440sk@naver.com</span>
            </li>
            <li>
              <span class="icon"><i class="fa-solid fa-location-dot"></i></span>
              <span class="text">South Korea</span>
            </li>
          </ul>
        </div>

        <div class="contactInfo-education">
          <h3 class="title">Education</h3>
          <ul>
            <li>
              <h5>2022-03 ~</h5>
              <h4>Gractor</h4>
              <h4>Compony</h4>
            </li>
            <li>
              <h5>2021-09 ~ 2022-12</h5>
              <h4>항해99</h4>
              <h4>Boot Camp Name</h4>
            </li>
          </ul>
        </div>

        <div class="contactInfo-language">
          <h3 class="title">Language</h3>
          <ul>
            <li>
              <span class="text">Hangeul</span>
              <div class="percent"></div>
            </li>
          </ul>
        </div>
      </div>
      <div class="right_Side"></div>
    </div>
  </body>
</template>

<script>
export default {};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body {
  background: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.container {
  position: relative;
  width: 100%;
  max-width: 1000px;
  min-height: 1000px;
  background: #fff;
  margin: 50px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  box-shadow: 0 35px 55px rgba(0, 0, 0, 0.1);
}
.container .left_Side {
  position: relative;
  background: #003147;
  padding: 40px;
}
.container .right_Side {
  position: relative;
  background: #fff;
  padding: 40px;
}
.profileText {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.profileText .imgBx {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
}

.profileText .imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.profileText h2 {
  color: #fff;
  font-size: 1.5em;
  margin-top: 20px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  line-height: 1.4em;
}
.profileText h2 span {
  font-size: 0.8em;
  font-weight: 300;
}
.contactInfo {
  padding-top: 40px;
}
.title {
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 20px;
}
.contactInfo ul {
  position: relative;
}
.contactInfo ul li {
  position: relative;
  list-style: none;
  margin: 10px 0;
  cursor: pointer;
}
.contactInfo ul li .icon {
  display: inline-block;
  width: 30px;
  font-size: 18px;
  color: #03a9f4;
}

.contactInfo ul li span {
  color: #fff;
  font-weight: 300;
}
.contactInfo-education li {
  margin-bottom: 15px;
}

.contactInfo-education h5 {
  color: #03a9f4;
  font-weight: 500;
}

.contactInfo-education h4 {
  color: #fff;
  font-weight: 500;
}
.contactInfo-language .percent {
  position: relative;
  width: 100%;
  height: 6px;
  background: #081921;
  display: block;
  margin-top: 5px;
}
</style>

