<template>
  <div>
    <div
      class="successTop"
      style="background:url('/static/images/3.png');background-size:100% 100%"
    >
      <div class="succes">
        <div class="successIcon">
          <img src="/static/images/204.png" alt>
        </div>
        <div class="textArea">
          <p class="successText">购买成功</p>
          <p class="successWord">请到个人中心“我的预约”中查看</p>
        </div>
        <div class="btngrup">
          <div class="btnItem">
            <img src="/static/images/228.png" alt>
          </div>
          <div class="btnItem li">
            <img src="/static/images/1203.png" alt>
          </div>
        </div>
      </div>
    </div>
    <div class="successMap">
      <img src="/static/images/216.png" alt>
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
    </div>
  </div>
</template>
<style>
.successTop {
  width: 100%;
  height: 188px;
  display: flex;
  flex-direction: column;
}
.succes {
  width: 100%;
  height: 36.5px;
  margin-top: 55px;
  position: relative;
}
.successText {
  text-align: center;
  font-size: 20px;
  color: #0c7a6c;
  font-weight: bold;
}
.successWord {
  text-align: center;
  font-size: 10px;
  color: #0c7a6c;
}
.successIcon {
  width: 18px;
  height: 18px;
  background: #ccc;
  position: absolute;
  left: 128px;
  top: 5px;
}
.btngrup {
  width: 240px;
  height: 28px;
  margin: 33px auto;
  display: flex;
}
.btnItem {
  width: 101px;
}
.li {
  margin-left: 39px;
}
img {
  width: 100%;
  height: 100%;
}
.successMap {
  width: 93%;
  margin: 15px auto;
  height: 105px;
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
</style>
