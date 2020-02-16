const Text = {
	cookie_name: 'sessionStore', 
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
