"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  mixins: [common_vendor.mpMixin, common_vendor.mixin, common_vendor.props$10],
  watch: {
    text: {
      immediate: true,
      handler(newValue, oldValue) {
        if (!common_vendor.test.array(newValue)) {
          common_vendor.error("noticebar组件direction为column时，要求text参数为数组形式");
        }
      }
    }
  },
  computed: {
    // 文字内容的样式
    textStyle() {
      let style = {};
      style.color = this.color;
      style.fontSize = common_vendor.addUnit(this.fontSize);
      return style;
    },
    // 垂直或者水平滚动
    vertical() {
      if (this.mode == "horizontal")
        return false;
      else
        return true;
    }
  },
  data() {
    return {
      index: 0
    };
  },
  emits: ["click", "close"],
  methods: {
    noticeChange(e) {
      this.index = e.detail.current;
    },
    // 点击通告栏
    clickHandler() {
      this.$emit("click", this.index);
    },
    // 点击关闭按钮
    close() {
      this.$emit("close");
    }
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  _easycom_u_icon2();
}
const _easycom_u_icon = () => "../u-icon/u-icon.js";
if (!Math) {
  _easycom_u_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.icon
  }, _ctx.icon ? {
    b: common_vendor.p({
      name: _ctx.icon,
      color: _ctx.color,
      size: "19"
    })
  } : {}, {
    c: common_vendor.f(_ctx.text, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    }),
    d: common_vendor.s($options.textStyle),
    e: _ctx.justifyContent,
    f: _ctx.disableTouch,
    g: _ctx.step ? false : true,
    h: _ctx.duration,
    i: common_vendor.o((...args) => $options.noticeChange && $options.noticeChange(...args)),
    j: ["link", "closable"].includes(_ctx.mode)
  }, ["link", "closable"].includes(_ctx.mode) ? common_vendor.e({
    k: _ctx.mode === "link"
  }, _ctx.mode === "link" ? {
    l: common_vendor.p({
      name: "arrow-right",
      size: 17,
      color: _ctx.color
    })
  } : {}, {
    m: _ctx.mode === "closable"
  }, _ctx.mode === "closable" ? {
    n: common_vendor.o($options.close),
    o: common_vendor.p({
      name: "close",
      size: 16,
      color: _ctx.color
    })
  } : {}) : {}, {
    p: common_vendor.o((...args) => $options.clickHandler && $options.clickHandler(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6c9dce4e"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/node-modules/uview-plus/components/u-column-notice/u-column-notice.js.map
