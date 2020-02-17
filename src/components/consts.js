const Text = {
	cookie_name: 'sessionStore',
	code_success: 10000,
	code_signed: 10001
};
Text.install = function (Vue) {
	Vue.prototype.$getConst = (key) => {
		return Text[key];
	};
	Vue.prototype.$setConst = (key, value) => {
		Text[key] = value;
	};	
};
export default Text;
