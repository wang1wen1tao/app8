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
          <p class="successText">预约成功</p>
          <p class="successWord">请到个人中心“我的预约”中查看</p>
        </div>
        <div class="btngrup">
          <div class="btnItem " @click="gobuypiao">
            <img src="/static/images/228.png" alt>
          </div>
          <div class="btnItem li" @click="jumpyuyue">
            <img src="/static/images/210.png" alt>
          </div>
        </div>
      </div>
    </div>
    <div class="successMap">
      <img src="/static/images/216.png" alt>
    </div>
    <p class="title">钟山龙蟠，石头虎踞，领略不一样的钟山风光</p>
    <div class="nullline"></div>
    <div class="successfoot">
      <div class="navconTop">
        <div class="conImg">
          <img src="/static/images/222.png" alt srcset>
        </div>
        <div class="context">
          <h1 class="titleHeader">必去景点一网打尽·从明朝穿越到民国</h1>
          <p class="conword">
            一座紫金山横跨六朝、明初、民国千年人类文
            明历史在钟山领略十朝都会的金陵王气
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
      <div class="navconTop">
        <div class="conImg">
          <img src="/static/images/223.png" alt srcset>
        </div>
        <div class="context">
          <h1 class="titleHeader">访古瞻仰休闲游</h1>
          <p class="conword">
            “一座中山陵，半部民国史”从空中俯瞰中山陵
            如自由钟卧在山间，蓝色琉璃顶、白色花..
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
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    gobuypiao(){
     wx.switchTab({ url: '../luxian/main' });
    },
    jumpyuyue(){
      wx.navigateTo({ url: '../mineyueyue/main' });
    }
  },
};
</script>
<style>
.successTop {
  width: 100%;
  height: 188px;
  display: flex;
  flex-direction: column;
}
.successMap {
  width: 93%;
  margin: 15px auto;
  height: 105px;
}
.title {
  width: 93%;
  margin: 15px auto;
  text-align: center;
  color: #0c7a6c;
  font-size: 14px;
  text-decoration: #0c7a6c;
}
.nullline {
  width: 69%;
  margin: -12px auto;
  height: 1px;
  background: #0c7a6c;
}
.navconTop {
  width: 93%;
  margin: 28px auto;
  height: 134px;
  display: flex;
}
img {
  width: 100%;
  height: 100%;
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
.li{
   margin-left: 39px; 
}
</style>
