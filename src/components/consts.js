const Text = {
	cookie_name: "sessionStore",
	signed: false,
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
