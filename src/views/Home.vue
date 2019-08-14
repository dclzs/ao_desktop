<template>
   <div class="desktop-container" @contextmenu.prevent="showmenu">
     <taskbar></taskbar>
     <date-time></date-time>
    <application-set :icons="icons"></application-set>
   </div>
</template>

<script>
import Taskbar from "../components/Taskbar"
import DateTime from "../components/DateTime"
import ApplicationSet from "../components/ApplicationSet"
import axios from 'axios'

export default {
  name: 'desktop',
  data (){
    return {
      icons:[]
    }
  }
  ,
  components: {
    Taskbar,
    DateTime,
    ApplicationSet
  },
  methods:{
    showmenu(){
      alert("显示右键菜单组件");
    },
    getIcon(data){
        data = data.data
        if(data.ret){
          this.icons = data.applicationset
          console.log(this.icons)
        }
    }
  },
  created (){
    axios.get("/api/icons/index.json").then(this.getIcon)
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