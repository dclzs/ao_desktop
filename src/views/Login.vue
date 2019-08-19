<template>
   <div class="back">
        <div class="content">
           <div class="title">AO_Desktop</div>
           <div class="inp">账号 <input maxlength="16" v-model="username" type="text"/></div>
           <div class="inp">密码<input maxlength="16" v-model="password" type="password"/></div>
           <div><button @click="login" >登  录</button></div> 
      </div>
   </div>
</template>

<script>

import axios from 'axios'
 
export default {
  name:"Login",
  data(){
    return {
      username:'',
      password:''
    }
  },
  methods:{
    login(){
        //请求后台· 
    }
  }
}
</script>

<style lang="stylus" scoped>
html,body,.back
  height:100%
div
  text-align:center
  margin:.3rem
.title
  color:#fff
  font-size:.8rem
input 
  color:#fff
  background:rgba(0,0,0,0)
  padding:.1rem
.inp
  background:rgba(0,0,0,0.2)
  border:1px solid #fff
  height:.6rem
  line-height:.6rem
  border-radius:.3rem
  margin:.5rem 1.3rem
.back
  background:url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566233652459&di=c0187cff8bb2e1900d5de57ec4416b03&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Ff54ab7d26542ba26223e9228c5b17127d3d5335b.jpg')
  background-size:100% 100%
.content
  width:8rem
  height:6rem
  position:absolute
  left:0
  top:0
  right:0
  bottom:0
  margin:auto auto
button 
  background:#0FA6D7
  padding:.1rem
  width:5rem
  border-radius:.2rem
  color:#fff
  letter-spacing:.2rem
  font-weight:600
</style>