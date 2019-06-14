<template>
  <div>
    <div class="activeHeader">
        <img src="/static/images/1403.png" alt="">
    </div>
    <div class="activeContainer">
      <h1 class="activeTitle">南京钟山假日音乐会</h1>
      <div class="sailPrice">
        <div class="sailImg">
            <img src="/static/images/1416.png" alt="">
        </div>
        <div class="sailText">订票</div>
      </div>
      <div class="clean"></div>
      <p class="smallTitle">--音乐不打烊</p>
      <div class="activeNav">
        <div class="activeItem">
          <div class="activePlace">
            <div class="activeImg">
                <img src="/static/images/1410.png" alt="">
            </div>
            <p class="activeText">活动地点：</p>
            <p class="placeName">音乐台</p>
          </div>
          <div class="activePlace">
            <div class="activeImg">
                 <img src="/static/images/1412.png" alt="">
            </div>
            <p class="activeText">活动时长：</p>
            <p class="placeName">4S</p>
          </div>
        </div>
        <div class="activeItem">
          <div class="activePlace">
            <div class="activeImg">
                 <img src="/static/images/1416.png" alt="">
            </div>
            <p class="activeText">活动门票：</p>
            <p class="placeName">10￥</p>
          </div>
          <div class="activePlace">
            <div class="activeImg">
                 <img src="/static/images/1418.png" alt="">
            </div>
            <p class="activeText">活动时间：</p>
            <p class="placeName">2：30下午</p>
          </div>
        </div>
      </div>
      <div class="activeInfo">
        <h1 class="activedetail">活动详情</h1>
        <p class="textArea">
          黑桃弦乐六重奏组合，成员来自德国汉堡国际音乐学院、南京艺
          术学院等知名高校。曾受邀参加中国流行音乐会，出访法国巴黎
          南京周活动，与著名作曲家何占豪、著名钢琴演奏大师郎朗同台
          演出，获得专业人士的一致好评。组合曾获得过教育部主办的全
          国大学生艺术展演比赛金奖，江苏省青少年大赛青年组金奖。
        </p>
        <div class="infoImg">
              <img src="/static/images/1422.png" alt="">
        </div>
        <div class="mapnav">
          <h1 class="activedetail">地图导航</h1>
          <div class="activeMap">
                <img src="/static/images/1425.png" alt="">
          </div>
        </div>
        <div class="activeBottomboder">
              <img src="/static/images/1427.png" alt="">
        </div>
        <div class="activeFoot">
          <p class="footText">
            该音乐会为户外演出
            如若遇雨则抱憾停演
            调整演出信息请关注
            南京森林音乐会官方微信
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.activeHeader {
  width: 100%;
  height: 282px;
}
.activeContainer {
  width: 93.6%;
  margin: 18px auto;
}
img{
    width: 100%;
    height: 100%;
}
.activeTitle {
  font-size: 17px;
  color: #000000;
  float: left;
}
.sailPrice {
  display: flex;
  float: right;
}
.sailImg {
  width: 25px;
  height: 19px;
}
.sailText {
  color: #0c7a6c;
  font-size: 12px;
}
.clean {
  clear: both;
}
.smallTitle {
  color: #000000;
  font-size: 12px;
  margin-top: 14px;
}
.activeNav {
  height: 72px;
}
.activeItem {
  height: 36px;
  display: flex;
}
.small {
  font-size: 9px;
  color: #b84646;
}
.activePlace {
  width: 50%;
  display: flex;
  margin-top: 11px;
}
.activeImg {
  width: 31px;
  height: 24px;
  background: #ccc;
}
.activeText {
  font-size: 12px;
  color: #666;
  margin-left: 12px;
  line-height: 28px;
}
.placeName {
  font-size: 15px;
  color: #333333;
  line-height: 28px;
}
.activeInfo {
  margin-top: 20px;
}
.activedetail {
  font-size: 15px;
}
.textArea {
  height: 100px;
  margin-top: 15px;
  font-size: 12px;
  color: #333333;
}
.infoImg {
  height: 230px;
  background: #0c7a6c;
}
.mapnav {
  margin-top: 17px;
}
.activeMap {
  height: 120px;
  background: #b84646;
}
.activeBottomboder {
  height: 16px;
  margin-top: 25px;
}
.activeFoot {
  height: 96px;
  border: 1px dashed #0c7a6c;
  margin-top: 15px;
}
.footText{
    width: 123.5px;
    margin: 0 auto;
    color:#666666;
    font-size:12px;
    text-align: center;
    line-height: 20px;
}
</style>
