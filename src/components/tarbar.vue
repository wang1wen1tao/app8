<template>
  <div class="tabbar-wrap">
    <div class="tarbarList">
      <div
        class="navItem"
        v-for="(item,index) in navList"
        :key="index"
        :class="selectNavIndex == index?'addClass':'delclass'"
        @click="selectNavItem(index, item.pagePath)"
      >
        <div class="ItemImg" v-if="selectNavIndex == index">
          <img :src="item.selectedIconPath">
        </div>
        <div class="ItemImg" v-else>
          <img :src="item.iconPath">
        </div>
        <p class="itemText">{{item.text}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["selectNavIndex"],
  data() {
    return {
      navList: [
        {
          id: 0,
          pagePath: "../sellprice/main",
          iconPath: "../../static/images/82.png",
          selectedIconPath: "../../static/images/8.png",
          text: "中山陵预约"
        },
        {
          pagePath: "../mine/main",
          iconPath: "../../static/images/81.png",
          selectedIconPath: "../../static/images/8.png",
          text: "景点购票"
        },
        {
          pagePath: "../mine/main",
          iconPath: "../../static/images/79.png",
          selectedIconPath: "../../static/images/8.png",
          text: "语音讲解"
        },
        {
          pagePath: "../mine/main",
          iconPath: "../../static/images/79.png",
          selectedIconPath: "../../static/images/8.png",
          text: "语音讲解"
        },
        {
          pagePath: "../mine/main",
          iconPath: "../../static/images/79.png",
          selectedIconPath: "../../static/images/8.png",
          text: "语音讲解"
        }
      ]
    };
  },
  onshow() {
    console.log(this.navList);
  },
  methods: {
    /**
     * 点击导航栏
     */
    selectNavItem(index, pagePath) {
      console.log(this.index);
      console.log(pagePath);

      if (index === this.selectNavIndex) {
        return false;
      }
      this.bindNavigateTo('pagePath');
    },

    /**
     * 路由跳转
     */
    bindNavigateTo(url) {
     
    }
  }
};
</script>
<style >
.tabbar-wrap {
  position: fixed;
  bottom: 0;
  height: 49px;
  z-index: 1;
  background: #0c7a6c;
  width: 100%;
}
.navItem {
  width: 20%;
  height: 49px;
  position: relative;
  color: #fff;
}
.addClass {
  background: #fff;
  color: #0c7a6c;
}
.ItemImg {
  width: 18px;
  height: 17px;
  position: absolute;
  top: 10px;
  left: 29px;
}
.tarbarList {
  width: 100%;
  display: flex;
}
.itemText {
  text-align: center;
  font-size: 10px;
  margin-top: 32px;
}
</style>
