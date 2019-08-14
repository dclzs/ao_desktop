<template>
    <div class="title-bar">
      <div class="icon"><img :src="titleBarOptions.iconUrl"  /></div> <!-- icon -->
				<div class="menu-title">
					<div class="menu" v-if="Object.keys(this.titleBarOptions.menu).length" ></div>   
					<div class="title">{{titleBarOptions.title}}</div>
				</div>
			<div class="status" :style="{'min-width':statusWidth}" ref="status">
				<div class="status-item" @click="windowToMin" v-if="getStatusButton.min"><div class="iconfont">&#xe625;</div></div>
				<div class="status-item" @click="windowToMax" v-if="getStatusButton.max"><div class="iconfont" v-html="windowMaxIcon"></div></div>
				<div class="status-item close-window" @click="windowClose" v-if="getStatusButton.closeBut"> <div class="iconfont">&#xe614;</div></div>
			</div> <!-- status -->
    </div>
</template>
<script>
export default {
		name:"TitleBar",
		props:{
			titleBarOptions:Object			 
		},
		data(){
			return {
				isMax:false,
				statusWidth:'3rem'
			}
		} ,
		methods:{
			windowToMax(){
				this.isMax = !this.isMax
				alert('窗口最大化 向父组件传值')
			},
			windowToMin(){
				alert('窗口最小化 向父组件传值')
			},
			windowClose(){
				alert('关闭窗口 像父组件传值')
			}
		},
		computed:{
			windowMaxIcon(){
				return this.isMax ? '&#xe611;':'&#xe62b;'
			},
			getStatusButton(){
					var buts = this.titleBarOptions
					const retBut= { min : buts.minButton && true ,max : buts.maxButton && true, closeBut : buts.closeButton && true}
					this.statusWidth = Object.values(retBut).filter(item => item).length + "rem"
				  return retBut
			}
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
		display:  flex
		min-width:.8rem
		img
			width:.5rem
			padding:.1rem
			center()
	.status
		min-width:3rem
		display:flex
		.status-item:hover
			background:rgba(255,255,255,0.2)
		.close-window:hover
			background:#D8351D
		.status-item
			flex:1
			display:flex
			div
				center()
	.menu-title
		flex:1
		display:flex
		justify-content:center
		width:.6rem
		.menu
			center()
			textOverflowHidden()
			padding:.1rem 0
			width:0.3rem
		.title
			width:0.3rem
			padding:.1rem 0
			textOverflowHidden()
			center()
</style>