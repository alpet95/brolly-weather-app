import Vue from "vue";
import App from "./App.vue";
import Container from "./components/interface/Container.vue";
import Card from "./components/interface/Card.vue";
import Loading from "./components/interface/Loading.vue";
import Error from "./components/interface/Error.vue";

import { library } from "@fortawesome/fontawesome-svg-core/index";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome/index";
import { faUmbrella } from "@fortawesome/free-solid-svg-icons";
import { faTowerBroadcast } from "@fortawesome/free-solid-svg-icons";

library.add(faUmbrella, faTowerBroadcast);

Vue.component("container", Container);
Vue.component("card", Card);
Vue.component("loading-spinner", Loading);
Vue.component("error", Error);
Vue.component("fa-umbrella", FontAwesomeIcon);
Vue.component("fa-tower-broadcast", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
