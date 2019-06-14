<template>
  <div class="box">
    <div class="sureContain">
      <div class="rowPlace">
        <div class="rowFirst">
          <div class="priceIcon">
              <img src="/static/images/2008.png" alt="">
          </div>
          <p class="placeName">钟山风景区—套票</p>
          <p class="orderTime">【当天可订】</p>
          <p class="orderPrice">
            <span class="dianwei">￥</span>100
          </p>
        </div>
        <div class="rowSecond">
          <div class="safeIcon">
              <img src="/static/images/1103.png" alt="">
          </div>
          <p class="safeText">使用提示</p>
          <p class="smallText">7:00前可用今日票 出票后可立即入园</p>
        </div>
      </div>
      <div class="rowListen">
        <div class="rowFirst">
          <p class="soundText">语音讲解</p>
          <p class="soundTextarea">（您可以同时购买景区相关讲解）</p>
          <div class="moreIcon">
               <img src="/static/images/1107.png" alt="">
          </div>
        </div>
        <div class="rowSecond">
          <div class="soundBox">
            <p class="soundPlace">灵谷寺</p>
          </div>
          <p class="orderPrice1">
            <span class="dianwei1">￥</span>10
          </p>
        </div>
      </div>
      <div class="rowPricemsg">
        <div class="rowOne">
          <p class="priceMsg">门票信息</p>
        </div>
        <div class="rowItem">
          <p class="itemName">门票</p>
          <p class="placeItem li">明孝陵+</p>
          <p class="placeItem">美龄宫+</p>
          <p class="placeItem">灵谷寺+</p>
          <p class="placeItem">音乐台套票</p>
        </div>
        <div class="rowItem">
          <div class="colleft">
            <p class="itemName">票种</p>
          </div>
          <div class="colright">
            <p class="typeText">成人票</p>
          </div>
        </div>
        <div class="rowItem">
          <div class="colleft">
            <p class="itemName">使用日期</p>
          </div>
          <div class="colright">
            <p class="typeText">2019-05-18</p>
          </div>
        </div>
        <div class="rowItem">
          <div class="colleft">
            <p class="itemName">购买张数</p>
          </div>
          <div class="colright">
            <div class="selnumber">
              <div class="cutnumber">-</div>
              <input type="text" value="0" class="number">
              <div class="addnumber">+</div>
            </div>
          </div>
        </div>
      </div>
      <div class="rowPricemsg so">
        <div class="rowOne">
          <p class="priceMsg">购票人信息</p>
        </div>
        <div class="rowItem">
          <div class="colleft">
            <p class="itemName">姓名</p>
          </div>
          <div class="colright">
            <p class="typeText">张晓雪</p>
          </div>
        </div>
        <div class="rowItem">
          <div class="colleft">
            <p class="itemName">证件类型</p>
          </div>
          <div class="colright">
            <p class="typeText">身份证</p>
          </div>
        </div>
        <div class="rowItem">
          <div class="colleft">
            <p class="itemName">证件号码</p>
          </div>
          <div class="colright">
            <p class="typeText">11058978785689</p>
          </div>
        </div>
        <div class="rowItem">
          <div class="colleft">
            <p class="itemName">联系电话</p>
          </div>
          <div class="colright">
            <p class="typeText">18898878987</p>
          </div>
        </div>
      </div>
    </div>
    <div class="carBottom">
      <div class="bottomLeft">
        <div class="jieSuai">
          <div class="heji">合计:</div>
          <div class="hejiPrice">￥100</div>
        </div>
      </div>
      <div class="bottomRight">去结算</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
.box {
  margin-bottom: 20px;
}
.sureContain {
  width: 93.6%;
  margin: 14px auto;
  border-top: 5px solid #0c7a6c;
}
.rowPlace {
  height: 90px;
  box-shadow: 0 0 3px #ccc;
}
.rowFirst {
  width: 310px;
  height: 50%;
  border-bottom: 1px dashed #0c7a6c;
  margin: 0 auto;
  display: flex;
}
.priceIcon {
  width: 17px;
  height: 17px;
  margin-top: 10px;
}
img{
    width: 100%;
    height: 100%;
}
.placeName {
  font-size: 16px;
  line-height: 37.5px;
  margin-left: 12px;
  color: #0c7a6c;
}
.orderTime {
  font-size: 10px;
  line-height: 39px;
  color: #0c7a6c;
}
.safeText {
  font-size: 11px;
  line-height: 37.5px;
  margin-left: 12px;
  color: #666666;
}
.smallText {
  font-size: 10px;
  line-height: 37.5px;
  margin-left: 12px;
  color: #666666;
}
.dianwei {
  font-size: 15px;
}
.orderPrice {
  font-size: 30px;
  color: #0c7a6c;
  margin-left: 23.5px;
}
.rowSecond {
  width: 310px;
  height: 50%;
  margin: 0 auto;
  display: flex;
}
.safeIcon,
.moreIcon {
  width: 13px;
  height: 13px;
  margin-top: 6px;
}
.rowListen {
  height: 90px;
  box-shadow: 0 0 3px #ccc;
  margin-top: 15px;
}
.soundText {
  font-size: 14px;
  color: #333;
  line-height: 37.5px;
}
.soundTextarea {
  font-size: 10px;
  color: #666666;
  line-height: 39px;
  margin-left: 12px;
}
.moreIcon {
  margin-left: 70px;
}
.soundPlace {
  font-size: 16px;
  line-height: 39px;
  color: #0c7a6c;
}
.soundBox {
  width: 283px;
}
.dianwei1 {
  font-size: 12px;
  line-height: 23px;
}
.orderPrice1 {
  font-size: 16px;
  color: #0c7a6c;
  margin-left: 23.5px;
  line-height: 33px;
}
.rowPricemsg {
  height: 180px;
  box-shadow: 0 0 5px #ccc;
  margin-top: 15px;
}
.rowOne {
  width: 310px;
  height: 20%;
  border-bottom: 1px dashed #0c7a6c;
  margin: 0 auto;
  display: flex;
}
.priceMsg {
  font-size: 13px;
  color: #333;
  line-height: 33.5px;
}
.rowItem {
  width: 310px;
  height: 20%;
  margin: 0 auto;
  display: flex;
}
.itemName,
.placeItem {
  font-size: 12px;
  color: #656666;
  line-height: 37.5px;
}
.placeItem {
  color: #0c7a6c;
}
.li {
  margin-left: 91px;
}
.colleft {
  width: 234px;
}
.colright {
  width: 82px;
}
.typeText {
  font-size: 12px;
  line-height: 37.5px;
  text-align: right;
}
.selnumber {
  width: 100px;
  height: 30px;
  display: flex;
}
.cutnumber,
.number,
.addnumber {
  width: 38px;
  height: 30px;
  text-align: center;
  font-size: 18px;
  border: 1px solid #ccc;
}
.so{
  margin-bottom: 80px;
}
.carBottom {
  width: 99%;
  height: 62px;
  position: fixed;
  z-index: 2;
  bottom: 0;
  border: 2px solid #0c7a6c;
  display: flex;
}
.bottomLeft {
  width: 268px;
  display: flex;
  background: #fff;
}
.bottomRight {
  width: 106px;
  height: 100%;
  background: #0c7a6c;
  text-align: center;
  font-size: 18px;
  color: #fff;
  line-height: 64px;
}
.jieSuai {
  display: flex;
}
.hejiPrice {
  line-height: 62px;
  color: #0c7a6c;
  margin-left: 12px;
}
.heji {
  font-size: 15px;
  line-height: 62px;
  margin-left: 10px;
}
</style>
