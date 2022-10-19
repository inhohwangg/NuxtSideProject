<template>
  <div>
    <editor v-model="content" :initialValue="content" ref="editor" align="left">
    </editor>
    <viewer v-if="toggle" :initialValue="content"></viewer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "# 이렇게 나옵니다",
      toggle: false,
      content: "",
    };
  },
};
</script>

<style scoped>
</style>