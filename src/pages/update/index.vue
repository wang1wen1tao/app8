<template>
  <div>
    <div class="navTab">
      <li class="tab-item" @click="msg=0" :class="{'curl':msg===0}">散客预约</li>
      <li class="tab-item" @click="msg=1" :class="{'curl':msg===1}">团体预约</li>
    </div>
    <div class="tab-conatiner">
      <div v-show="msg===0" class="msgFrom">
        <div class="fromContainer">
          <div class="from-group">
            <p class="cardtype">证件类型</p>
            <p class="cardword">身份证</p>
          </div>
          <div class="from-group">
            <p class="cardtype">证件号码</p>
            <div class="cardword">
              <input type="number" placeholder="请输入证件号码">
            </div>
            <div class="sanjiao">
              <img src="/static/images/22_21.png" alt srcset>
            </div>
          </div>
          <div class="from-group">
            <p class="cardtype">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</p>
            <div class="cardword">
              <input type="text" placeholder="请输入姓名">
            </div>
          </div>
          <div class="from-group">
            <p class="cardtype">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别</p>
            <div class="cardword">
              <input type="text" placeholder="请输入性别">
            </div>
          </div>
          <div class="from-group">
            <p class="cardtype">手机号码</p>
            <div class="cardword">
              <input type="text" placeholder="请输入手机号码">
            </div>
          </div>
          <div class="from-group">
            <p class="cardtype">预约日期</p>
            <div class="cardword">
              <picker
                mode="date"
                :value="date"
                start="2015-09-01"
                end="2017-09-01"
                bindchange="bindDateChange"
              >
                <div class="picker">{{date}}</div>
              </picker>
            </div>
            <div class="sanjiao">
              <img src="/static/images/208.png" alt srcset>
            </div>
          </div>
          <div class="from-group">
            <p class="cardtype">时间段&nbsp;&nbsp;&nbsp;</p>
            <div class="cardword">
              <picker
                mode="time"
                :value="time"
                start="09:01"
                end="21:01"
                bindchange="bindTimeChange"
              >
                <div class="picker">{{time}}</div>
              </picker>-
              <picker
                mode="time"
                :value="time"
                start="09:01"
                end="21:01"
                bindchange="bindTimeChange"
              >
                <div class="picker">{{time}}</div>
              </picker>
            </div>
          </div>
          <div class="from-group">
            <p class="cardtype">添加游客</p>
            <div class="cardword">+添加游客</div>
          </div>
        </div>
        <div class="btn">
          <img src="/static/images/203.png" alt srcset>
        </div>
      </div>
      <div v-show="msg===1" class="msgFrom">
        <div class="fromContainer">
          <div class="from-group">
            <p class="cardtype">旅 行 社</p>
            <div class="cardword">
              <input type="text" placeholder="请输入手机号码">
            </div>
          </div>
          <div class="from-group">
            <p class="cardtype">选择景区</p>
            <div class="cardword">
              <picker
                mode="date"
                :value="date"
                start="2015-09-01"
                end="2017-09-01"
                bindchange="bindDateChange"
              >
                <div class="picker">{{date}}</div>
              </picker>
            </div>
          </div>
          <div class="from-group">
            <p class="cardtype">入园日期</p>
            <div class="cardword">
              <picker
                mode="date"
                :value="date"
                start="2015-09-01"
                end="2017-09-01"
                bindchange="bindDateChange"
              >
                <div class="picker">{{date}}</div>
              </picker>
            </div>
            <div class="sanjiao">
              <img src="/static/images/208.png" alt srcset>
            </div>
          </div>
          <div class="from-group">
            <p class="cardtype">入园时段</p>
            <div class="cardword">
              <picker
                mode="time"
                :value="time"
                start="09:01"
                end="21:01"
                bindchange="bindTimeChange"
              >
                <div class="picker">{{time}}</div>
              </picker>-
               <picker
                mode="time"
                :value="time"
                start="09:01"
                end="21:01"
                bindchange="bindTimeChange"
              >
                <div class="picker">{{time}}</div>
              </picker>
            </div>
          </div>
          <div class="from-group">
            <p class="cardtype">游客人数</p>
            <div class="cardword">
              <input type="text" placeholder="请输入手机号码">
            </div>
          </div>
          <div class="from-group">
            <p class="cardtype">总&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数</p>
            <div class="cardword">
              <input type="text" placeholder="请输入手机号码">
            </div>
          </div>
        </div>
        <div class="btn">
          <img src="/static/images/203.png" alt srcset>
        </div>
      </div>
    </div>
     <div class="boxBottom">
        <div class="BoxList">
            <div class="li">
               <div class="licon">
                  <img src="/static/images/5_10.png" alt="" class="boxtopImg">
              </div>
              <div class="itemword">
                <p class="itemtext">继续预约</p>
                <p class="itemtext2">（至少提前一小时变更仅限1次）</p>
              </div>
              <div class="more">
                  >
              </div>   
            </div>
             <div class="li">
               <div class="licon">
                  <img src="/static/images/5_14.png" alt="" class="boxtopImg">
              </div>
              <div class="itemword">
                <p class="itemtext">修改预约</p>
                <p class="itemtext2">（至少提前一小时变更仅限1次）</p>
              </div>
              <div class="more">
                  >
              </div>   
            </div>
             <div class="li">
               <div class="licon">
                  <img src="/static/images/5_16.png" alt="" class="boxtopImg">
              </div>
              <div class="itemword">
                <p class="itemtext">取消预约</p>
                <p class="itemtext2">（至少提前一小时变更仅限1次）</p>
              </div>
              <div class="more"> 
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
      msg: 0,
      date: "2016-09-01",
      time: "12:01"
    };
  }
};
</script>
<style scoped>
.navTab {
  height: 40px;
  display: flex;
}
.tab-item {
  width: 50%;
  text-align: center;
  font-size: 15px;
  line-height: 36px;
}
.curl {
  color: #0c7a6c;
  border-bottom: 1px solid #0c7a6c;
}
.msgFrom {
  width: 93.6%;
  margin: 19px auto;
}
picker {
  font-size: 12px;
}
img {
  width: 100%;
  height: 100%;
}
.fromContainer {
  box-shadow: 0 0 2px #ccc;
  border-top: 2px solid #0c7a6c;
}
.from-group {
  height: 25px;
  display: flex;
  margin-top: 26px;
}
.cardword {
  width: 233px;
  text-align: center;
  display:flex;
  justify-content: center;
}
.cardtype,
.cardword {
  font-size: 14px;
}
.sanjiao {
  width: 20px;
  height: 20px;
  background: #ccc;
}
.btn {
  height: 40px;
  margin-top: 20px;
}
.boxtopImg{
  width: 100%;
  height: 100%;
}
.li{
  width: 100%;
  height: 36px;
  display: flex;
}
.licon{
  width: 19px;
  height: 17px;
  margin-left: 13px;
  margin-top: 9px;
}
.itemword{
  width: 260px;
  height: 36px;
  display: flex;
}
.itemtext{
  font-size: 12px;
  color:#333333;
  line-height: 32px;
  margin-left: 10px;
}
.itemtext2{
  font-size: 10px;
  line-height: 32px;
}
.more{
  width: 6px;
  height: 14px;
  margin-top: 3px;
  color:#999
}
</style>
