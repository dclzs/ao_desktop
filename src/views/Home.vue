<template>
   <div ref='disktop' class="desktop-container" @contextmenu.prevent="showmenu($event)" @click.stop="leftClick">
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
    showmenu(e){
      if(e.toElement == this.$refs.disktop){
          alert("弹出菜单")
          //获取 其位置 
           //展现菜单 默认向右显示 
           //右边不能拿显示则向左显示
           //向vuex放一个标志代表菜单展开 
      }
    },
    leftClick(){
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
  overflow:hidden
.desktop-container
  width:100%
  height:100%
  background:url("/back.jpeg")
  background-repeat: no-repeat
  background-size: cover
  background-position: center 0
</style>