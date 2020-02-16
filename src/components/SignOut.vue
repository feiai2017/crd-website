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
			var tmp = this.$getConst('cookie_name');
			console.log("cookie_name:", tmp);
			this.$cookie.delete(tmp);
			this.$parent.isSigned = false;
		},
	},
}
</script>

<style>
</style>
