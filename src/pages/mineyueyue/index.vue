<template>
  <div class="container">
    <div class="Box">
      <div class="boxTop">
        <img src="/static/images/5_03.png" alt="" srcset="" class="boxtopImg">
      </div>
      <div class="boxCenter">
           <div class="savephotoBtn">
             <img src="/static/images/5_07.png" alt="" class="boxtopImg">
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
.boxTop{
  height: 341px;
  background: #ccc;
}
.boxCenter{
  height: 106px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
img{
  height: 121px;
}
.savephotoBtn{
  width: 100%;
  height: 50px;
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