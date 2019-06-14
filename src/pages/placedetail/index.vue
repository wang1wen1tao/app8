<template>
  <div>
    <div class="placetailheader">
      <swiper indicator-dots autoplay circular>
        <block>
          <swiper-item class="placetailheader1">
            <img src="/static/images/2002.png" alt>
          </swiper-item>
        </block>
      </swiper>
    </div>
    <div class="placeTitle">
      <div class="placeName">
        <p class="text">明孝陵</p>
        <div class="icon">
          <div class="iconImg">
            <img src="/static/images/2008.png" alt>
          </div>
          <p class="word">订阅</p>
          <div class="iconImg ls">
            <img src="/static/images/2005.png" alt>
          </div>
          <p class="word">讲解</p>
        </div>
      </div>
      <div class="placesmall">--南京最大的帝王陵墓</div>
      <div class="infoImg">
        <img src="/static/images/2013.png" alt>
        <div class="textArea">
          明孝陵位于南京市玄武区紫金山南麓独龙阜玩珠峰下，东毗中山
          陵，南临梅花山，位于钟山风景名胜区内，是明太祖朱元璋与其
          皇后的合葬陵墓。因皇后马氏谥号“孝慈高皇后”，又因奉行孝治
          天下，故名“孝陵”。其占地面积达170余万平方米，是中国规模
          最大的帝王陵寝之一。
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
swiper {
  width: 100%;
  height: 516px;
}
.placetailheader1 {
  background: gold;
}
.placetailheader2 {
  background: green;
}
.placeTitle {
  width: 93.6%;
  height: 45px;
  margin: 0 auto;
}
.placeTitle {
  height: 45px;
}
.placeName {
  height: 50%;
  display: flex;
}
.text {
  font-size: 18px;
}
.placesmall {
  margin-top: 13px;
  font-size: 12px;
}
.icon {
  margin-left: 173px;
  margin-top: 19px;
  display: flex;
}
img {
  width: 100%;
  height: 100%;
}
.iconImg {
  width: 22px;
  height: 12px;
}
.ls {
  margin-left: 21px;
}
.word {
  font-size: 12px;
  color: #0c7a6c;
  margin-left: 9px;
  margin-top: 5px;
}
.infoImg {
  height: 230px;
  margin-top: 21px;
}
.textArea {
  height: 96px;
  font-size: 12px;
  color: #333;
}
</style>