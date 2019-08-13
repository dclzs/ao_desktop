<template>
   <div class="desktop-container" @contextmenu.prevent="showmenu">
     <taskbar></taskbar>
    <date-time></date-time>
   </div>
</template>

<script>
import Taskbar from "../components/Taskbar"
import DateTime from "../components/DateTime"
export default {
  name: 'desktop',
  components: {
    Taskbar,
    DateTime
  },
  methods:{
    showmenu(){
      alert("显示右键菜单组件");
    }
  }
}
</script>
<style lang="stylus" scope>
html,body,#app
  height:100%
.desktop-container
  width:100%
  height:100%
  background:url("/back.jpeg")
  background-repeat: no-repeat
  background-size: cover
  background-position: center 0
</style>