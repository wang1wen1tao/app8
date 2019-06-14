<template>
  <div class="container">
    <div class="piaoList">
      <div class="piaoItem" @click="jumppioawu">
        <div class="itemBorder">
          <img class="itembImg" src="/static/images/104.png" alt srcset>
        </div>
        <div class="itemImg">
          <img src="/static/images/105.png" alt class="imgTT">
        </div>
        <div class="itemWord">
          <div class="itemTop">
            <p class="itemTitle">钟山风景区套票</p>
            <p class="whenWord">[当天可定]</p>
          </div>
          <div class="itemCenter">
            <p class="typeItem">可预售</p>
            <p class="typeItem pad">可讲解</p>
          </div>
          <div class="itemFoot">
            <p class="timeSeil">17:30前可订今日票</p>
            <p class="price">¥100</p>
          </div>
        </div>
        <div class="lianxi">
          <img src="/static/images/106.png" alt class="laImg">
        </div>
      </div>
      <!--<div class="piaoItem">
        <div class="itemBorder">
          <img class="itembImg" src="/static/images/104.png" alt srcset>
        </div>
        <div class="itemImg">
          <img src="/static/images/107.png" alt class="imgTT">
        </div>
        <div class="itemWord">
          <div class="itemTop">
            <p class="itemTitle">钟山风景区套票</p>
            <p class="whenWord">[当天可定]</p>
          </div>
          <div class="itemCenter">
            <p class="typeItem">可预售</p>
            <p class="typeItem pad">可讲解</p>
          </div>
          <div class="itemFoot">
            <p class="timeSeil">17:30前可订今日票</p>
            <p class="price">¥200</p>
          </div>
        </div>
      </div>
      <div class="piaoItem">
        <div class="itemBorder">
          <img class="itembImg" src="/static/images/104.png" alt srcset>
        </div>
        <div class="itemImg">
          <img src="/static/images/108.png" alt class="imgTT">
        </div>
        <div class="itemWord">
          <div class="itemTop">
            <p class="itemTitle">钟山风景区套票</p>
            <p class="whenWord">[当天可定]</p>
          </div>
          <div class="itemCenter">
            <p class="typeItem">可预售</p>
            <p class="typeItem pad">可讲解</p>
          </div>
          <div class="itemFoot">
            <p class="timeSeil">17:30前可订今日票</p>
            <p class="price">¥70</p>
          </div>
        </div>
      </div>
      <div class="piaoItem">
        <div class="itemBorder">
          <img class="itembImg" src="/static/images/104.png" alt srcset>
        </div>
        <div class="itemImg">
          <img src="/static/images/109.png" alt class="imgTT">
        </div>
        <div class="itemWord">
          <div class="itemTop">
            <p class="itemTitle">钟山风景区套票</p>
            <p class="whenWord">[预售]</p>
          </div>
          <div class="itemCenter">
            <p class="typeItem">可预售</p>
            <p class="typeItem pad">可讲解</p>
          </div>
          <div class="itemFoot">
            <p class="timeSeil">17:30前可订今日票</p>
            <p class="price">¥35</p>
          </div>
        </div>
      </div>
      <div class="piaoItem">
        <div class="itemBorder">
          <img class="itembImg" src="/static/images/104.png" alt srcset>
        </div>
        <div class="itemImg">
          <img src="/static/images/105.png" alt class="imgTT">
        </div>
        <div class="itemWord">
          <div class="itemTop">
            <p class="itemTitle">钟山风景区套票</p>
            <p class="whenWord">[当天可定]</p>
          </div>
          <div class="itemCenter">
            <p class="typeItem">可预售</p>
            <p class="typeItem pad">可讲解</p>
          </div>
          <div class="itemFoot">
            <p class="timeSeil">17:30前可订今日票</p>
            <p class="price">¥100</p>
          </div>
        </div>
      </div>
      <div class="piaoItem">
        <div class="itemBorder">
          <img class="itembImg" src="/static/images/104.png" alt srcset>
        </div>
        <div class="itemImg">
          <img src="/static/images/105.png" alt class="imgTT">
        </div>
        <div class="itemWord">
          <div class="itemTop">
            <p class="itemTitle">钟山风景区套票</p>
            <p class="whenWord">[当天可定]</p>
          </div>
          <div class="itemCenter">
            <p class="typeItem">可预售</p>
            <p class="typeItem pad">可讲解</p>
          </div>
          <div class="itemFoot">
            <p class="timeSeil">17:30前可订今日票</p>
            <p class="price">¥100</p>
          </div>
        </div>
      </div>-->
    </div>
    <Tarbar>{{msg}}</Tarbar>
  </div>
</template>

<script>
import tarbar from '@/components/tabBar'
export default {
  data() {
    return {
        msg:'assda'
    };
  },
   onShow(){
      console.log(this.$emit)
  },
  components:{
   tarbar
  },
  methods: {
    jumppioawu(){
      wx.navigateTo({
        url: '../buypiaoju/main'
      })
    }
  }
};
</script>

<style scoped>
.piaoList {
  width: 94%;
  margin: 15rpx auto;
}
.piaoItem {
  width: 100%;
  height: 101px;
  display: flex;
}
.itemBorder {
  width: 12px;
  height: 100%;
}
.itemImg {
  width: 87px;
  height: 84px;
  background: green;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 14px;
}
.itemWord {
  width: 191px;
  height: 84px;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 15px;
}
.itemTop {
  display: flex;
}
.whenWord {
  margin-left: 11px;
}
.lianxi {
  width: 30px;
  height: 15px;
  margin-left: 12px;
  margin-top: 14px;
}
.itemCenter {
  width: 100%;
  height: 15px;
  display: flex;
  margin-top: 12px;
}
.typeItem {
  font-size: 9px;
  width: 36px;
  height: 14px;
  color: #0c7a6c;
  border: 1px solid #0c7a6c;
  text-align: center;
}
.pad {
  margin-left: 11px;
}
.itemFoot {
  width: 100%;
  height: 33px;
  margin-top: 8px;
}
.timeSeil {
  font-size: 9px;
  color: #999;
}
.price {
  color: #0c7a6c;
  font-size: 15px;
}
.itembImg,
.imgTT,
.laImg {
  width: 100%;
  height: 100%;
}
</style>