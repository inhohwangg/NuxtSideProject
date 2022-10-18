import Vue from "vue";
import moment from "moment";

Vue.filter("formatDateYear", (value) => {
  return moment(String(value)).format("YYYY");
});
Vue.filter("formDateMonth", (value) => {
  return moment(String(value)).format("YYYY년 MM월 DD일");
});
Vue.filter("formDateDay", (value) => {
  return moment(String(value)).format("DD");
});
