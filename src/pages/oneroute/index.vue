<template>
  <div :style="Height" class="mapBox">
    <img src="/static/images/52.png" alt>
    <div class="ImgList">
      <div class="itemBox">
        <div class="placeImg">
          <img src="/static/images/113.png" alt srcset>
        </div>
        <div class="placename">
          <p class="placeLeft">03 明孝陵</p>
          <p class="placeright">
            <span class="danwei">￥</span>70
          </p>
        </div>
        <div class="airSpace"></div>
        <p class="kimi">全程6.2公里</p>
        <p class="kimi">步行约180分钟</p>
      </div>
      <div class="itemBox">
        <div class="placeImg">
          <img src="/static/images/113.png" alt srcset>
        </div>
        <div class="placename">
          <p class="placeLeft">03 明孝陵</p>
          <p class="placeright">
            <span class="danwei">￥</span>70
          </p>
        </div>
        <div class="airSpace"></div>
        <p class="kimi">全程6.2公里</p>
        <p class="kimi">步行约180分钟</p>
      </div>
      <div class="itemBox">
        <div class="placeImg">
          <img src="/static/images/113.png" alt srcset>
        </div>
        <div class="placename">
          <p class="placeLeft">03 明孝陵</p>
          <p class="placeright">
            <span class="danwei">￥</span>70
          </p>
        </div>
        <div class="airSpace"></div>
        <p class="kimi">全程6.2公里</p>
        <p class="kimi">步行约180分钟</p>
      </div>
      <div class="itemBox">
        <div class="placeImg">
          <img src="/static/images/113.png" alt srcset>
        </div>
        <div class="placename">
          <p class="placeLeft">03 明孝陵</p>
          <p class="placeright">
            <span class="danwei">￥</span>70
          </p>
        </div>
        <div class="airSpace"></div>
        <p class="kimi">全程6.2公里</p>
        <p class="kimi">步行约180分钟</p>
      </div>
      <div class="itemBox">
        <div class="placeImg">
          <img src="/static/images/113.png" alt srcset>
        </div>
        <div class="placename">
          <p class="placeLeft">03 明孝陵</p>
          <p class="placeright">
            <span class="danwei">￥</span>70
          </p>
        </div>
        <div class="airSpace"></div>
        <p class="kimi">全程6.2公里</p>
        <p class="kimi">步行约180分钟</p>
      </div>
      <div class="itemBox">
        <div class="placeImg">
          <img src="/static/images/113.png" alt srcset>
        </div>
        <div class="placename">
          <p class="placeLeft">03 明孝陵</p>
          <p class="placeright">
            <span class="danwei">￥</span>70
          </p>
        </div>
        <div class="airSpace"></div>
        <p class="kimi">全程6.2公里</p>
        <p class="kimi">步行约180分钟</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Height: ""
    };
  },
  onShow() {
    let self = this;
    wx.getSystemInfo({
      success: res => {
        self.Height = "height:" + res.windowHeight + "px";
      }
    });
  }
};
</script>
<style>
.mapBox {
  width: 100%;
  background: #c6e0a3;
  position: relative;
}
.ImgList {
  width: 100%;
  height: 151px;
  display: flex;
  position: absolute;
  bottom: 0px;
  overflow: hidden;
}
.itemBox {
  width: 106px;
  height: 100%;
  background: #fff;
  border: 1px solid #ccc;
}
.placeImg {
  width: 100px;
  height: 83px;
  background: yellow;
  margin-left: 3px;
  margin-top: 5px;
}
.danwei {
}
.placeright {
  color: #0c7a6c;
  font-size: 13px;
  margin-top: 5px;
  margin-left: 3px;
}
.placeLeft {
  color: #0c7a6c;
  font-size: 13px;
  margin-top: 5px;
  margin-left: 3px;
}
.placename {
  width: 103px;
  height: 22px;
  display: flex;
}
.airSpace {
  width: 100px;
  height: 0.5px;
  background: #0c7a6c;
  margin-left: 3px;
  margin-top: 5px;
}
.kimi {
  font-size: 8px;
  margin-left: 4px;
  margin-top: 2px;
}
</style>
