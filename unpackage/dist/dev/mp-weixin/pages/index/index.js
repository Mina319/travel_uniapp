"use strict";
const common_vendor = require("../../common/vendor.js");
const api_api = require("../../api/api.js");
if (!Array) {
  const _easycom_up_search2 = common_vendor.resolveComponent("up-search");
  const _easycom_up_swiper2 = common_vendor.resolveComponent("up-swiper");
  const _easycom_up_notice_bar2 = common_vendor.resolveComponent("up-notice-bar");
  const _easycom_up_lazy_load2 = common_vendor.resolveComponent("up-lazy-load");
  const _easycom_up_waterfall2 = common_vendor.resolveComponent("up-waterfall");
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  (_easycom_up_search2 + _easycom_up_swiper2 + _easycom_up_notice_bar2 + _easycom_up_lazy_load2 + _easycom_up_waterfall2 + _easycom_up_icon2)();
}
const _easycom_up_search = () => "../../node-modules/uview-plus/components/u-search/u-search.js";
const _easycom_up_swiper = () => "../../node-modules/uview-plus/components/u-swiper/u-swiper.js";
const _easycom_up_notice_bar = () => "../../node-modules/uview-plus/components/u-notice-bar/u-notice-bar.js";
const _easycom_up_lazy_load = () => "../../node-modules/uview-plus/components/u-lazy-load/u-lazy-load.js";
const _easycom_up_waterfall = () => "../../node-modules/uview-plus/components/u-waterfall/u-waterfall.js";
const _easycom_up_icon = () => "../../node-modules/uview-plus/components/u-icon/u-icon.js";
if (!Math) {
  (_easycom_up_search + _easycom_up_swiper + _easycom_up_notice_bar + _easycom_up_lazy_load + _easycom_up_waterfall + _easycom_up_icon)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const keyword = common_vendor.ref("");
    const bannerList = common_vendor.ref([]);
    const flowList = common_vendor.ref([]);
    const showTopBtn = common_vendor.ref(0);
    common_vendor.onLoad(() => {
      api_api.getBanner().then((res) => {
        common_vendor.index.__f__("log", "at pages/index/index.vue:71", res, "res");
        bannerList.value = res.bannerList;
      });
      api_api.getHomeList().then((res) => {
        common_vendor.index.__f__("log", "at pages/index/index.vue:75", res, "getHomeList");
        flowList.value = res;
      });
    });
    common_vendor.onReachBottom(() => {
      common_vendor.index.__f__("log", "at pages/index/index.vue:80", "触底");
      setTimeout(() => {
        addRandomData();
      }, 1e3);
    });
    common_vendor.onPageScroll((e) => {
      if (e.scrollTop > 600) {
        showTopBtn.value = 1;
      } else {
        showTopBtn.value = 0;
      }
    });
    const Totop = () => {
      common_vendor.index.pageScrollTo({
        scrollTop: 0,
        duration: 300
      });
    };
    const addRandomData = () => {
      for (let i = 0; i < 10; i++) {
        let index = common_vendor.index.$u.random(0, flowList.value.length - 1);
        let item = JSON.parse(JSON.stringify(flowList.value[index]));
        item.id = common_vendor.index.$u.guid();
        flowList.value.push(item);
      }
    };
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
          showTitle: true,
          list: bannerList.value,
          radius: "8",
          autoplay: true,
          height: "160"
        })
      } : {}, {
        e: common_vendor.p({
          text: "项目数据仅为实例,非真实数据"
        }),
        f: common_vendor.w(({
          leftList
        }, s0, i0) => {
          return {
            a: common_vendor.f(leftList, (item, index, i1) => {
              return common_vendor.e({
                a: "2c284f58-4-" + i0 + "-" + i1 + ",2c284f58-3",
                b: common_vendor.p({
                  threshold: "-450",
                  ["border-radius"]: "10",
                  image: item.img,
                  index,
                  ["native-mode"]: true
                }),
                c: common_vendor.t(item.title),
                d: common_vendor.t(item.times),
                e: common_vendor.t(item.tag[0]),
                f: common_vendor.t(item.tag[1]),
                g: item.isDot
              }, item.isDot ? {
                h: common_vendor.t(item.isDot)
              } : {}, {
                i: index
              });
            }),
            b: i0,
            c: s0
          };
        }, {
          name: "left",
          path: "f",
          vueId: "2c284f58-3"
        }),
        g: common_vendor.w(({
          rightList
        }, s0, i0) => {
          return {
            a: common_vendor.f(rightList, (item, index, i1) => {
              return common_vendor.e({
                a: "2c284f58-5-" + i0 + "-" + i1 + ",2c284f58-3",
                b: common_vendor.p({
                  threshold: "-450",
                  ["border-radius"]: "10",
                  image: item.img,
                  index,
                  ["native-mode"]: true
                }),
                c: common_vendor.t(item.title),
                d: common_vendor.t(item.times),
                e: common_vendor.t(item.tag[0]),
                f: common_vendor.t(item.tag[1]),
                g: item.isDot
              }, item.isDot ? {
                h: common_vendor.t(item.isDot)
              } : {}, {
                i: index
              });
            }),
            b: i0,
            c: s0
          };
        }, {
          name: "right",
          path: "g",
          vueId: "2c284f58-3"
        }),
        h: common_vendor.sr("waterfallRef", "2c284f58-3"),
        i: common_vendor.o(($event) => flowList.value = $event),
        j: common_vendor.p({
          modelValue: flowList.value
        }),
        k: showTopBtn.value
      }, showTopBtn.value ? {
        l: common_vendor.p({
          name: "arrow-upward",
          color: "#fff",
          size: "28"
        }),
        m: common_vendor.o(Totop)
      } : {});
    };
  }
};
_sfc_main.__runtimeHooks = 1;
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
