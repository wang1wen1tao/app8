<template>
  <div>
    <div class="bannerImg">
      <img src="/static/images/17.png" alt srcset>
    </div>
    <div class="container">
      <div>
        <div class="navTab">
          <div class="navItem">春风花雨</div>
          <div class="navItem">金陵一梦</div>
          <div class="navItem">民国之旅</div>
          <div class="navItem">四百八十寺</div>
        </div>
        <div class="navCon">
          <div class="navconTop">
            <div class="conImg">
              <img src="/static/images/15.png" alt srcset>
            </div>
            <div class="context">
              <h1 class="titleHeader">赏花寻味金陵梦</h1>
              <p class="conword">
                “一座中山陵，半部民国史”从空中俯瞰中山陵
                如自由钟卧在山间，蓝色琉璃顶、白色花.....
              </p>
              <div class="jianshao">
                <div class="jieshao">
                  <p class="typeName">全程:</p>
                  <p class="typeVa">6.0公里</p>
                </div>
                <div class="jieshao1">
                  <p class="typeName">景点:</p>
                  <p class="typeVa">4</p>
                </div>
                <div class="jieshao2">
                  <p class="typeName">浏览时长:</p>
                  <p class="typeVa">3小时</p>
                </div>
              </div>
              <div class="goWay">
                <div class="imgIconItem">
                  <img src="/static/images/11.png" alt>
                </div>
                <div class="imgIconItem spa">
                  <img src="/static/images/10.png" alt>
                </div>
                <div class="imgIconItem spa">
                  <img src="/static/images/1_12.png" alt>
                </div>
              </div>
            </div>
          </div>
          <div class="navconfoot">
            <div class="navconItem">
              <div class="star"><img src="/static/images/103.png" alt="" srcset=""></div>
              <p class="listword">梅花谷、梅花妆、惟秀亭、春摄满园驿站</p>
            </div>
            <div class="navconItem ls">
             <div class="star"><img src="/static/images/103.png" alt="" srcset=""></div>
              <p class="listword">每年二、三月梅花盛开季，都会举办国际南京梅花节</p>
            </div>
            <div class="navconItem ls">
             <div class="star"><img src="/static/images/103.png" alt="" srcset=""></div>
              <p class="listword">春回大地，沐风赏花带你体验自然之美</p>
            </div>
          </div>
        </div>

        <div class="placeList">
          <div class="placeBorder">
            <img src="/static/images/1_19.png" alt srcset>
          </div>
          <div class="placeContainer">
            <div class="placeitem">
              <div class="placetext">
                <h1 class="placeNmae">梅花谷</h1>
                <div class="placeType">
                  <p class="typeItem">赏梅公园</p>
                  <p class="typeItem1">四大梅园之首</p>
                </div>
                <p class="placeInfo">
                  3号门入口（陵园路直行）<br>
                  始建于1929年，“天下第一梅山"
                </p>
                <p class="jili">直线距离1.2公里，预计步行15分钟</p>
              </div>
              <div class="placeImg">
                <img src="/static/images/1_22.png" alt="" srcset="">
              </div>
            </div>
            <div class="placeitem">
              <div class="placetext">
                <h1 class="placeNmae">梅花妆韵</h1>
                <div class="placeType">
                  <p class="typeItem">寿阳公主</p>
                  <p class="typeItem1">花落成妆</p>
                </div>
                <p class="placeInfo">
                  蕊落眉弯出嫣，闺楼竟画香额。<br>
                  几多贵胄王孙，一点朱砂失魂。
                </p>
                <p class="jili">直线距离468米，预计步行5分钟</p>
              </div>
              <div class="placeImg">
                  <img src="/static/images/1_25.png" alt="" srcset="">
              </div>
            </div>
            <div class="placeitem">
              <div class="placetext">
                <h1 class="placeNmae">惟秀亭</h1>
                <div class="placeType">
                  <p class="typeItem">亭宜远望</p>
                  <p class="typeItem1">惟秀永春</p>
                </div>
                <p class="placeInfo">
                  园中惟秀风寂寂，疏柳暗鸦嘶。<br>
                  斜阳瑟缩，阵寒林上"<br>
                  目送青天还
                </p>
                <p class="jili">直线距离1.5公里，预计步行18分钟</p>
              </div>
              <div class="placeImg">
                <img src="/static/images/1_27.png" alt="" srcset="">
              </div>
            </div>
            <div class="placeitem">
              <div class="placetext">
                <h1 class="placeNmae">春摄满园驿站</h1>
                <div class="placeType">
                  <p class="typeItem">商飙别馆</p>
                  <p class="typeItem1">金陵四十八景之一</p>
                </div>
                <p class="placeInfo">
                 始建于南朝齐武帝时期，改为“茶馆<br>
                 集摄影文化展览交流、休闲休憩
                 紫金山动植物资源展示等功能于一体
                </p>
              </div>
              <div class="placeImg">
                  <img src="/static/images/1_31.png" alt="" srcset="">
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

  methods: {}
};
</script>
<style scoped>
.bannerImg {
  width: 100%;
  height: 140px;
  background: #ccc;
}
img {
  width: 100%;
  height: 100%;
}
.container {
  width: 91.2%;
  margin: 0 auto;
}
.navTab {
  height: 50px;
  display: flex;
}
.navItem {
  width: 40%;
  font-size: 15px;
  margin-top: 15px;
  text-align: center;
}
.navItem:hover {
  width: 40%;
  font-size: 15px;
  color: #0c7a6c;
  text-align: center;
  border-bottom: 1px solid #0c7a6c;
}
.navCon {
  height: 203px;
}
.navconTop {
  height: 134px;
  display: flex;
}
.conImg {
  width: 93px;
  background: #ccc;
}
.context {
  width: 252px;
}
.titleHeader {
  font-size: 12px;
  color: #333;
  margin-left: 8px;
  line-height: 40px;
}
.conword {
  font-size: 10px;
  color: #666;
  margin-left: 8px;
}
.jianshao {
  height: 15px;
  margin-top: 18px;
  margin-left: 8px;
  display: flex;
}
.jieshao1 {
  width: 56px;
  height: 13px;
  display: flex;
}
.jieshao {
  width: 78px;
  height: 13px;
  display: flex;
}
.jieshao2 {
  width: 85px;
  height: 13px;
  display: flex;
}
.typeName {
  font-size: 10px;
}
.typeVa {
  color: #0c7a6c;
  font-size: 12px;
  margin-left: 6px;
  line-height: 12px;
}
.goWay {
  width: 107px;
  height: 15px;
  margin-left: 8px;
  margin-top: 14px;
  display: flex;
}
.imgIconItem {
  width: 17px;
  height: 13px;
}
.spa {
  margin-left: 20px;
}
.navconfoot {
  height: 92px;
  margin-top: 20px;
}
.navconItem {
  height: 22px;
  display: flex;
}
.ls {
  margin-top: 8px;
}
.star {
  width: 12px;
  height: 12px;
  margin: -2.5px 3px;
}
.listword {
  font-size: 12px;
  color: #666;
}
.placeList {
  height: 499px;
  margin-top: 54px;
  display: flex;
  margin-bottom: 14px;
}
.placeBorder {
  width: 18px;
  background: #ccc;
  margin-left: 12px;
}
.placeContainer {
  width: 305px;
}
.placeType{
  margin-top: -6px;
}
.placeitem {
  height: 120px;
  display: flex;
}
.placetext {
  width: 163px;
  height: 62px;
  margin-top: 26px;
  margin-left: 2px;
}
.placeNmae{
  font-size: 12px;
  color:#333333;
  font-weight: bold;
}
.typeItem,.typeItem1{
  font-size: 10px;
  color:#0c7a6c;
  display: inline-block;
  background: #c2e3e0;
}
.typeItem1{
  margin-left: 10px;
}
.placeInfo{
  font-size: 11px;
  color:#666
}
.placeImg{
  width: 120px;
  height: 80px;
  margin-left: 29px;
  margin-top: 28px;
}
.jili{
  font-size: 9px;
  color:#999999;
}
</style>
