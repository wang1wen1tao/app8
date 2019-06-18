<template>
  <div class="conBox">
    <div class="searchs">
      <div class="searchL">
        <input class="search" type="text" placeholder="请输入关键字">
        <div class="searchIcon">
          <img src="/static/images/search.png" alt>
        </div>
      </div>
      <div class="addBtn">添加</div>
    </div>
    <div class="peoList">
      <div class="peoItem">
        <p class="peoName">刘新宇</p>
        <p class="peoName">成人</p>
        <p class="peoName">123********789</p>
      </div>
      <div class="peoItem">
        <p class="peoName">刘新宇</p>
        <p class="peoName">成人</p>
        <p class="peoName">123********789</p>
      </div>
      <div class="peoItem">
        <p class="peoName">刘新宇</p>
        <p class="peoName">成人</p>
        <p class="peoName">123********789</p>
      </div>
      <div class="peoItem">
        <p class="peoName">刘新宇</p>
        <p class="peoName">成人</p>
        <p class="peoName">123********789</p>
      </div>
      <div class="peoItem">
        <p class="peoName">刘新宇</p>
        <p class="peoName">成人</p>
        <p class="peoName">123********789</p>
      </div>
      <div class="peoItem">
        <p class="peoName">刘新宇</p>
        <p class="peoName">成人</p>
        <p class="peoName">123********789</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style>
.conBox {
  width: 93.6%;
  margin: 14px auto;
}
.searchs {
  height: 34px;
  font-size: 13px;
  display: flex;
}
.searchL {
  width: 225px;
  height: 34px;
  border-bottom: 1px solid #ccc;
  margin-left: 22px;
}
img{
  width: 100%;
  height: 100%;
}
.search {
  margin-left: 20px;
  position: relative;
}
.searchIcon {
  position: absolute;
  width: 18px;
  height: 16px;
  top: 20px;
}
.addBtn {
  width: 52px;
  height: 23px;
  border: 1px solid #0c7a6c;
  margin-left: 20px;
  text-align: center;
  color: #0c7a6c;
  line-height: 23px;
}
.peoList {
  width: 100%;
  margin-left: 22px;
}
.peoItem {
  width: 298px;
  height: 25px;
  display: flex;
  font-size: 15px;
  margin-top: 12px;
  margin-bottom: 12px;
}
.peoName {
  width: 89px;
  height: 100%;
}
</style>
