import VueRouter from "vue-router"
import About from '../components/About.vue'
import Home from '../components/Home.vue'

const router = new VueRouter({
	routes:[
		{
			path:'/about',
			component:About
		},
		{
			path:'/home',
			component:Home,
			// children:[
			// 	{
			// 		path:'news',
			// 		component:News
			// 	},
			// 	{
			// 		path:'message',
			// 		component:Message,
			// 	}
		}
	]
})

export default router