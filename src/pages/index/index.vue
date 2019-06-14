<template>
  <div class="conBox" :style="Height">
    <div class="colOne">
      <div class="boxItem" @click="jumpToactive">
        <img src="/static/images/102.png" alt srcset>
      </div>
      <div class="boxItemTwo" >
        <div class="boxtwoTop">
          <div class="iconImg">
            <img src="/static/images/61.png" alt srcset>
          </div>
          <p class="twoText">语音讲解</p>
          <div class="messCount">2</div>
        </div>
        <div class="boxtwoFoot">
          <p class="footNmuber">
            6
            <span class="smalltitle">段</span>
          </p>
          <div class="lineNull"></div>
          <div class="boxJieshao">
            <p class="rowText">免费听讲解</p>
            <p class="rowSmall">全景区语音导览</p>
            <p class="lookTine">使用时间：5月10-5月12</p>
          </div>
          <div class="lisnBtn">
            <div class="listenInner">
              <p class="listenText">
                立即
                <br>收听
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="boxItemThree">
        <div class="boxthreeTop">
          <div class="threeIcon">
            <img src="/static/images/66.png" alt srcset>
          </div>
          <p class="threeText">必游路线</p>
        </div>
        <div class="boxthreeFoot">
          <div class="rightFoot">
            <p class="textLine">已选XXXX路线</p>
            <p class="textLu">全程5.0公里途径8个景点 浏览时间 2小时</p>
          </div>
          <div class="lisnBtn ri">
            <div class="listenInner">
              <p class="listenText">
                点击
                <br>领取
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="colTwo">
      <div class="boxFour">
        <div class="boxfourTop" @click="jumpTosellprice">
          <div class="iconImg">
            <img src="/static/images/63.png" alt srcset>
          </div>
          <p class="twoText">景点购票</p>
          <div class="messCount">2</div>
        </div>
        <div class="boxfourFoot">
          <p class="footNmuber">
            5
            <span class="smalltitle">￥</span>
          </p>
          <div class="lineNull"></div>
          <div class="boxJieshao">
            <p class="rowText">景区优惠券</p>
            <p class="rowSmall li">全景区无门槛使用</p>
            <p class="lookTine">使用时间：5月10-5月30</p>
          </div>
          <div class="lisnBtn li">
            <div class="listenInner">
              <p class="listenText">
                点击
                <br>领取
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="boxFive">
        <div class="boxfiveTop">
          <div class="IconImgs">
            <img src="/static/images/60.png" alt srcset>
          </div>
          <p class="fiveText">中山陵预约</p>
        </div>
        <div class="boxfiveFoot">
          <div class="fiveText1">
            <p class="rowText2">05-03 09:00-15:00</p>
            <p class="rowText3">您已成功预约 请按选择时间入园</p>
          </div>
        </div>
      </div>
      <div class="boxSix">
        <div class="sixIcon">
          <img src="/static/images/64.png" alt srcset>
        </div>
        <p class="sixText">个人中心</p>
      </div>
      <div class="boxSeven">
        <div class="sevenIcon">
          <img src="/static/images/65.png" alt srcset>
        </div>
        <p class="sevenText">钟山资讯</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userMsg: [],
      Height: "",
      Boxheight: ""
    };
  },
  onShow() {
    let self = this;
    wx.getSystemInfo({
      success: res => {
        self.Height = "height:" + res.windowHeight + "px";
      }
    });
  },
  methods: {
    jumpToactive(){
      wx.navigateTo({ url: '../active/main'});
    },
    jumpTosellprice(){
      console.log('asa')
      wx.navigateTo({ url: '../sellprice/main' });
    }
  },
};
</script>

<style scoped>
.conBox {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.colOne {
  width: 50%;
  height: 100%;
}
.colTwo {
  width: 50%;
  height: 100;
}
.boxOnecon {
  width: 86%;
  height: 54%;
  background: #fff;
}

.footNmuber {
  font-size: 35px;
  margin-left: 4%;
}
.boxItem,
.boxFour {
  height: 36.15%;
}
.boxFour {
  background: #0c7a6c;
}
.boxItem {
  display: flex;
  justify-content: center;
  align-items: center;
}
.boxthreeTop {
  height: 71%;
  display: flex;
  position: relative;
}
.boxthreeFoot {
  height: 29%;
  background: #ac6d13;
  display: flex;
  justify-content: center;
  align-items: center;
}

.boxItemTwo {
  height: 36.65%;
  background: #08a6d7;
}
.boxtwoTop {
  height: 77%;
  position: relative;
  color: #fff;
}
.boxtwoFoot {
  height: 23%;
  background: #067b9f;
  display: flex;
  align-items: center;
  color: #fff;
}

.boxItemThree {
  height: 27.2%;
  background: #e89319;
  color: #fff;
}
.boxfourTop {
  height: 75%;
  position: relative;
  color: #fff;
}
.boxfourFoot {
  height: 25%;
  background: #095a50;
  display: flex;
  align-items: center;
  color: #fff;
}
.boxFive {
  height: 30.15%;
  background: #f6705a;
  color: #fff;
}
.boxfiveTop {
  height: 75%;
  position: relative;
}
.boxfiveFoot {
  height: 25%;
  background: #b65343;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.boxSix {
  height: 22.3%;
  background: #1670bc;
  position: relative;
}
.boxSeven {
  height: 11.4%;
  background: #b27fc5;
  position: relative;
}
.iconImg {
  width: 30%;
  height: 28%;
  position: absolute;
  top: 28%;
  left: 32.5%;
}
.IconImgs {
  width: 48%;
  height: 43%;
  position: absolute;
  top: 21%;
  left: 26%;
}
.twoText {
  font-size: 21px;
  position: absolute;
  left: 24%;
  bottom: 23%;
}
.messCount {
  width: 20%;
  height: 21%;
  background: #f6705a;
  border-radius: 50%;
  position: absolute;
  top: 19%;
  right: 27%;
  font-size: 30px;
  text-align: center;
}
.smalltitle {
  font-size: 13px;
  margin-left: -4px;
}
.lineNull {
  width: 1.5px;
  height: 30px;
  background: #ccc;
  margin-left: 7px;
}
.boxJieshao {
  width: 34%;
  height: 62%;
  margin-left: 6%;
}
.rowText {
  width: 100%;
  height: 40%;
  font-size: 59%;
}
.rowSmall {
  font-size: 6px;
  text-align: center;
  height: 25%;
  background: #08a6d7;
  margin-top: 9%;
}
.lookTine {
  font-size: 30%;
  margin-top: 2%;
}
.lisnBtn {
  width: 20%;
  height: 75%;
  background: #08a6d7;
  margin-left: 7%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.iconImgfour {
  width: 30%;
  height: 28%;
  position: absolute;
  top: 28%;
  left: 32.5%;
}
.listenInner {
  width: 84%;
  height: 84%;
  border: 0.5px solid #fff;
  border-radius: 50%;
  font-size: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.li {
  background: #0c7a6c;
}
.fiveText {
  font-size: 21px;
  position: absolute;
  left: 24%;
  bottom: 11%;
}
.fiveText1 {
  width: 68%;
  height: 73%;
}
.rowText2 {
  font-size: 66%;
  height: 41%;
}
.rowText3 {
  font-size: 47%;
  height: 31%;
  margin-top: 2.9%;
}
.sixIcon {
  width: 23%;
  height: 36%;
  position: absolute;
  top: 18%;
  left: 40%;
}
.ri {
  background: #e89319;
}
.sixText {
  font-size: 21px;
  position: absolute;
  left: 29%;
  bottom: 20%;
  color: #fff;
}
.sevenIcon {
  width: 21%;
  height: 42%;
  position: absolute;
  left: 40%;
  top: 11%;
}
.sevenText {
  font-size: 21px;
  color: #fff;
  position: absolute;
  left: 29%;
  bottom: 5%;
}
.threeIcon {
  width: 84%;
  height: 41%;
  position: absolute;
  left: 6.4%;
  top: 20%;
}
.threeText {
  font-size: 21px;
  color: #fff;
  position: absolute;
  left: 24%;
  bottom: 10%;
}
.rightFoot {
  width: 67%;
  height: 52%;
}
.textLine {
  height: 46%;
  font-size: 52%;
}
.textLu {
  width: 100%;
  height: 25%;
  font-size: 30%;
  margin-top: 6%;
}
</style>
