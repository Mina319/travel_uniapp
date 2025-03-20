"use strict";
const common_vendor = require("../../common/vendor.js");
const api_api = require("../../api/api.js");
if (!Array) {
  const _easycom_up_rate2 = common_vendor.resolveComponent("up-rate");
  const _easycom_up_scroll_list2 = common_vendor.resolveComponent("up-scroll-list");
  (_easycom_up_rate2 + _easycom_up_scroll_list2)();
}
const _easycom_up_rate = () => "../../node-modules/uview-plus/components/u-rate/u-rate.js";
const _easycom_up_scroll_list = () => "../../node-modules/uview-plus/components/u-scroll-list/u-scroll-list.js";
if (!Math) {
  (_easycom_up_rate + _easycom_up_scroll_list)();
}
const _sfc_main = {
  __name: "line",
  setup(__props) {
    common_vendor.onLoad((props) => {
      common_vendor.index.__f__("log", "at pages/line/line.vue:44", "收到的 props:", props);
      api_api.projectInfo({ id: props.id }).then((data) => {
        if (data) {
          common_vendor.index.__f__("log", "at pages/line/line.vue:50", "返回的数据结构：", data);
          detailInfo.value = data;
        } else {
          common_vendor.index.__f__("error", "at pages/line/line.vue:56", "返回的数据结构不完整");
        }
      }).catch((error) => {
        common_vendor.index.__f__("error", "at pages/line/line.vue:60", "请求失败，错误信息：", error.message || error);
      });
    });
    const detailInfo = common_vendor.ref({});
    const count = common_vendor.ref(5);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: detailInfo.value.id
      }, detailInfo.value.id ? {
        b: detailInfo.value.markers,
        c: detailInfo.value.location[0],
        d: detailInfo.value.location[1]
      } : {}, {
        e: common_vendor.t(detailInfo.value.title),
        f: common_vendor.o(($event) => detailInfo.value.count = $event),
        g: common_vendor.p({
          count: count.value,
          modelValue: detailInfo.value.count
        }),
        h: common_vendor.f(detailInfo.value.other, (item, index, i0) => {
          return {
            a: item.url,
            b: common_vendor.t(item.name),
            c: item.id
          };
        }),
        i: common_vendor.p({
          indicator: true,
          indicatorColor: "#fff0f0",
          indicatorActiveColor: "#f56c6c"
        })
      });
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/line/line.js.map
