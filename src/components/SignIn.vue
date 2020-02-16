<template>
	<div>
		<p>account</p>
		<input v-model="account" placeholder="edit me">
		<!-- <p>Message is: {{ account }}</p> -->
		<p>password</p>
		<input v-model="pwd" placeholder="edit me">
		<!-- <p>Message is: {{ pwd }}</p> -->
		<button type="button" @click="SignInBtn">Sign in</button>
	</div>
</template>

<script>
export default {
	name: 'SignIn',
	props: {
		// account: {
		// 	type: [String, Number],
		// 	required: false,
		// 	default: "",
		// },
		// pwd: {
		// 	type: String,
		// 	required: false,
		// 	default: "",
		// },
		// test: {
		// 	type: Boolean,
		// 	default: true,
		// },
	},
	data: function() {
		return {
			account: "",
			pwd: "",
		}
	},
	created:function(){
		// console.log("created")
	},
	methods: {
		SignInBtn: function() {
			console.log("signed-before:" + this.$parent.isSigned);
			const axios = require('axios');
			const qs = require('qs');		
			var data = qs.stringify({
				account: this.account,
				password: this.pwd
			});
			var ok = false;
			var that = this;
			axios.post(
				'http://127.0.0.1:7080/signin', 
				data, 
				{
					withCredentials: true,
				},
			).then(function (response) {
				console.log("event:", event);
				console.log(response);
				console.log("ok-1:", ok)
				ok = true;
				console.log("ok-2:", ok)
			}).catch(function (error) {
				console.log(error);
			}).finally(function () {
				if (ok == true) {
					that.$parent.isSigned = true;
				}
			});
		},
	},
	
}
</script>

<style>
</style>
