<template>
  <div class="chess" ref="chess">
    <title-bar :titleBarOptions='titleBarOptions' ></title-bar>
  </div>
</template>

<script>
import TitleBar from "common/TitleBar"
export default  {
  name:'Chess',
  data(){
    return {
       titleBarOptions:{
         title:'Ao-Desktop原创__中国象棋', //默认值‘’
         menu:{}, //默认值 {}
         iconUrl:'/images/icons/chess-icon.jpg', //默认值 ‘’
         maxButton:true, //三个按钮默认值为true
         minButton:true,
         closeButton:true
       }
    }
  },
  components:{
    TitleBar
  },
  beforeCreate (){
    
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
