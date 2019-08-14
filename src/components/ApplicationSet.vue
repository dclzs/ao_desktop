<template>
    <div class="application-set">
			<swiper :options="swiperOption">
				<swiper-slide v-for="(page,index) in iconList" :key="index">
					<div class="icon" v-for="item in page" :key="item.id">
						<img :src="item.imgUrl" />
					</div>
				</swiper-slide>
			</swiper>
			
    </div>
</template>

<script>
export default {    
		name:"ApplicationSet",
		props:{
			icons:Array
		},
		data (){
			return {
				swiperOption:{
					 autoplay:false
				 }
			}
		},
		computed:{
			iconList(){
				const pages=[]
				this.icons.forEach((item,index) => {
					const page = Math.floor(index/6)
					if(!pages[page]){
						pages[page]=[]
					}
					pages[page].push(item)
				})
				return pages
			}
		}

}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'

.swiper-slide
	display:flex
.application-set
	width:$iconListWidth
	height:$IconListHeght
	position:fixed
	bottom:5rem
	left:0
	right:0
	margin:0 auto
	background:rgba(0,0,0,.5)
	border-radius:.2rem
	user-select: none
	.icon
		cursor:pointer
		background:rgba(255,255,255,.7)
		width:$iconWidth
		height:$IconHeight
		margin:(($IconListHeght - $IconHeight) / 2) .2rem 
		display:flex
		justify-content:center 
		border-radius:.1rem
		img
			align-self:center
			width:1rem
			height:1rem
</style>