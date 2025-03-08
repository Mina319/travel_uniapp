"use strict";
const common_vendor = require("../../common/vendor.js");
const api_api = require("../../api/api.js");
if (!Array) {
  const _easycom_up_search2 = common_vendor.resolveComponent("up-search");
  const _easycom_up_swiper2 = common_vendor.resolveComponent("up-swiper");
  (_easycom_up_search2 + _easycom_up_swiper2)();
}
const _easycom_up_search = () => "../../node-modules/uview-plus/components/u-search/u-search.js";
const _easycom_up_swiper = () => "../../node-modules/uview-plus/components/u-swiper/u-swiper.js";
if (!Math) {
  (_easycom_up_search + _easycom_up_swiper)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const keyword = common_vendor.ref("");
    const bannerList = common_vendor.ref([]);
    common_vendor.onLoad(() => {
      api_api.getBanner().then((res) => {
        common_vendor.index.__f__("log", "at pages/index/index.vue:21", res, "res");
        bannerList.value = res.bannerList;
      });
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(($event) => keyword.value = $event),
        b: common_vendor.p({
          placeholder: "搜索景点",
          ["bg-color"]: "#e3e3e3",
          modelValue: keyword.value
        }),
        c: bannerList.value.length
      }, bannerList.value.length ? {
        d: common_vendor.p({
          keyName: "image",
          showTitle: "title",
          list: bannerList.value,
          radius: "8",
          autoplay: true,
          height: "160"
        })
      } : {});
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
