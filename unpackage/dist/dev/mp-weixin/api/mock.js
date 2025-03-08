"use strict";
const common_vendor = require("../common/vendor.js");
const api_mockData_pageApi = require("./mockData/pageApi.js");
common_vendor.Mock.mock(/api\/user\/getBanner/, "get", api_mockData_pageApi.pageApi.getBanner);
//# sourceMappingURL=../../.sourcemap/mp-weixin/api/mock.js.map
