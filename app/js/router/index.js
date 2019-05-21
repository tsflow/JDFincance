import  Vue from "vue";
import Router from "vue-router";
import Home from "../home";

Vue.use(Router);

export new Router({
    routes:[{
        path:"home",
        name:"home",
        component:Home
    }]
});

