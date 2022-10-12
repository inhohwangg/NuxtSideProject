<template>
  <div>
    <editor :initialValue="text" ref="editor" align="left"> </editor>
    <viewer v-if="toggle" :initialValue="text"></viewer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "# 이렇게 나옵니다",
      toggle: false,
    };
  },
};
</script>

<style scoped>
</style>