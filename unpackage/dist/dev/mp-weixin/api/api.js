"use strict";
const api_http = require("./http.js");
const getBanner = () => {
  return api_http.http("/user/getBanner");
};
exports.getBanner = getBanner;
//# sourceMappingURL=../../.sourcemap/mp-weixin/api/api.js.map
