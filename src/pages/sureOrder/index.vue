<template>
  <div>
    <div class="orderList">
      <div class="orderItem">
        <div class="orderLeft">
          <div class="rowOne">
            <div class="yuyinIcon">
              <img src="/static/images/2008.png" alt>
            </div>
            <p class="placeName">明孝陵语音讲解票</p>
          </div>
          <div class="rowTwo">
            <p class="userDate">使用日期</p>
          </div>
          <div class="rowTwo">
            <p class="userDate">购买张数</p>
          </div>
        </div>
        <div class="orderRight">
          <div class="rowPrice">10￥</div>
          <div class="rowTime">2019-05-18</div>
          <div class="rownumber">
            <div class="selnumber">
              <div class="cutnumber">-</div>
              <input type="text" value="0" class="number">
              <div class="addnumber">+</div>
            </div>
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
export default {};
</script>
<style scoped>
.orderList {
  width: 93.6%;
  margin: 14px auto;
  border-top: 5px solid #0c7a6c;
}
.orderItem {
  height: 133px;
  box-shadow: 0 0 5px #ccc;
  display: flex;
}
.orderLeft {
  width: 234px;
}
.rowOne {
  display: flex;
}
.yuyinIcon {
  width: 20px;
  height: 15px;
  margin-left: 16px;
  margin-top: 8px;
}
.placeName {
  color: #0c7a6c;
  font-size: 16px;
  font-weight: bold;
  line-height: 37px;
  margin-left: 7.5px;
}
img {
  width: 100%;
  height: 100%;
}
.userDate {
  margin-left: 16px;
  margin-top: 14px;
  color: #656666;
  font-size: 12px;
}
.orderRight {
  width: 105px;
}
.rowPrice {
  text-align: right;
  line-height: 39px;
  color: #0c7a6c;
}
.rowTime {
  line-height: 35px;
  font-size: 12px;
  text-align: right;
}
.selnumber {
  width: 120px;
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
