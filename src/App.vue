<template>
  <div id="app">
   
	<Test />
	<hr >
	<Test2 />
	<hr >
	<Test3></Test3>
	<hr >
	<router-link to="/home">home</router-link>
	<router-link to="/about">about</router-link>
	<el-row>
	  <el-button>默认按钮</el-button>
	  <el-button type="primary">主要按钮</el-button>
	  <el-button type="success">成功按钮</el-button>
	  <el-button type="info">信息按钮</el-button>
	  <el-button type="warning">警告按钮</el-button>
	  <el-button type="danger">危险按钮</el-button>
	</el-row>
  </div>
</template>

<script>
import Test from './components/Test.vue'
import Test2 from './components/Test2.vue'
import Test3 from './components/Test3.vue'

export default {
  name: 'App',
  components: {
    Test,
	Test2,
	Test3
  }
}
</script>

<style>
	/* 批两天，绑两天，绑个丸子又两天 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
