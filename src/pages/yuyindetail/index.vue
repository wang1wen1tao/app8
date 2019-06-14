<template>
  <div>
    <div class="container">
      <div class="topName">
        <div class="titleLeft">
          <p class="placename">明孝陵讲解</p>
          <div class="playIcon">
            <img src="/static/images/1603.png" alt>
          </div>
        </div>
        <div class="titleRight">
          <div class="laugIcon">
            <img src="/static/images/1606.png" alt>
          </div>
          <p class="laugText">中文</p>
        </div>
      </div>
      <div class="placeImg">
        <img src="/static/images/1611.png" alt>
      </div>
      <div class="playList">
        <h1 class="playTitle">讲解列表</h1>
        <div class="playItem">
          <p class="playText">1.钟山风景区概述</p>
        </div>
        <div class="playItem">
          <p class="playText li">2.总说—世界文化遗产明孝陵</p>
          <div class="playImg">
            <img src="/static/images/1615.png" alt>
          </div>
        </div>
        <div class="playItem">
          <p class="playText">2.总说—世界文化遗产明孝陵</p>
          <div class="playImg">
            <img src="/static/images/1619.png" alt>
          </div>
        </div>
        <div class="playItem">
          <p class="playText">3.平民皇帝朱元璋的传奇人生</p>
          <div class="playImg">
            <img src="/static/images/1619.png" alt>
          </div>
        </div>
        <div class="playItem">
          <p class="playText">3.平民皇帝朱元璋的传奇人生</p>
          <div class="playImg">
            <img src="/static/images/1619.png" alt>
          </div>
        </div>
        <div class="playItem">
          <p class="playText">4.孝陵选址—宝地紫金山，风水独龙阜</p>
          <div class="playImg">
            <img src="/static/images/1619.png" alt>
          </div>
        </div>
        <div class="playItem">
          <p class="playText">5.明孝陵建筑探秘—下马坊</p>
          <div class="playImg">
            <img src="/static/images/1619.png" alt>
          </div>
        </div>
        <div class="playItem">
          <p class="playText">6.明孝陵建筑探秘—大金门</p>
          <div class="playImg">
            <img src="/static/images/1619.png" alt>
          </div>
        </div>
        <div class="playItem">
          <p class="playText">7.明孝陵建筑探秘—四方城</p>
          <div class="playImg">
            <img src="/static/images/1619.png" alt>
          </div>
        </div>
        <div class="playItem">
          <p class="playText">8.明孝陵历史拾趣—朱棣为父立巨卑尽显孝道...</p>
          <div class="playImg">
            <img src="/static/images/1619.png" alt>
          </div>
        </div>
        <div class="playItem">
          <p class="playText">9.明孝陵建筑探秘—“最美神道”之石象...</p>
          <div class="playImg">
            <img src="/static/images/1619.png" alt>
          </div>
        </div>
        <div class="playItem">
          <p class="playText">10.明孝陵建筑探秘—“最美神道”之翁仲路</p>
          <div class="playImg">
            <img src="/static/images/1619.png" alt>
          </div>
        </div>
      </div>
      <div class="playGui">
          <img src="/static/images/1623.png" alt>
      </div>
      <div class="buyBtn" @click="buysuccess">
          <img src="/static/images/1627.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        buysuccess(){
            wx.navigateTo({ url: '../buysuccess/main' });
        }
    },
};
</script>
<style scoped>
.container {
  width: 93.6%;
  margin: 15px auto;
}
img {
  width: 100%;
  height: 100%;
}
.topName {
  display: flex;
  height: 20px;
}
.titleLeft {
  width: 304px;
  display: flex;
}
.placename {
  font-size: 18px;
  color: #0c7a6c;
}
.playIcon {
  width: 23px;
  height: 23px;
  background: #ccc;
  margin-left: 17px;
}
.laugIcon {
  width: 18px;
  height: 14px;
}
.titleRight {
  display: flex;
}
.laugText {
  color: #333333;
  font-size: 12px;
  margin-left: 5px;
  line-height: 28px;
}
.placeImg {
  height: 84px;
  margin-top: 17px;
}
.playList {
  margin-top: 13px;
}
.playTitle {
  color: #0c7a6c;
  font-size: 14px;
  margin-left: 16px;
}
.playItem {
  display: flex;
}
.playText {
  font-size: 12px;
  margin-left: 16px;
  margin-top: 13px;
}
.playImg {
  width: 13px;
  height: 11px;
  margin-top: 7.5px;
  margin-left: 9px;
}
.li {
  color: #0c7a6c;
}
.playGui {
  height: 136px;
  margin-top: 35px;
}
.buyBtn{
    width: 84%;
    height: 41px;
    margin: 14px auto;
}
</style>

