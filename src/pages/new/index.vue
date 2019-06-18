<template>
  <div>
    <div class="newBox">
      <div class="search">
        <input
          class="search"
          type="text"
          placeholder="请输入关键字"
          placeholder-style="text-align:center;"
        >
        <div class="searchIcon">
          <img src="/static/images/search.png" alt>
        </div>
      </div>
      <div class="navTab">
        <div class="tab-tit">
          <a @click="msg=0" :class="{'cur':msg===0}">全部</a>
          <a @click="msg=1" :class="{'cur':msg===1}">旅游资讯</a>
          <a @click="msg=2" :class="{'cur':msg===2}">政务信息</a>
          <a @click="msg=3" :class="{'cur':msg===3}">媒体聚焦</a>
          <a @click="msg=4" :class="{'cur':msg===4}">通知公告</a>
        </div>
        <!--根据msg的值显示div,如果msg等于0，第一个div显示，其它三个div不显示。
        如果msg等于1，第二个div显示，其它三个div不显示。以此类推-->
        <div class="tab-con">
          <div v-show="msg===0">
            <div class="newHoday">
              <p class="titleName">Follow me!四月最后一个假期，来听天籁美声~</p>
              <p class="smallTime">2019/04/26</p>
            </div>
            <div class="newAtive">
              <p class="activeName">“五一”期间钟山风景区活动多 中山陵预约参观名额有.....</p>
              <div class="activeImg">
                <div class="activeimgItem">
                  <img src="/static/images/2103.png" alt>
                </div>
                <div class="activeimgItem li">
                  <img src="/static/images/2103.png" alt>
                </div>
                <div class="activeimgItem li">
                  <img src="/static/images/2103.png" alt>
                </div>
              </div>
              <p class="smallTime">2019/04/26</p>
            </div>
            <div class="newcon">
              <div class="newItem">
                <p class="activeName">【研学活动】解读孙文 探险钟山</p>
                <p class="smallTime">2019/04/26</p>
              </div>
              <div class="newItem">
                <p class="activeName">【赏花】雏菊 深藏心底的爱</p>
                <p class="smallTime">2019/04/26</p>
              </div>
              <div class="newItem">
                <p class="activeName">博物馆谷雨市集&南京野菜美食讲堂，周六等你来吃......</p>
                <p class="smallTime">2019/04/26</p>
              </div>
              <div class="newItem">
                <p class="activeName">【演出预告】钟山假日音乐会时间表</p>
                <p class="smallTime">2019/04/26</p>
              </div>
              <div class="newItem">
                <p class="activeName">【钟山抗战遗迹巡礼】博爱——传承的使命/p></p>
                <p class="smallTime">2019/04/26</p>
              </div>
            </div>
          </div>
          <div v-show="msg===1"></div>
          <div v-show="msg===2"></div>
          <div v-show="msg===3"></div>
          <div v-show="msg===4"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 0
    };
  }
};
</script>
<style>
.newBox {
  width: 93.6%;
  margin: 14px auto;
}
.search {
  width: 100%;
  height: 42px;
  background: #e4eae9;
  font-size: 13px;
  position: relative;
}
.searchIcon {
  position: absolute;
  width: 18px;
  height: 16px;
  left: 115px;
  top: 14px;
}
.navTab {
  width: 100%;
}
.tab-tit a {
  display: inline-block;
  height: 50px;
  line-height: 50px;
  width: 20%;
  font-size: 13px;
  text-align: center;
  color: #333;
  text-decoration: none;
  border-bottom: 0.5px solid #ccc;
}
.tab-tit .cur {
  border-bottom: 1px solid #0c7a6c;
  color: #0c7a6c;
}
.tab-con {
  width: 100%;
  margin: 0 auto;
}
.newHoday {
  width: 100%;
  font-size: 13px;
  margin-top: 18px;
}
.smallTime {
  font-size: 12px;
  color: #666666;
  margin-top: 9px;
}
.newAtive {
  width: 100%;
  margin-top: 37px;
}
.activeName {
  font-size: 13px;
}
.activeImg {
  width: 605px;
  margin-top: 9px;
  height: 55px;
  display: flex;
}
.activeimgItem {
  width: 100px;
  height: 100%;
  background: #ccc;
}
.li {
  margin-left: 3px;
}
.newcon {
  width: 100%;
  margin-top: 37px;
}
.newItem {
  margin-bottom: 38px;
}
</style>
