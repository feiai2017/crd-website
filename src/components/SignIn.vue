<template>
	<div>
		<input v-model="account" placeholder="edit me">
		<p>Message is: {{ account }}</p>
		<input v-model="pwd" placeholder="edit me">
		<p>Message is: {{ pwd }}</p>
		<button type="button" @click="SignInBtn">登陆</button>
	</div>
</template>

<script>
export default {
	name: 'SignIn',
	props: {
		account: {
			type: [String, Number],
			required: false,
			default: "",
		},
		pwd: {
			type: String,
			required: false,
			default: "",
		},
		test: {
			type: Boolean,
			default: true,
		},
	},
	created:function(){
		// console.log("created")
	},
	methods: {
		SignInBtn: function() {
			console.log("signed-before:" + this.$parent.isSigned);
			const axios = require('axios');
			// axios.default.withCredentials = true;
			const qs = require('qs');		
			var data = qs.stringify({
				account: this.account,
				password: this.pwd
			});
			axios.post('http://127.0.0.1:7080/signin', data, {withCredentials: true})
			.then(function (response) {
				console.log(response);
				console.log("cookie:", response.cookies)
			})
			.catch(function (error) {
				console.log(error);
			});
			
			console.log("signed-after:" +   this.$parent.isSigned);
			// console.log("cookie-name:" + this.$getConst('cookie_name'));
			// var a = this.$cookie.get(this.$getConst('cookie_name'));
			// if (a != null) {
			// 	console.log("cookie:" + a);
			// } else {
			// 	console.log("login needed");
			// }
		},
	},
	
}
</script>

<style>
</style>
