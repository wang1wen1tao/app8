<template>
  <div class="conBox">
    <div class="box">
      <div class="carTop">
        <p class="count">共3张</p>
        <p class="managar">管理</p>
      </div>
      <div class="shopList">
        <div class="shopItem" v-for="item in shopList" :data="index" :key="item">
          <div class="leftBorder">
            <img src="/static/images/10_03.png" alt srcset>
          </div>
          <div class="centerImg">
            <h1 class="title">{{item.place}}</h1>
            <div class="placeImg">
              <img :src="item.imgUrl" alt srcset>
            </div>
          </div>
          <div class="rightcenter">
            <div class="delIcon">
              <div class="iconImg">
                <img src="/static/images/10_06.png" alt srcset>
              </div>
            </div>
            <div class="textTime">
              <div class="iconImgs">
                <img src="/static/images/10_27.png" alt srcset>
              </div>
              <p class="timeDuan">{{item.timeDuan1}}</p>
            </div>
            <div class="textTime">
              <div class="iconImgs">
                <img src="/static/images/10_17.png" alt srcset>
              </div>
              <p class="timeDuan">{{item.timeDuan2}}</p>
            </div>
            <div class="selnumber">
              <div class="cutnumber">-</div>
              <input type="text" value="0" class="number">
              <div class="addnumber">+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="carBottom">
      <div class="bottomLeft">
        <div class="selectAll">
           <img src="/static/images/10_32.png" alt srcset>
        </div>
        <p class="selectedAllword">全选</p>
       <div class="jieSuai">
         <div class="heji">合计:</div>
         <div class="hejiPrice">￥100</div>
       </div>
      </div>
     <div class="bottomRight">去结算</div>
    </div>
  </div>
</template>

<script>
import CarList from '../../utils/index'
export default {
  data() {
    return {
      shopList:[]
    }
  },
  onShow(){
    let res = CarList.CarList;
    for(let i in res){
      this.shopList[i] = res[i];
    }
  },
  methods: {}
};
</script>

<style scoped>
.box {
  width: 84%;
  margin: 0 auto;
}
.carTop {
  height: 48px;
  position: relative;
}
.count {
  color: #0c7a6c;
  line-height: 44px;
}
.managar {
  width: 52px;
  height: 27px;
  border: 1px solid #0c7a6c;
  text-align: center;
  font-size: 15px;
  color: #0c7a6c;
  line-height: 25px;
  position: absolute;
  right: 0;
  top: 9px;
}
.carBottom {
  width: 99%;
  height: 62px;
  position: fixed;
  z-index: 2;
  bottom: 0;
  border: 2px solid #0c7a6c;
  display: flex;
}
.bottomLeft {
  width: 268px;
  display: flex;
}
.shopList{
  margin-bottom: 36px;
}
.shopItem {
  height: 150px;
  display: flex;
}
.leftBorder {
  width: 21px;
  height: 128px;
  margin-top: 12px;
}
.centerImg {
  width: 133px;
  height: 108px;
  margin-top: 23px;
  margin-left: 14px;
}
.title {
  font-size: 15px;
}
.placeImg {
  width: 125px;
  height: 80px;
  margin-top: 8px;
}
.rightcenter {
  width: 163px;
  height: 108px;
  margin-top: 23px;
}
.delIcon {
  height: 28px;
  position: relative;
}
.iconImg {
  width: 17px;
  height: 100%;
  position: absolute;
  right: 0;
}
.textTime {
  height: 15px;
  display: flex;
  margin-bottom: 9px;
}
.iconImgs {
  width: 16px;
  height: 15px;
  margin-left: 13px;
  margin-top: -1px;
}
.timeDuan {
  font-size: 10px;
  margin-left: 18px;
  margin-top: 5px;
}
.selnumber {
  width: 120px;
  height: 30px;
  margin-left: 15px;
  display: flex;
}
.cutnumber,
.number,
.addnumber {
  width: 38px;
  height: 30px;
  text-align: center;
  font-size: 18px;
  border: 1px solid #0c7a6c;
}
.cl {
  width: 38px;
  height: 30px;
  text-align: center;
  font-size: 18px;
  border: 1px solid #ccc;
}
img {
  width: 100%;
  height: 100%;
}
.selectAll{
  width: 28px;
  height: 27px;
  margin-top: 19px;
  margin-left: 6px;
}
.selectedAllword{
  font-size:15px;
  line-height: 62px;
  margin-left: 11px;
}
.heji{
  font-size: 15px;
  line-height: 62px;
  margin-left: 47px
}
.jieSuai{
  display: flex;
}
.hejiPrice{
  line-height: 62px;
  color:#0c7a6c;
  margin-left: 12px;
}
.bottomRight{
  width: 106px;
  height: 100%;
  background: #0c7a6c;
  text-align: center;
  font-size: 18px;
  color:#fff;
  line-height: 64px;
}
</style>
