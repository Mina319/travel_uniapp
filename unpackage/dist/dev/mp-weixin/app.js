"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
require("./api/mock.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/like/like.js";
  "./pages/my/my.js";
  "./pages/detail/detail.js";
  "./pages/line/line.js";
}
const _sfc_main = {
  onLaunch: function() {
    common_vendor.index.__f__("log", "at App.vue:4", "App Launch");
  },
  onShow: function() {
    common_vendor.index.__f__("log", "at App.vue:7", "App Show");
  },
  onHide: function() {
    common_vendor.index.__f__("log", "at App.vue:10", "App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  app.use(common_vendor.uviewPlus);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
//# sourceMappingURL=../.sourcemap/mp-weixin/app.js.map
