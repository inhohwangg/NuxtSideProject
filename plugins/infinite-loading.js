import Vue from "vue";
import InfiniteLoading from "vue-infinite-loading";

Vue.component("infinite-loading", InfiniteLoading);

Vue.use(InfiniteLoading, {
  slots: { noMore: "불러올 데이터가 없어요!" },
  props: { spinner: "circles" },
});
