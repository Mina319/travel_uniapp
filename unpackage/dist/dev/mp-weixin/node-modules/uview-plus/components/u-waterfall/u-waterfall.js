"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-waterfall",
  props: {
    modelValue: {
      // 瀑布流数据
      type: Array,
      required: true,
      default: function() {
        return [];
      }
    },
    // 每次向结构插入数据的时间间隔，间隔越长，越能保证两列高度相近，但是对用户体验越不好
    // 单位ms
    addTime: {
      type: [Number, String],
      default: 200
    },
    // id值，用于清除某一条数据时，根据此idKey名称找到并移除，如数据为{idx: 22, name: 'lisa'}
    // 那么该把idKey设置为idx
    idKey: {
      type: String,
      default: "id"
    }
  },
  mixins: [common_vendor.mpMixin, common_vendor.mixin],
  data() {
    return {
      leftList: [],
      rightList: [],
      tempList: [],
      children: []
    };
  },
  watch: {
    copyFlowList(nVal, oVal) {
      if (!nVal || nVal.length == 0) {
        this.clear(false);
      } else {
        let startIndex = Array.isArray(oVal) && oVal.length > 0 ? oVal.length : 0;
        this.tempList = this.tempList.concat(this.cloneData(nVal.slice(startIndex)));
        this.splitData();
      }
    }
  },
  mounted() {
    this.tempList = this.cloneData(this.copyFlowList);
    this.splitData();
  },
  computed: {
    // 破坏flowList变量的引用，否则watch的结果新旧值是一样的
    copyFlowList() {
      if (!this.modelValue || this.modelValue.length == 0) {
        this.clear(false);
        return [];
      } else {
        return this.cloneData(this.modelValue);
      }
    }
  },
  emits: ["update:modelValue"],
  methods: {
    async splitData() {
      if (!this.tempList.length)
        return;
      let leftRect = await this.$uGetRect("#u-left-column");
      let rightRect = await this.$uGetRect("#u-right-column");
      let item = this.tempList[0];
      if (!item)
        return;
      if (leftRect.height < rightRect.height) {
        this.leftList.push(item);
      } else if (leftRect.height > rightRect.height) {
        this.rightList.push(item);
      } else {
        if (this.leftList.length <= this.rightList.length) {
          this.leftList.push(item);
        } else {
          this.rightList.push(item);
        }
      }
      this.tempList.splice(0, 1);
      if (this.tempList.length) {
        setTimeout(() => {
          this.splitData();
        }, this.addTime);
      }
    },
    // 复制而不是引用对象和数组
    cloneData(data) {
      return JSON.parse(JSON.stringify(data));
    },
    // 清空数据列表
    clear(bak = true) {
      this.leftList = [];
      this.rightList = [];
      if (bak) {
        this.$emit("update:modelValue", []);
      }
      this.tempList = [];
    },
    // 清除某一条指定的数据，根据id实现
    remove(id) {
      let index = -1;
      index = this.leftList.findIndex((val) => val[this.idKey] == id);
      if (index != -1) {
        this.leftList.splice(index, 1);
      } else {
        index = this.rightList.findIndex((val) => val[this.idKey] == id);
        if (index != -1)
          this.rightList.splice(index, 1);
      }
      index = this.modelValue.findIndex((val) => val[this.idKey] == id);
      if (index != -1)
        this.$emit("update:modelValue", this.modelValue.splice(index, 1));
    },
    // 修改某条数据的某个属性
    modify(id, key, value) {
      let index = -1;
      index = this.leftList.findIndex((val) => val[this.idKey] == id);
      if (index != -1) {
        this.leftList[index][key] = value;
      } else {
        index = this.rightList.findIndex((val) => val[this.idKey] == id);
        if (index != -1)
          this.rightList[index][key] = value;
      }
      index = this.modelValue.findIndex((val) => val[this.idKey] == id);
      if (index != -1) {
        let data = this.cloneData(this.modelValue);
        data[index][key] = value;
        this.$emit("update:modelValue", data);
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.r("left", {
      leftList: $data.leftList
    }),
    b: common_vendor.r("right", {
      rightList: $data.rightList
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b5e061e9"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/node-modules/uview-plus/components/u-waterfall/u-waterfall.js.map
