<template>
  <div class="chess">
    <title-bar></title-bar>
  </div>
</template>

<script>
import TitleBar from "common/TitleBar"
export default  {
  name:'Chess',
  components:{
    TitleBar
  }
}

</script>

<style lang='stylus' scoped>
.chess
  width:16rem
  height:10rem
  background:#fff
  position:absolute
  top:100px
  left:100px
  overflow:hidden
</style>
