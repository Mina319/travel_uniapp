"use strict";
const common_vendor = require("../../common/vendor.js");
const api_api = require("../../api/api.js");
const _sfc_main = {
  __name: "like",
  setup(__props) {
    const LinkList = common_vendor.ref([]);
    common_vendor.onLoad(() => {
      api_api.likeList().then((res) => {
        common_vendor.index.__f__("log", "at pages/like/like.vue:33", res, "res");
        LinkList.value = res;
      });
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(LinkList.value, (item, index, i0) => {
          return {
            a: item.img,
            b: common_vendor.t(item.title),
            c: common_vendor.t(item.introduce),
            d: index
          };
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/like/like.js.map
