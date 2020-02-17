const CrdConf = {
	router: {
		_domain: "http://127.0.0.1:7080",
		SignIn: "/signin",
		SignOut: "/signout",
		List: "/list"
	},
	http: {
		withCredentials: true,
	}
};
CrdConf.install = function (Vue) {
	Vue.prototype.$getAPI = (key) => {
		return CrdConf['router']['_domain'] + CrdConf['router'][key];
	};
	Vue.prototype.$getHttpConf = () => {
		return CrdConf['http'];
	};
	Vue.prototype.httpConf = CrdConf['http'];
};
export default CrdConf;