<template>
  <div class="Box">
    <div class="headerImg">
      <img src="/static/images/902.png" alt>
    </div>
    <div class="placeBox">
      <div class="placeName">
        <p class="placenames">明孝陵景区</p>
        <p class="pricePlace">
          70
          <span class="danwei">￥</span>
        </p>
      </div>
      <div class="visit">
        <p class="visitTime">入园时间：8:00-16:00</p>
        <p class="visitTime li">建议游玩时间：1.5-2小时</p>
      </div>
    </div>
    <div class="playCont">
      <div class="playsTitle">
        <p class="platText">门票包含景点：</p>
      </div>
      <div class="visitWays">
        <img src="/static/images/905.png" alt srcset>
      </div>
      <div class="visitWarning">
        <div class="buyTitle">购买须知</div>
        <div class="buyItem">
          <p class="buyText">1 逾期不可退；单笔订单不支持部分退款。</p>
        </div>
        <div class="buyItem">
          <p class="buyText">2 有效期：选择使用的日期当天有效；</p>
        </div>
      </div>
      <div class="buyItem">
        <p class="buyText">3 入园地址：明孝陵1-7号门；</p>
      </div>
      <div class="buyItem">
        <p class="buyText">
          4 订单疑问、发票等问题，请联系客服：
          <span class="telphone">4008045108</span>
        </p>
      </div>
    </div>
    <div class="playJianjie">
      <div class="playsTitle">
        <p class="platTexts">景区简介:</p>
      </div>
      <div class="visitImg">
        <img src="/static/images/2013.png" alt>
      </div>
      <div class="visitText">
        <p class="visitArea">
          明孝陵位于南京市玄武区紫金山南麓独龙阜玩珠峰下，东毗中山
          陵，南临梅花山，位于钟山风景名胜区内，是明太祖朱元璋与其
          皇后的合葬陵墓。因皇后马氏谥号“孝慈高皇后”，又因奉行孝治
          天下，故名“孝陵”。其占地面积达170余万平方米，是中国规模
          最大的帝王陵寝之一。
        </p>
      </div>
    </div>
    <div class="buyCar">
      <div class="carIcon">
        <img src="/static/images/car.png" alt srcset>
      </div>
      <div class="msg">0</div>
    </div>
    <div class="carBottom">
      <div class="buyBtn">立即购买</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style>
.Box {
  position: relative;
}

.headerImg {
  width: 100%;
  height: 218px;
  background: #ccc;
}
.placeBox {
  width: 93%;
  position: absolute;
  top: 172.5px;
  left: 12px;
  background: #fff;
  border-bottom: 1px dashed #0c7a6c;
}
.placeName {
  width: 84%;
  height: 48px;
  margin: 0 auto;
  display: flex;
  margin-bottom: 5px;
}
.visit {
  height: 80px;
}
.placenames {
  margin-top: 17px;
  font-size: 18px;
}
.visitTime {
  margin-left: 27px;
  font-size: 12px;
}
.pricePlace {
  margin-top: 17px;
  font-size: 24px;
  color: #0c7a6c;
  margin-left: 149px;
}
.danwei {
  font-size: 15px;
}
.visitTime {
  font-size: 12px;
  margin-bottom: 10px;
}
.platText {
  color: #333333;
  font-size: 12px;
}
.playCont {
  width: 100%;
  margin-top: 100px;
  margin-left: 25px;
}
.visitWays {
  width: 327px;
  height: 130px;
  margin-top: 8px;
}
.visitWarning {
  margin-top: 28px;
  width: 100%;
}
.buyTitle {
  font-size: 15px;
  margin-bottom: 6px;
}
.buyText {
  font-size: 12px;
  margin-bottom: 6px;
}
.telphone {
  color: #0c7a6c;
}
.playJianjie {
  width: 100%;
  margin-top: 28px;
  margin-left: 12px;
  margin-bottom: 100px;
}
.visitImg {
  width: 351px;
  height: 227px;
  margin-top: 14px;
}
.platTexts {
  font-size: 15px;
}
.visitText {
  width: 91%;
}
.visitArea {
  font-size: 12px;
  line-height: 22px;
}
.carBottom {
  width: 99%;
  height: 62px;
  position: fixed;
  z-index: 2;
  bottom: 0;
  border-top: 2px solid #0c7a6c;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.buyBtn {
  width: 351px;
  height: 42px;
  border: 1px solid #0c7a6c;
  text-align: center;
  color: #0c7a6c;
  line-height: 42px;
}
.buyCar {
  width: 51px;
  height: 51px;
  position: fixed;
  background: #0c7a6c;
  z-index: 1;
  bottom: 150px;
  right: 0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carIcon {
  width: 33px;
  height: 30px;
}
.msg {
  width: 15px;
  height: 15px;
  background: #f6705a;
  position: absolute;
  border-radius: 50%;
  top: 2px;
  right: 2px;
  font-size: 9px;
  color: #fff;
  text-align: center;
}
</style>
