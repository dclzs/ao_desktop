<template>
   <div class="desktop-container" @contextmenu.prevent="showmenu">
     <task-bar></task-bar>
     <date-time></date-time>
     <application-set :icons="icons"></application-set>
     <component :is="'Chess'" v-for="item of [1]" :key="item"></component>

   </div>
</template>

<script>
import DateTime from "common/DateTime"
import ApplicationSet from "common/ApplicationSet"
import TaskBar from "common/TaskBar"
import Chess from "applications/ChessGame/Chess"

import axios from 'axios'
 
export default {
  name: 'desktop',
  data (){
    return {
      icons:[]
    }
  } ,
  components: {
    TaskBar,
    DateTime,
    ApplicationSet,
    Chess
  }
  ,
  methods:{
    showmenu(){
      alert("显示右键菜单组件");
    },
    init(data){
        data = data.data
        if(data.ret){
          this.icons = data.applicationset
        }
    }
  },
  created (){
    axios.get("/api/icons/index.json").then(this.init)
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