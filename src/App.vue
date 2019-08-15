<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted(){
     var _this = this;
      this.$store.state.screenWidth = document.documentElement.clientWidth; //窗口宽度
      this.$store.state.screenHeight = document.documentElement.clientHeight; //窗口高度
    window.onresize = function(){ // 定义窗口大小变更通知事件
      _this.$store.state.screenWidth = document.documentElement.clientWidth; //窗口宽度
      _this.$store.state.screenHeight = document.documentElement.clientHeight; //窗口高度
    };
  }
}
</script>
