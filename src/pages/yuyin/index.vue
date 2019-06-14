<template>
  <div>
    <div class="conatierBox">
      <div class="rowItem">
        <div class="colItem" @click="JumpItem">
          <div class="topImg">
            <img src="/static/images/01.png" alt>
          </div>
          <div class="footWorld">
            <h1 class="placeName">明孝陵</h1>
            <p class="placeInfo">“明清皇家第一陵”的神秘历史</p>
            <div class="btnImg">
              <img src="/static/images/03.png" alt>
            </div>
          </div>
        </div>
        <div class="colItem sp">
          <div class="topImg">
            <img src="/static/images/02.png" alt>
          </div>
          <div class="footWorld">
            <h1 class="placeName">中山陵</h1>
            <p class="placeInfo">-“一座中山陵 半部民国史“</p>
            <div class="btnImg">
              <img src="/static/images/03.png" alt>
            </div>
          </div>
        </div>
      </div>
      <div class="rowItem">
        <div class="colItem">
          <div class="topImg">
            <img src="/static/images/04.png" alt>
          </div>
          <div class="footWorld">
            <h1 class="placeName">明孝陵</h1>
            <p class="placeInfo">“明清皇家第一陵”的神秘历史</p>
            <div class="btnImg">
              <img src="/static/images/03.png" alt>
            </div>
          </div>
        </div>
        <div class="colItem sp">
          <div class="topImg">
            <img src="/static/images/05.png" alt>
          </div>
          <div class="footWorld">
            <h1 class="placeName">中山陵</h1>
            <p class="placeInfo">-“一座中山陵 半部民国史“</p>
            <div class="btnImg">
              <img src="/static/images/03.png" alt>
            </div>
          </div>
        </div>
      </div>
      <div class="rowItem">
        <div class="colItem">
          <div class="topImg">
            <img src="/static/images/06.png" alt>
          </div>
          <div class="footWorld">
            <h1 class="placeName">明孝陵</h1>
            <p class="placeInfo">“明清皇家第一陵”的神秘历史</p>
            <div class="btnImg">
              <img src="/static/images/03.png" alt>
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

  methods: {
    JumpItem(){
      wx.navigateTo({ url: '../yuyindetail/main' });
    }
  }
};
</script>

<style scoped>
.conatierBox {
  width: 93%;
  margin: 15px auto;
}
.rowItem {
  width: 100%;
  display: flex;
}
.colItem {
  width: 164px;
  box-shadow: 0 2px 2px #ccc;
}
img {
  width: 100%;
  height: 100%;
}
.topImg {
  height: 141px;
  margin-top: 15px;
}
.footWorld {
  height: 95px;
}
.sp {
  margin-left: 12px;
}
.placeName {
  font-size: 14px;
  line-height: 26px;
  margin-left: 17px;
}
.placeInfo {
  font-size: 10px;
  text-align: center;
  color: #6666;
}
.btnImg {
  width: 103px;
  height: 27px;
  margin: 12px auto;
}
</style>