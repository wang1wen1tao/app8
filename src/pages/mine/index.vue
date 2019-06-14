<template>
  <div>
    <div class="mineTop" style="background:url('/static/images/2.png');background-size:100% 100%">
      <div class="userAvater">
          <img :src="useravaTer" alt="" class="avaImg">
      </div>
     <div class="usermsg">
       <p class="username">{{userName}}</p>
       <p class="userwo">{{userQinan}}</p>
     </div>
     <div class="kefu">
       <img src="/static/images/89.png" alt="">
     </div>
    </div>
    <div class="discount">
      <img src="/static/images/22_03.png"  alt srcset>
    </div>
    <div class="minefoot">
      <div class="ItemMine">
        <div class="iconImg">
          <img src="/static/images/22_07.png" alt="icon" srcset>
        </div>
        <p class="itemWord">我的预约</p>
        <div class="sanjiao">></div>
      </div>
      <div class="ItemMine">
        <div class="iconImg">
          <img src="/static/images/22_10.png" alt="icon" srcset>
        </div>
        <p class="itemWord">已购门票</p>
        <div class="sanjiao">></div>
      </div>
      <div class="ItemMine">
        <div class="iconImg">
          <img src="/static/images/22_13.png" alt="icon" srcset>
        </div>
        <p class="itemWord">已购讲解</p>
        <div class="sanjiao">></div>
      </div>
      <div class="ItemMine">
        <div class="iconImg1">
          <img src="/static/images/22_16.png" alt="icon" srcset>
        </div>
        <p class="itemWord1">优惠券</p>
        <p class="itemword2">您有3张优惠券即将过期</p>
        <div class="sanjiao3">></div>
      </div>
      <div class="ItemMine">
        <div class="iconImg1">
          <img src="/static/images/22_16.png" alt="icon" srcset>
        </div>
        <p class="itemWord1">我的收藏</p>
        <div class="sanjiao1">></div>
      </div>
      <div class="ItemMine">
        <div class="iconImg1">
          <img src="/static/images/22_16.png" alt="icon" srcset>
        </div>
        <p class="itemWord1">常用联系人</p>
        <div class="sanjiao2">></div>
      </div>
    </div>
  </div>
</template>

<script>
import userInfo from '../../utils/index' 
export default {
  data() {
    return {
       useravaTer:'',
       userName:'',
       userQinan:''
    };
  },
  onLoad(){
    let userName = userInfo.userInfo.username;
    let userQinan = userInfo.userInfo.userQinan;
    let useravaTer =  userInfo.userInfo.useravaTer
    this.userName = userName;
    this.userQinan =userQinan;
    this.useravaTer = useravaTer;
  },
  methods: {
  
  }
};
</script>

<style scoped>
.usermsg{
  width: 204px;
  height: 70px;
  margin-top: 29px;
  margin-left: 12px;
}
.userwo{
  font-size: 12px;
}
.username{
  font-size: 18px;
  line-height: 46px;
}
.mineTop {
  width: 100%;
  height: 160px;
  display: flex;
}
.userAvater{
  width: 74px;
  height: 74px;
  background: #cccccc;
  margin-top: 29px;
  margin-left: 12px;
  border-radius: 50%;
}
.kefu{
  width: 67px;
  height: 32px;
  margin-left: 6px;
  margin-top: 41px;
}
.avaImg{
  border-radius: 50%;
}
.discount {
  width: 84%;
  height: 63px;
  position: fixed;
  z-index: 1;
  top: 126px;
  left: 32px;
  margin: 0 auto;
}
.minefoot {
  width: 84%;
  margin: 32px auto;
  padding-top: 22px;
}
.ItemMine {
  height: 51px;
  display: flex;
}
.iconImg {
  margin-top: 10px;
  width: 27px;
  height: 30px;
  margin-left: 16px;
}
.itemWord {
  font-size: 14px;
  line-height: 46px;
  margin-left: 10px;
}
img {
  width: 100%;
  height: 100%;
}
.sanjiao {
  width: 12px;
  height: 19px;
  margin-top: 13px;
  margin-left: 58%;
  text-align: center;
  line-height: 17px;
  font-size: 13px;
  color: #cccccc;
}
.iconImg1 {
  width: 24px;
  height: 19px;
  margin-top: 12px;
  margin-left: 22px;
}
.itemWord1 {
  font-size: 14px;
  line-height: 46px;
  margin-left: 10px;
}
.sanjiao1 {
  width: 12px;
  height: 19px;
  margin-top: 13px;
  margin-left: 57%;
  text-align: center;
  line-height: 17px;
  font-size: 13px;
  color: #cccccc;
}
.sanjiao2 {
  width: 12px;
  height: 19px;
  margin-top: 13px;
  margin-left: 52%;
  text-align: center;
  line-height: 17px;
  font-size: 13px;
  color: #cccccc;
}
.sanjiao3 {
  width: 12px;
  height: 19px;
  margin-top: 13px;
  margin-left: 23px;
  text-align: center;
  line-height: 17px;
  font-size: 13px;
  color: #cccccc;
}
.itemword2 {
  font-size: 12px;
  color: #0c7a6c;
  line-height: 44px;
  margin-left: 44px;
}
</style>