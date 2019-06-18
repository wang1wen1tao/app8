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
       <div class="kefuIcon">
          <img src="/static/images/68.png"  alt srcset>
       </div>
       <p class="kText">客服</p>
     </div>
    </div>
    <div class="minefoot">
      <div class="ItemMine">
        <div class="iconImg">
          <img src="/static/images/22_07.png" alt="icon" srcset>
        </div>
        <p class="itemWord">我的预约</p>
        <div class="sanjiao">></div>
        <div class="raMsg">0</div>
      </div>
      <div class="ItemMine">
        <div class="iconImg">
          <img src="/static/images/22_10.png" alt="icon" srcset>
        </div>
        <p class="itemWord">已购门票</p>
        <div class="sanjiao">></div>
         <div class="raMsg">0</div>
      </div>
      <div class="ItemMine">
        <div class="iconImg">
          <img src="/static/images/22_13.png" alt="icon" srcset>
        </div>
        <p class="itemWord">已购讲解</p>
        <div class="sanjiao">></div>
         <div class="raMsg">0</div>
      </div>
      <div class="ItemMine">
        <div class="iconImg">
          <img src="/static/images/carzi.png" alt="icon" srcset>
        </div>
        <p class="itemWord1">我的购物车</p>
        <div class="sanjiao2">></div>
      </div>
      <div class="ItemMine">
        <div class="iconImg">
          <img src="/static/images/22_18.png" alt="icon" srcset>
        </div>
        <p class="itemWord1">常用联系人</p>
        <div class="sanjiao2">></div>
      </div>
    </div>
     <tar-bar :selectNavIndex="0"></tar-bar>
  </div>
</template>

<script>
import userInfo from '../../utils/index' 
import tarBar from '@/components/tarbar'
export default {
 
  components:{
    tarBar,
  },
  data() {
    return {
       useravaTer:'',
       userName:'',
       userQinan:''
    };
  },
  onLoad(){
    let userName = userInfo.userInfo.username;
    let useravaTer =  userInfo.userInfo.useravaTer
    this.userName = userName;
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
  line-height: 80px;
}
.mineTop {
  width: 100%;
  height: 160px;
  display: flex;
  position: relative;
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
  background: #0c7a6c;
  margin-left: 8.5px;
  margin-top: 41px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  position: relative;
}
.avaImg{
  border-radius: 50%;
}
.discount {
  width: 84%;
  height: 63px;
  position: absolute;
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
  position: relative;
}
.iconImg {
  margin-top: 12px;
  width: 16px;
  height: 18px;
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
.kefuIcon{
  width: 18px;
  height: 22px;
  position: absolute;
  top:5px;
  left: 11px;
}
.kText{
  color:#fff;
  font-size: 15px;
  position: absolute;
  top:6px;
  left: 30px;
}
.raMsg{
  width: 15px;
  height: 15px;
  background: #f6705a;
  font-size: 12px;
  color:#fff;
  text-align: center;
  border-radius: 50%;
  position: absolute;
  top:7px;
  left: 23px;
}
</style>