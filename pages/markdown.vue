<template>
  <div class="test">
    <textarea rows="10" v-model="mdText"></textarea>
    <div>
      <textarea rows="10" v-model="changeMarkdown"></textarea>
    </div>
    <div v-html="changeMarkdown"></div>
  </div>
</template>

<script>
import axios from "axios";
import marked from "marked";
export default {
  name: "ShowMdPage",
  data() {
    return {
      mdText: "",
    };
  },
  mounted() {
    this.getMarkdown();
  },
  methods: {
    getMarkdown() {
      const url =
        "https://raw.githubusercontent.com/sungjaeyoon/show-md/main/README.md";
      axios.get(url).then((res) => {
        this.mdText = res.data;
      });
    },
  },
  computed: {
    changeMarkdown() {
      marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        headerIds: false,
        tables: true,
        breaks: true,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false,
      });
      let changedText = marked(this.mdText);
      changedText = changedText.replaceAll("&lt;", "<");
      changedText = changedText.replaceAll("&gt;", ">");
      changedText = changedText.replaceAll("&quot;", '"');
      return changedText;
    },
  },
};
</script>

<style scoped>
.test {
  background-color: white;
  color: black;
}
::v-deep .red-color {
  color: red;
}
::v-deep .blue-color {
  color: blue;
}
::v-deep .yellow-color {
  color: yellow;
}
</style>