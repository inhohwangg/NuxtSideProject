<template>
  <div>
    <div class="test">Velog 짝퉁</div>
    <div class="mb-3" style="margin-top: 50px; margin-left: 330px">
      <b-button v-b-toggle.my-collapse>게시글 작성페이지</b-button>
      <b-button v-b-toggle.my-sidebar>Toggle Sidebar</b-button>
    </div>
    <div class="mb-3">
      <b-collapse id="my-collapse">
        <b-card title="Collapsible card"> Hello world! </b-card>
      </b-collapse>
    </div>
    <div>
      <b-sidebar id="my-sidebar" title="메뉴 사이드바" shadow>
        <div class="mt-3 px-3 py-2 col-5">
          <b-button class="m-1" variant="danger">메인</b-button>
          <b-button class="m-1" variant="success">글 목록</b-button>
          <b-button class="m-1" variant="outline-primary">글 작성</b-button>
        </div>
      </b-sidebar>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "IndexPage",
  data() {
    return {
      test: true,
    };
  },
};
</script>
<style scoped>
.test {
    width: 1260px;
    height: 100px;
    background-color: green;
    border-radius: 10px;
    justify-content: center;
    display: flex;
    align-items: center;
    margin: auto;
    font-size: 30px;
    font-family: sans-serif;
}
</style>