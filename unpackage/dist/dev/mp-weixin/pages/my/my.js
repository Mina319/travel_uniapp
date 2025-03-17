"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const api_api = require("../../api/api.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_up_popup2 = common_vendor.resolveComponent("up-popup");
  (_easycom_uni_icons2 + _easycom_up_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_up_popup = () => "../../node-modules/uview-plus/components/u-popup/u-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_up_popup)();
}
const _sfc_main = {
  __name: "my",
  setup(__props) {
    common_vendor.onLoad(() => {
    });
    const userInfo = common_vendor.reactive({
      nickName: "",
      avatarUrl: ""
    });
    const show = common_vendor.ref(false);
    const close = () => {
      show.value = false;
    };
    const userSubmit = () => {
      show.value = false;
    };
    const onChooseavatar = () => {
      common_vendor.index.login({
        success: (loginRes) => {
          common_vendor.index.getUserInfo({
            success: (infoRes) => {
              common_vendor.index.__f__("log", "at pages/my/my.vue:118", "用户信息获取成功:", infoRes.userInfo);
              userInfo.avatarUrl = infoRes.userInfo.avatarUrl;
              userInfo.nickName = infoRes.userInfo.nickName;
            },
            fail: (err) => {
              common_vendor.index.__f__("error", "at pages/my/my.vue:123", "获取用户信息失败:", err);
            }
          });
        },
        fail: (err) => {
          common_vendor.index.__f__("error", "at pages/my/my.vue:128", "登录失败:", err);
        }
      });
    };
    const changeName = (e) => {
      userInfo.nickName = e.detail.value;
    };
    const setFun = () => {
      common_vendor.index.showModal({
        title: "温馨提示",
        content: "亲，微信授权登录后才能正常使用小程序",
        success(res) {
          if (res.confirm) {
            common_vendor.index.login({
              success: async (data) => {
                common_vendor.index.__f__("log", "at pages/my/my.vue:147", data);
                const { token } = await api_api.login(data.code);
                common_vendor.index.__f__("log", "at pages/my/my.vue:149", token, "token");
                common_vendor.index.setStorageSync("token", token);
                const { avatarUrl, nickName } = await api_api.getUserInfo();
                userInfo.avatarUrl = avatarUrl;
                userInfo.nickName = nickName;
                show.value = true;
              }
            });
          }
        }
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          type: "calendar",
          size: "30",
          color: "#fff"
        }),
        b: common_vendor.p({
          type: "gear",
          size: "30",
          color: "#fff"
        }),
        c: common_vendor.p({
          type: "chat",
          size: "30",
          color: "#fff"
        }),
        d: !userInfo.nickName
      }, !userInfo.nickName ? {
        e: common_assets._imports_0
      } : {
        f: userInfo.avatarUrl,
        g: common_vendor.t(userInfo.nickName)
      }, {
        h: common_vendor.o(setFun),
        i: userInfo.avatarUrl,
        j: common_vendor.o(onChooseavatar),
        k: common_vendor.o(changeName),
        l: common_vendor.t(userInfo.nickName),
        m: common_vendor.o(userSubmit),
        n: common_vendor.o(close),
        o: common_vendor.p({
          closeable: true,
          show: show.value,
          round: "20"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2f1ef635"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/my/my.js.map
