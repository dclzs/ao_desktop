<template>
  <div class="chess"   v-Resizable="{minWidth:300,minHeight:200}" v-Draggable="{handle:'#chess',drag:onDrag}" ref="chess">
    <title-bar   :parentAttr="windowAttr" :titleBarOptions='titleBarOptions' ></title-bar>
  </div>
</template>

<script>
import TitleBar from "common/TitleBar"
export default  {
  name:'Chess',
  data(){
    return {
       titleBarOptions:{
         id:'chess',
         title:'Ao-Desktop原创__中国象棋', //默认值‘’
         menu:{}, //默认值 {}
         iconUrl:'/images/icons/chess-icon.jpg', //默认值 ‘’
         maxButton:true, //三个按钮默认值为true
         minButton:true,
         closeButton:true
       },
       windowAttr:{
         top:0,
         left:0,
         width:0,
         height:0
       }
    }
  },
  components:{
    TitleBar
  },
  mounted(){
    this.windowAttr.top=this.$el.offsetTop
		this.windowAttr.left=this.$el.offsetLeft
    this.windowAttr.width=this.$el.offsetWidth
    this.windowAttr.height=this.$el.offsetHeight
  },
  methods:{
    onDrag(event) {
      var d = event;
      if (d.top < 0) {
        d.top = 0
      }
      if (d.top + this.dragHeight > this.containerHeight - 2) {
        d.top = this.containerHeight - 2 - this.dragHeight
      }
      this.windowAttr.left=d.left
      this.windowAttr.top=d.top 
      d.target.applyDrag();
    }
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
  border-radius:.1rem
</style>
