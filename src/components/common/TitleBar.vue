<template>
    <div class="title-bar">
      <div class="icon"></div> <!-- icon -->
				<div class="menu-title">
					<div class="menu"></div>  
					<div class="title">Ao-Desktop原创__中国象棋 </div>  
				</div>
			<div class="status">
				<div><span class="iconfont">&#xe625;</span></div>
				<div><span class="iconfont">&#xe62b;</span></div>
				<div><span class="iconfont">&#xe614;</span></div>	
			</div> <!-- status --> 
    </div>
</template>
<script>
export default {
		name:"TitleBar",
		props:{
			config:Object
		},
		created:{

		}
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
@import '~styles/mixins.styl'

.title-bar
	background:#3C3C3C
	height:.8rem
	position:relative
	display:flex
	color:#fff
	user-select:none
	.icon
		display: inline-block
		min-width:.8rem
		background:red
	.status
		min-width:3rem
		background:pink
		display:flex
		div
			flex:1
			border:1px solid red
	.menu-title
		flex:1
		display:flex
		justify-content:center 
		.menu
			min-width:.3rem
			flex:1
		.title
			min-width:.3rem
			flex:1
			center()
</style>