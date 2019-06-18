<template>
  <div class="container">
    <div class="Box">
      <div class="boxTop">
        <div class="xuyuema">您的中山陵预约码</div>
        <div class="xuyuemace">
          <div class="xuyueImg">
            <img src="/static/images/5.png" alt class="boxtopImg">
          </div>
        </div>
        <div class="successText">
          <p class="succesOner">您已成功预约中山陵景区</p>
        </div>
        <div class="successText">
          <p class="suwarn">(请携带有效证件刷取二维码准时入园)</p>
        </div>
      </div>
      <div class="yuyueTime">
        <p class="time">预约时间：2019年05月02日  9:00-12：00</p>
        <p class="people">预约游客:黄小倩</p>
      </div>
      <div class="boxCenter">
        <div class="savephotoBtn">
          <img src="/static/images/503.png" alt class="boxtopImg">
        </div>
      </div>
      <div class="boxBottom">
        <div class="BoxList">
          <div class="li">
            <div class="licon">
              <img src="/static/images/5_10.png" alt class="boxtopImg">
            </div>
            <div class="itemword">
              <p class="itemtext">继续预约</p>
              <p class="itemtext2">（至少提前一小时变更仅限1次）</p>
            </div>
            <div class="more">></div>
          </div>
          <div class="li">
            <div class="licon">
              <img src="/static/images/5_14.png" alt class="boxtopImg">
            </div>
            <div class="itemword">
              <p class="itemtext">修改预约</p>
              <p class="itemtext2">（至少提前一小时变更仅限1次）</p>
            </div>
            <div class="more">></div>
          </div>
          <div class="li">
            <div class="licon">
              <img src="/static/images/5_16.png" alt class="boxtopImg">
            </div>
            <div class="itemword">
              <p class="itemtext">取消预约</p>
              <p class="itemtext2">（至少提前一小时变更仅限1次）</p>
            </div>
            <div class="more"></div>
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
.Box {
  width: 85%;
  margin: 20px auto;
}
.boxTop {
  height: 288px;
  border-bottom: 1px dashed #0c7a6c;
}
.boxCenter {
  height: 80px;
  margin-top: 15px;
}
img {
  height: 121px;
}
.savephotoBtn {
  width: 100%;
  height: 50px;
}
.boxtopImg {
  width: 100%;
  height: 100%;
}
.li {
  width: 100%;
  height: 36px;
  display: flex;
}
.licon {
  width: 19px;
  height: 17px;
  margin-left: 13px;
  margin-top: 9px;
}
.itemword {
  width: 260px;
  height: 36px;
  display: flex;
}
.itemtext {
  font-size: 12px;
  color: #333333;
  line-height: 32px;
  margin-left: 10px;
}
.itemtext2 {
  font-size: 10px;
  line-height: 32px;
}
.more {
  width: 6px;
  height: 14px;
  margin-top: 3px;
  color: #999;
}
.xuyuema {
  width: 100%;
  height: 42px;
  background: #0c7a6c;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  line-height: 42px;
}
.xuyuemace {
  height: 182px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.xuyueImg {
  width: 136px;
  height: 140px;
}
.successText {
  width: 320px;
  height: 36px;
}
.succesOner {
  width: 320px;
  color: #0c7a6c;
  text-align: center;
  height: 48px;
  font-size: 15px;
}
.suwarn {
  font-size: 12px;
  color: #999;
  text-align: center;
  line-height: 0.5px;
}
.yuyueTime{
  height: 67px;
  margin-top: 20px;
}
.time{
   text-align: center;
  font-size: 12px;
  color:#666;
  margin-bottom: 20px;
}
.people{
  font-size: 12px;
  color:#666;
  margin-left: 46px;
}
</style>