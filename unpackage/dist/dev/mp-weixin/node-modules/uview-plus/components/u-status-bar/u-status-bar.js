"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-status-bar",
  mixins: [common_vendor.mpMixin, common_vendor.mixin, common_vendor.props$13],
  data() {
    return {
      isH5: false
    };
  },
  created() {
  },
  computed: {
    style() {
      const style = {};
      let sheight = common_vendor.getWindowInfo().statusBarHeight;
      if (sheight == 0) {
        this.isH5 = true;
      } else {
        style.height = common_vendor.addUnit(sheight, "px");
      }
      style.backgroundColor = this.bgColor;
      return common_vendor.deepMerge(style, common_vendor.addStyle(this.customStyle));
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.s($options.style),
    b: common_vendor.n($data.isH5 && "u-safe-area-inset-top")
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c0b45a48"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/node-modules/uview-plus/components/u-status-bar/u-status-bar.js.map
