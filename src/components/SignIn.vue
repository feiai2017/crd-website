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
			const axios = require('axios')
			const qs = require('qs')	
			var data = qs.stringify({
				account: this.account,
				password: this.pwd
			});
			var that = this
			axios.post(
				'http://127.0.0.1:7080/signin', 
				data, 
				{
					withCredentials: true,
				},
			).then(function (response) {
				console.log(response);
				if (response.status != 200) {
					console.log("response.status:", response.status);
					return;
				}
				var error_code = response.data.error_code
				var code_success = that.$getConst('code_success')
				var code_signed = that.$getConst('code_signed')
				if (error_code == null || (error_code != code_success && error_code != code_signed)) {
					// todo: need dialogue or error notice
					console.log("error_code:", error_code);
					return;
				}
				that.$parent.isSigned = true;
			}).catch(function (error) {
				console.log(error);
			});
		},
	},
	
}
</script>

<style>
</style>
