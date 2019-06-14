<template>
    <div class="tarbar">
      <div class="tarItem">
          <div class="tarIcon">
              <img src="/static/images/82.png" alt="">
          </div>
          <p class="tarText">中山陵预约</p>
      </div>
      {{msg}}
    </div>
</template>
 <script>
 export default {
     data() {
         return {
             msg:'aasdasd'
         }
     },
    props:['msg']
 }
 </script>
 
<style>
.tarbar{
    width: 100%;
    height: 49px;
    background: #0c7a6c;
    position: fixed;
    bottom: 0;
    display: flex;
}
.tarItem{
   width: 20%;
   height: 100%;
   position: relative;
}
.tarIcon{
   width: 19px;
   height: 18px;
   margin: 11px auto;
}
.tarText{
   font-size: 12px;
   color:#fff; 
   text-align: center;
   line-height: 1px;
}
</style>
