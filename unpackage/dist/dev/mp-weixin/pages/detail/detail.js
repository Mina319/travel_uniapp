"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_up_navbar2 = common_vendor.resolveComponent("up-navbar");
  const _easycom_up_tag2 = common_vendor.resolveComponent("up-tag");
  (_easycom_up_navbar2 + _easycom_up_tag2)();
}
const _easycom_up_navbar = () => "../../node-modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_up_tag = () => "../../node-modules/uview-plus/components/u-tag/u-tag.js";
if (!Math) {
  (_easycom_up_navbar + _easycom_up_tag)();
}
const _sfc_main = {
  __name: "detail",
  setup(__props) {
    const details = common_vendor.reactive({
      dt: ""
    });
    common_vendor.onLoad((opt) => {
      common_vendor.index.__f__("log", "at pages/detail/detail.vue:44", JSON.parse(decodeURIComponent(opt.item)));
      details.dt = JSON.parse(decodeURIComponent(opt.item));
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "",
          ["bg-color"]: "#00000000",
          ["left-icon-color"]: "#fff",
          autoBack: true
        }),
        b: details.dt.img,
        c: common_vendor.t(details.dt.title),
        d: common_vendor.p({
          text: "5A级景区",
          size: "mini",
          shape: "circle"
        }),
        e: common_vendor.t(details.dt.introduce),
        f: common_vendor.t(details.dt.times)
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/detail/detail.js.map
