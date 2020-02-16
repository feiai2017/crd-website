<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png">
		<SignIn 
			v-if="isSigned == true ? false : true" 
			msg="SignIn"
		/>
		<List 
			v-if="isSigned" 
			msg="List"
		/>
		<SignOut
			v-if="isSigned"
			msg="SignOut"
		/>
	</div>
</template>

<script>
import SignIn from './components/SignIn.vue'
import SignOut from './components/SignOut.vue'
import List from './components/List.vue'

export default {
	name: 'App',
	components: {
		SignIn,
		SignOut,
		List
	},
	data:function() {
		return {
			isSigned: false,
		}
	},
	mounted:function() {
		var t = this.$getConst('cookie_name')
		var tmp = this.$cookie.get(t)
		if (tmp != null) {
			this.isSigned = true
		} 
	},
	methods: {
		checkIsSigned: function() {
		},
	}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
