<template>
    <div class="taskbar">
		<span class="datetime">
			2019/8/13 10:15:30
		</span>
	</div>
</template>
<script>
export default {
  name:"Taskbar"
}
</script>
<style lang="stylus" scoped>
.taskbar
	height:.8rem
	width:100%
	background:rgba(0,0,0,1)
	position:fixed
	left:0
	top:0
	text-align:center
	.datetime
		color:#fff
		line-height:.8rem
</style>