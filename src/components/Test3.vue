<template>
	<div>
		<button type="button" @click="getStudents">获取信息</button>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		name:'Test3',
		methods:{
			getStudents(){
				axios.get('https://api.github.com/search/users?q=shangguigu').then(
					response => {
						console.log('请求成功',response.data)
					},
					error => {
						console.log('请求失败',error.message)
					}
				)
			}
		},
		mounted() {
			console.log('qpp',this)
		}
	}
</script>

<style scoped>
</style>
