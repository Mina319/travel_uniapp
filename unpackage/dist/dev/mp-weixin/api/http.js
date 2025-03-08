"use strict";
const common_vendor = require("../common/vendor.js");
let baseUrl = "https://apifoxmock.com/m1/4728220-0-default/api";
{
  baseUrl = "https://apifoxmock.com/m1/4728220-0-default/api";
}
function http(url, data = {}, method = "GET") {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: baseUrl + url,
      data,
      method,
      header: {
        "token": common_vendor.index.getStorageSync("token") || ""
      },
      success: (res) => {
        if (res.statusCode == 200) {
          if (res.data.code == 1) {
            resolve(res.data.data);
          } else if (res.data.code == 0) {
            common_vendor.index.showToast({
              title: res.data.msg,
              icon: "none"
            });
            reject(res.data.msg);
          }
        }
      },
      fail: () => {
        common_vendor.index.showToast({
          title: "服务器请求异常",
          icon: "none"
        });
      }
    });
  });
}
exports.http = http;
//# sourceMappingURL=../../.sourcemap/mp-weixin/api/http.js.map
