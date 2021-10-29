import Vuex from "vuex"
import Vue from 'vue'

Vue.use(Vuex)
const actions = {
	jia(context,value){
		context.commit('JIA',value)
	}
}
const mutations = {
	JIA(state,value){
		state.commit(value)
	}
}
const state = {
	sum:0
}

export default new Vuex.Store({
	actions,
	mutations,
	state
})