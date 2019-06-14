<template>
  <div>
    <div class="container">
      <div class="top">
        <img src="/static/images/24.png" alt srcset class="topImg">
      </div>
      <div class="center">
        <div class="centerBox">
          <div class="centerItem">
            <p class="kefu">客服1:</p>
            <p class="telNumber">022-10882633</p>
          </div>
          <div class="centerItem">
            <p class="kefu">客服2:</p>
            <p class="telNumber">022-10882633</p>
          </div>
          <div class="centerItem">
            <p class="kefu">客服3:</p>
            <p class="telNumber">022-10882633</p>
          </div>
          <div class="centerItem">
            <p class="kefu">客服4:</p>
            <p class="telNumber">022-10882633</p>
          </div>
        </div>
      </div>
      <div class="bottom">
        <p class="serve">
          我们将会全心全意为您提供满意周到的咨询服务，
          也希望您能支持和监督我们的服务！
        </p>
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
.container {
  width: 84%;
  margin: 0 auto;
}
.top {
  height: 192px;
  background: #ccc;
}
.center {
  height: 240px;
}
.bottom {
  padding-top: 12px;
  height: 122px;
}
.topImg {
  width: 100%;
  height: 100%;
}
.centerBox {
  width: 197px;
  height: 163px;
  margin: 0px auto;
}
.centerItem {
  display: flex;
  margin-top: 30px;
}
.kefu {
  font-size: 18px;
}
.telNumber {
  font-size: 18px;
  color: #0c7a6c;
  margin-left: 17px;
  text-decoration: underline;
}
.serve {
  text-align: center;
  line-height: 22px;
  font-size: 12px;
  color: #666;
}
</style>