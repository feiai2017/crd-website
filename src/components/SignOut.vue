<template >
	<div>
		sign out
		<button type="button" @click="SignOutBtn">Sign Out</button>
	</div>
</template>

<script>
export default {
	name: 'SignOut',
	methods: {
		SignOutBtn: function() {
			console.log("sign out");
			var that = this
			const axios = require('axios')
			var _signOut = this.$getAPI('SignOut')
			axios.get(
				_signOut,
				that.httpConf,
			).then(function (response) {
				console.log(response)
				if (response.status != 200) {
					console.log("response.status:", response.status);
					return;
				}
				var tmp = that.$getConst('cookie_name');
				var code_success = that.$getConst('code_success')
				var error_code = response.data.error_code
				if (error_code == null || error_code != code_success) {
					// todo: need dialogue or error notice
					console.log("error_code:", error_code);
					return;
				}
				that.$cookie.delete(tmp);
				that.$parent.isSigned = false;
			}).catch(function (error) {
				console.log(error);
			});
		},
	},
}
</script>

<style>
</style>
