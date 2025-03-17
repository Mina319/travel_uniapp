"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-popup",
  mixins: [common_vendor.mpMixin, common_vendor.mixin, common_vendor.props$4],
  data() {
    return {
      overlayDuration: this.duration + 50
    };
  },
  watch: {
    show(newValue, oldValue) {
      if (newValue === true) {
        const children = this.$children;
        this.retryComputedComponentRect(children);
      }
    }
  },
  computed: {
    transitionStyle() {
      const style = {
        zIndex: this.zIndex,
        position: "fixed",
        display: "flex"
      };
      style[this.mode] = 0;
      if (this.mode === "left") {
        return common_vendor.deepMerge(style, {
          bottom: 0,
          top: 0
        });
      } else if (this.mode === "right") {
        return common_vendor.deepMerge(style, {
          bottom: 0,
          top: 0
        });
      } else if (this.mode === "top") {
        return common_vendor.deepMerge(style, {
          left: 0,
          right: 0
        });
      } else if (this.mode === "bottom") {
        return common_vendor.deepMerge(style, {
          left: 0,
          right: 0
        });
      } else if (this.mode === "center") {
        return common_vendor.deepMerge(style, {
          alignItems: "center",
          "justify-content": "center",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        });
      }
    },
    contentStyle() {
      const style = {};
      common_vendor.getWindowInfo();
      if (this.mode !== "center") {
        style.flex = 1;
      }
      if (this.bgColor) {
        style.backgroundColor = this.bgColor;
      }
      if (this.round) {
        const value = common_vendor.addUnit(this.round);
        if (this.mode === "top") {
          style.borderBottomLeftRadius = value;
          style.borderBottomRightRadius = value;
        } else if (this.mode === "bottom") {
          style.borderTopLeftRadius = value;
          style.borderTopRightRadius = value;
        } else if (this.mode === "center") {
          style.borderRadius = value;
        }
      }
      return common_vendor.deepMerge(style, common_vendor.addStyle(this.customStyle));
    },
    position() {
      if (this.mode === "center") {
        return this.zoom ? "fade-zoom" : "fade";
      }
      if (this.mode === "left") {
        return "slide-left";
      }
      if (this.mode === "right") {
        return "slide-right";
      }
      if (this.mode === "bottom") {
        return "slide-up";
      }
      if (this.mode === "top") {
        return "slide-down";
      }
    }
  },
  emits: ["open", "close", "click", "update:show"],
  methods: {
    // 点击遮罩
    overlayClick() {
      if (this.closeOnClickOverlay) {
        this.$emit("update:show", false);
        this.$emit("close");
      }
    },
    close(e) {
      this.$emit("update:show", false);
      this.$emit("close");
    },
    afterEnter() {
      this.$emit("open");
    },
    clickHandler() {
      if (this.mode === "center") {
        this.overlayClick();
      }
      this.$emit("click");
    },
    retryComputedComponentRect(children) {
      const names = [
        "u-calendar-month",
        "u-album",
        "u-collapse-item",
        "u-dropdown",
        "u-index-item",
        "u-index-list",
        "u-line-progress",
        "u-list-item",
        "u-rate",
        "u-read-more",
        "u-row",
        "u-row-notice",
        "u-scroll-list",
        "u-skeleton",
        "u-slider",
        "u-steps-item",
        "u-sticky",
        "u-subsection",
        "u-swipe-action-item",
        "u-tabbar",
        "u-tabs",
        "u-tooltip"
      ];
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        const grandChild = child.$children;
        if (names.includes(child.$options.name) && typeof (child == null ? void 0 : child.init) === "function") {
          common_vendor.sleep(50).then(() => {
            child.init();
          });
        }
        if (grandChild.length) {
          this.retryComputedComponentRect(grandChild);
        }
      }
    }
  }
};
if (!Array) {
  const _easycom_u_overlay2 = common_vendor.resolveComponent("u-overlay");
  const _easycom_u_status_bar2 = common_vendor.resolveComponent("u-status-bar");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_safe_bottom2 = common_vendor.resolveComponent("u-safe-bottom");
  const _easycom_u_transition2 = common_vendor.resolveComponent("u-transition");
  (_easycom_u_overlay2 + _easycom_u_status_bar2 + _easycom_u_icon2 + _easycom_u_safe_bottom2 + _easycom_u_transition2)();
}
const _easycom_u_overlay = () => "../u-overlay/u-overlay.js";
const _easycom_u_status_bar = () => "../u-status-bar/u-status-bar.js";
const _easycom_u_icon = () => "../u-icon/u-icon.js";
const _easycom_u_safe_bottom = () => "../u-safe-bottom/u-safe-bottom.js";
const _easycom_u_transition = () => "../u-transition/u-transition.js";
if (!Math) {
  (_easycom_u_overlay + _easycom_u_status_bar + _easycom_u_icon + _easycom_u_safe_bottom + _easycom_u_transition)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.overlay
  }, _ctx.overlay ? {
    b: common_vendor.o($options.overlayClick),
    c: common_vendor.p({
      show: _ctx.show,
      zIndex: _ctx.zIndex,
      duration: $data.overlayDuration,
      customStyle: _ctx.overlayStyle,
      opacity: _ctx.overlayOpacity
    })
  } : {}, {
    d: _ctx.safeAreaInsetTop
  }, _ctx.safeAreaInsetTop ? {} : {}, {
    e: _ctx.closeable
  }, _ctx.closeable ? {
    f: common_vendor.p({
      name: "close",
      color: "#909399",
      size: "18",
      bold: true
    }),
    g: common_vendor.o((...args) => $options.close && $options.close(...args)),
    h: common_vendor.n("u-popup__content__close--" + _ctx.closeIconPos)
  } : {}, {
    i: _ctx.safeAreaInsetBottom
  }, _ctx.safeAreaInsetBottom ? {} : {}, {
    j: common_vendor.s($options.contentStyle),
    k: common_vendor.o((...args) => _ctx.noop && _ctx.noop(...args)),
    l: common_vendor.o((...args) => _ctx.noop && _ctx.noop(...args)),
    m: common_vendor.o($options.afterEnter),
    n: common_vendor.o($options.clickHandler),
    o: common_vendor.p({
      show: _ctx.show,
      customStyle: $options.transitionStyle,
      mode: $options.position,
      duration: _ctx.duration
    }),
    p: common_vendor.n(_ctx.customClass)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-74921bef"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/node-modules/uview-plus/components/u-popup/u-popup.js.map
