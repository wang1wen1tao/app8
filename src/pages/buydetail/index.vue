<template>
  <div>
    <div class="sureContain" :style="'height:'">
      <div class="rowPlace">
        <div class="rowFirst">
          <div class="priceIcon">
            <img src="/static/images/2008.png" alt>
          </div>
          <p class="placeName">钟山风景区—套票</p>
          <p class="orderTime">【当天可订】</p>
          <p class="orderPrice">
            <span class="dianwei">￥</span>100
          </p>
        </div>
        <div class="rowSecond">
          <div class="safeIcon">
            <img src="/static/images/1103.png" alt>
          </div>
          <p class="safeText">使用提示</p>
          <p class="smallText">7:00前可用今日票 出票后可立即入园</p>
        </div>
      </div>
      <div class="rowTime">
        <div class="rowOne">
          <p class="dataName">使用日期</p>
        </div>
        <div class="rowTwo">
          <div class="colTime">
            <p class="colword">
              今天05-21
              不可订
            </p>
          </div>
          <div class="colTime li ss">
            <p class="colword z1">
              今天05-21
              不可订
            </p>
          </div>
          <div class="colTime li so">
            <p class="colword si">
              今天05-21
              不可订
            </p>
          </div>
          <div class="colTime li so">
            <p class="colword si">
              今天05-21
              不可订
            </p>
          </div>
        </div>
      </div>
      <div class="rowPrice">
        <div class="rowOne">
          <p class="dataName">门票</p>
        </div>
        <div class="rowTwos">
          <div class="placeDeatil">
            <p class="placeItem sp">明孝陵+</p>
            <p class="placeItem">美龄宫+</p>
            <p class="placeItem">灵谷寺+</p>
            <p class="placeItem">音乐台套票</p>
          </div>
        </div>
        <div class="rowThree">
          <div class="selectType">
            <p class="selectTitle">选择票种</p>
          </div>
          <div class="selectItem">
            <div class="selectLeft">
              <div class="leftOne">
                <p class="selectname">成人票</p>
                <p class="selectbuy">购买须知</p>
              </div>
              <div class="leftTwo">
                <div class="leftType">随时退</div>
                <div class="leftType sl">入园保障</div>
              </div>
            </div>
            <div class="selectRight">
              <div class="rightOne">
                <p class="orderPrice2">
                  <span class="dianwei">￥</span>100
                </p>
              </div>
              <div class="rightTwo">
                <div class="selnumber">
                  <div class="cutnumber">-</div>
                  <input type="text" value="0" class="number">
                  <div class="addnumber">+</div>
                </div>
              </div>
            </div>
          </div>
          <div class="selectItem">
            <div class="selectLeft">
              <div class="leftOne">
                <p class="selectname">优待票（学生/儿童票）</p>
                <p class="selectbuy">购买须知</p>
              </div>
              <div class="leftTwo">
                <div class="leftType">不支持改签</div>
              </div>
            </div>
            <div class="selectRight">
              <div class="rightOne">
                <p class="orderPrice2">
                  <span class="dianwei">￥</span>50
                </p>
              </div>
              <div class="rightTwo">
                <div class="selnumber">
                  <div class="cutnumber">-</div>
                  <input type="text" value="0" class="number">
                  <div class="addnumber">+</div>
                </div>
              </div>
            </div>
          </div>
          <div class="selectItem">
            <div class="selectLeft">
              <div class="leftOne">
                <p class="selectname">成人票</p>
                <p class="selectbuy">购买须知</p>
              </div>
              <div class="leftTwo">
                <div class="leftType">随时退</div>
                <div class="leftType sl">入园保障</div>
              </div>
            </div>
            <div class="selectRight">
              <div class="rightOne">
                <p class="orderPrice2">
                  <span class="dianwei">￥</span>100
                </p>
              </div>
              <div class="rightTwo">
                <div class="selnumber">
                  <div class="cutnumber">-</div>
                  <input type="text" value="0" class="number">
                  <div class="addnumber">+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  onLoad() {
    this.getHeight();
    console.log(this);
  },
  methods: {
    getHeight() {
      console.log("sxaxas");
    }
  }
};
</script>
<style>
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
img {
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
.orderPrice,
.orderPrice2 {
  font-size: 30px;
  color: #0c7a6c;
  margin-left: 23.5px;
}
.orderPrice2 {
  font-size: 15px;
  line-height: 40px;
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
.rowTime {
  height: 135px;
  box-shadow: 0 0 5px #ccc;
}
.rowOne {
  width: 310px;
  height: 50px;
  border-bottom: 1px dashed #0c7a6c;
  margin: 0px auto;
  display: flex;
}
.dataName {
  font-size: 15px;
  color: #0c7a6c;
  line-height: 60px;
}
.rowTwo {
  width: 310px;
  height: 50px;
  display: flex;
  margin: 15px auto;
}
.colTime {
  width: 64px;
  border: 0.5px solid #ccc;
}
.colword {
  text-align: center;
  color: #999999;
  font-size: 12px;
  line-height: 23px;
}
.li {
  margin-left: 12px;
}
.so {
  border: 0.5px solid #0c7a6c;
}
.si {
  color: #0c7a6c;
}
.ss {
  background: #0c7a6c;
}
.z1 {
  color: #fff;
}
.rowPrice {
  height: 372px;
  box-shadow: 0 0 5px #ccc;
}
.placeDeatil {
  width: 235px;
  height: 31px;
  background: #0c7a6c;
  margin-top: 15px;
  margin-left: 21px;
  display: flex;
}
.placeItem {
  font-size: 12px;
  color: #fff;
  line-height: 31.5px;
}
.sp {
  margin-left: 16px;
}
.rowThree {
  width: 310px;
  height: 341px;
  margin: 15px auto;
}
.selectType {
  height: 45px;
  border-bottom: 1px dashed #ccc;
}
.selectTitle {
  font-size: 14px;
  line-height: 53px;
}
.selectItem {
  display: flex;
}
.selectLeft {
  width: 227px;
  display: flex;
  flex-direction: column;
}
.leftOne {
  display: flex;
  margin-top: 15px;
}
.selectname {
  font-size: 15px;
}
.selectbuy {
  font-size: 12px;
  color: #0c7a6c;
  text-decoration: underline;
  margin-left: 12px;
  line-height: 20px;
}
.leftTwo {
  width: 100%;
  display: flex;
}
.leftType {
  width: 50px;
  height: 12.5px;
  font-size: 9px;
  text-align: center;
  border: 1px solid #0c7a6c;
  margin-top: 19px;
  color: #0c7a6c;
}
.sl {
  margin-left: 12px;
}
.selectRight {
  width: 90px;
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
</style>
