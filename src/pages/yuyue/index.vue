<template>
  <div>
    <div class="navTab">
    </div>
    <div class="tab-conatiner">
      <div class="msgFrom">
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
              <img src="/static/images/22_07.png" alt srcset>
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
        </div>
        <div class="btn">
          <img src="/static/images/207.png" alt srcset @click="success">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      date: "2016-09-01",
      time: "12:01"
    };
  },
  methods: {
    success(){
      wx.navigateTo({
        url: '../yuyuesuccess/main'
      })
    },
    success1(){
       wx.navigateTo({
        url: '../yuyuesuccess/main'
      })
    }
  },
};
</script>
<style scoped>
.navTab {
  height: 40px;
  display: flex;
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
</style>
