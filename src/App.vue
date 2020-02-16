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

	<!-- <div>{{ Signed }}</div> -->
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
	props: {
		a2: {
			type: Boolean,
			default: true,
		}
	},
	data:function() {
		return {
			abc: {
				a1: true,
				a2: true,
			},
			isSigned: false,
		}
	},
	mounted:function() {
		console.log("load:" + this.$getConst('signed'))
	},
	methods: {
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
