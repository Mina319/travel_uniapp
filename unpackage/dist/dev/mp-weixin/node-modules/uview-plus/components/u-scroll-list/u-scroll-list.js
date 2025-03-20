"use strict";
const common_vendor = require("../../../../common/vendor.js");
const block0 = (Component2) => {
  if (!Component2.wxsCallMethods) {
    Component2.wxsCallMethods = [];
  }
  Component2.wxsCallMethods.push("scrollEvent");
};
const _sfc_main = {
  name: "u-scroll-list",
  mixins: [common_vendor.mpMixin, common_vendor.mixin, common_vendor.props$8],
  data() {
    return {
      scrollInfo: {
        scrollLeft: 0,
        scrollWidth: 0
      },
      scrollWidth: 0
    };
  },
  computed: {
    // 指示器为线型的样式
    barStyle() {
      const style = {};
      style.width = common_vendor.addUnit(this.indicatorBarWidth);
      style.backgroundColor = this.indicatorActiveColor;
      return style;
    },
    lineStyle() {
      const style = {};
      style.width = common_vendor.addUnit(this.indicatorWidth);
      style.backgroundColor = this.indicatorColor;
      return style;
    }
  },
  mounted() {
    this.init();
  },
  emits: ["left", "right"],
  methods: {
    addStyle: common_vendor.addStyle,
    getPx: common_vendor.getPx,
    init() {
      this.getComponentWidth();
    },
    //
    scrollEvent(status) {
      this.$emit(status);
    },
    // 获取组件的宽度
    async getComponentWidth() {
      await common_vendor.sleep(30);
      this.$uGetRect(".u-scroll-list").then((size) => {
        this.scrollWidth = size.width;
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.scrollWidth,
    b: $options.getPx(_ctx.indicatorBarWidth),
    c: $options.getPx(_ctx.indicatorWidth),
    d: _ctx.indicator
  }, _ctx.indicator ? {
    e: common_vendor.s($options.barStyle),
    f: common_vendor.s($options.lineStyle),
    g: common_vendor.s($options.addStyle(_ctx.indicatorStyle))
  } : {});
}
if (typeof block0 === "function")
  block0(_sfc_main);
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-fea2b4f4"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/node-modules/uview-plus/components/u-scroll-list/u-scroll-list.js.map
