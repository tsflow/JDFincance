import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";

console.log(router);

Vue.config.productionTip = false;

new Vue({
	el: "#app",
	router,
	components: {
		App
	},
	template: "<App/>"
});