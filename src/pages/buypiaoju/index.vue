<template>
  <div class="box">
    <div class="piaoTop">
      <img src="/static/images/1302.png" alt>
    </div>
     <div class="discount">
         <div class=topImg1>
            <img src="/static/images/1303.png" alt>
         </div>
         <div class="changeSever">
             <div class="chageTime">变更时间</div>
              <div class="chageTime">退 票</div>
         </div>
     </div>
    <div class="piaoContainer">
      <div class="piaojuItem">
        <div class="leftItem">
          <h1 class="typePiao">成人票</h1>
          <div class="use">
            <p class="useStatue">未使用</p>
            <p class="useInfo">使用须知</p>
          </div>
        </div>
        <div class="rightItem">
          <div class="priceUse">
            <p class="usePrice">100￥</p>
            <div class="userbtn">使用</div>
          </div>
        </div>
      </div>
      <div class="piaojuItem">
        <div class="leftItem">
          <h1 class="typePiao">儿童票</h1>
          <div class="use">
            <p class="useStatue">未使用</p>
            <p class="useInfo">使用须知</p>
          </div>
        </div>
        <div class="rightItem">
          <div class="priceUse">
            <p class="usePrice">50￥</p>
            <div class="userbtn">使用</div>
          </div>
        </div>
      </div>
      <div class="piaojuItem">
        <div class="leftItem">
          <h1 class="typePiao">老人票</h1>
          <div class="use">
            <p class="useStatue">未使用</p>
            <p class="useInfo">使用须知</p>
          </div>
        </div>
        <div class="rightItem">
          <div class="priceUse">
            <p class="usePrice">50￥</p>
            <div class="userbtn">使用</div>
          </div>
        </div>
      </div>
      <p class="tip">温馨提示：请游客在预约时间内入园，以免过时而错过景区开放时间</p>
      <div class="activeBottomboder">
        <img src="/static/images/1427.png" alt>
      </div>
    </div>
    <div class="conatierBox">
      <div class="rowItem">
        <div class="colItem">
          <div class="topImg">
            <img src="/static/images/1207.png" alt>
          </div>
          <div class="footWorld">
            <h1 class="placeName">灵谷寺景区</h1>
            <div class="placebuy">
              <div class="buyIcon">
                <img src="/static/images/10_17.png" alt>
              </div>
              <p class="buyprice">30</p>
              <div class="buyBtn">购买</div>
            </div>
          </div>
        </div>
        <div class="colItem sp">
          <div class="topImg">
            <img src="/static/images/1209.png" alt>
          </div>
          <div class="footWorld">
            <h1 class="placeName">灵谷寺景区</h1>
            <div class="placebuy">
              <div class="buyIcon">
                <img src="/static/images/10_17.png" alt>
              </div>
              <p class="buyprice">30</p>
              <div class="buyBtn">购买</div>
            </div>
          </div>
        </div>
      </div>
       <div class="rowItem">
        <div class="colItem">
          <div class="topImg">
            <img src="/static/images/1207.png" alt>
          </div>
          <div class="footWorld">
            <h1 class="placeName">灵谷寺景区</h1>
            <div class="placebuy">
              <div class="buyIcon">
                <img src="/static/images/10_17.png" alt>
              </div>
              <p class="buyprice">30</p>
              <div class="buyBtn">购买</div>
            </div>
          </div>
        </div>
        <div class="colItem sp">
          <div class="topImg">
            <img src="/static/images/1209.png" alt>
          </div>
          <div class="footWorld">
            <h1 class="placeName">灵谷寺景区</h1>
            <div class="placebuy">
              <div class="buyIcon">
                <img src="/static/images/10_17.png" alt>
              </div>
              <p class="buyprice">30</p>
              <div class="buyBtn">购买</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.piaoTop {
  width: 100%;
  height: 74px;
}
.box{
    position: relative;
}
img {
  width: 100%;
  height: 100%;
}
.discount {
  width: 93.6%;
  height: 96px;
  position: absolute;
  top:20px;
  left: 12px;
  box-shadow: 0 0 5px #ccc;
}
.piaoContainer {
  width: 84%;
  height: 327px;
  margin: 44px auto;
  padding-top: 22px;
  box-shadow: 0 0 5px #ccc;
}
.piaojuItem {
  height: 95px;
  display: flex;
  border-bottom: 1px solid #ccc;
}
.leftItem {
  width: 50%;
}
.rightItem {
  display: flex;
}
.typePiao {
  margin-top: 19px;
  font-size: 15px;
}
.useStatue {
  font-size: 12px;
  color: #666;
}
.use {
  display: flex;
  margin-top: 16px;
}
.useInfo {
  font-size: 12px;
  color: #0c7a6c;
  text-decoration: underline;
  margin-left: 15px;
}
.priceUse {
  width: 47px;
  height: 67px;
  margin-left: 119px;
  margin-top: 18px;
  margin-bottom: 15px;
}
.usePrice {
  font-size: 18px;
}
.userbtn {
  width: 41px;
  height: 22px;
  font-size: 12px;
  border: 1px solid #0c7a6c;
  text-align: center;
  line-height: 20px;
  margin-top: 8px;
}
.tip {
  font-size: 9px;
  color: #ccc;
  margin-top: 18px;
}
.activeBottomboder {
  height: 16px;
  margin-top: 25px;
}
.conatierBox {
  width: 93%;
  margin: 15px auto;
}
.rowItem {
  width: 100%;
  display: flex;
}
.colItem {
  width: 164px;
  box-shadow: 0 2px 2px #ccc;
}
.topImg {
  height: 141px;
  margin-top: 15px;
}
.topImg1{
  height: 65px; 
}
.footWorld {
  height: 95px;
}
.sp {
  margin-left: 12px;
}
.placeName {
  font-size: 14px;
  line-height: 26px;
  margin-left: 10px;
}
.placeInfo {
  font-size: 10px;
  text-align: center;
  color: #6666;
}
.btnImg {
  width: 103px;
  height: 27px;
  margin: 12px auto;
}
.buyIcon {
  width: 13px;
  height: 14px;
  margin-left: 15px;
  margin-top: -4.5px;
}
.placebuy {
  display: flex;
}
.buyprice {
  font-size: 12px;
  margin-left: 5px;
}
.buyBtn {
  width: 38px;
  height: 20px;
  border: 1px solid #0c7a6c;
  font-size: 10px;
  text-align: center;
  color: #0c7a6c;
  line-height: 20px;
  margin-left: 61px;
}
.changeSever{
    height: 33px;
    display: flex;
    font-size: 12px;
    text-align: center;
}
.chageTime{
    width: 50%;
}
</style>
