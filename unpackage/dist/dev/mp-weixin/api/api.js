"use strict";
const api_http = require("./http.js");
const getBanner = () => {
  return api_http.http("/user/getBanner");
};
const getHomeList = () => {
  return api_http.http("/user/getHomeList");
};
exports.getBanner = getBanner;
exports.getHomeList = getHomeList;
//# sourceMappingURL=../../.sourcemap/mp-weixin/api/api.js.map
