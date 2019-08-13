te<template>
    <div class="datetime">
      <div class="time">{{showTime}}</div>
      <div class="date">{{dateStr}}</div>
	</div>
</template>
<script>
import { setInterval } from 'timers';
export default {
  name:"DateTime",
  data (){
    return {
      CNNumber:['〇','一','二','三','四','五','六','七','八','九'],
      dateStr:'',
      isFlash:true
    }
  }
  ,
  methods:{
    getCNStr(num){ //传入字符串数字 目前只支持两位
      var str = ''
      num.split('').forEach((element,index) => {
        element=this.CNNumber[parseInt(element)]
        str +=(num.length >1 &&index==0 ? (element == '一' ? '十' : element+'十' ) :element)
      });
      return  str.charAt(str.length-1) == this.CNNumber[0] ? str.substring(0,str.length-1) : str
    },
    flushDate(){
          var date = new Date()
          var str = ''
        	var year= date.getFullYear();
        	var month=date.getMonth()+1;
          var day=date.getDate();
          year.toString().split('').forEach(element => {
             str+=this.CNNumber[parseInt(element)]
          });
          str+='年'
          str+=this.getCNStr(month.toString())+'月'
          str+=this.getCNStr(day.toString())+'日'
          this.dateStr = str
    } 
  },
  computed:{
    showTime(){ 
      var date  = new Date()
      this.flushDate()
      return  date.getHours() +(this.isFlash ? ":" :" ")+ date.getMinutes()
    }
  } ,
  created (){
    setInterval(()=>{
      this.isFlash=!this.isFlash
    },500)
  }
  
}
</script>
<style lang="stylus" scoped>
.datetime
  position:fixed
  left:0
  right:0
  top:20%
  margin:0 auto
  color:#fff
  text-align:center
  letter-spacing:.05rem
  user-select: none
  .time
    font-size:1.2rem
    margin:.2rem 0
  .date
    font-size:.5rem
</style>