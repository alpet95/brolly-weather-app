import Vue from "vue";
import App from "./App.vue";
import Container from "./components/interface/Container.vue";

import { library } from "@fortawesome/fontawesome-svg-core/index";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome/index";
import { faUmbrella } from "@fortawesome/free-solid-svg-icons";

library.add(faUmbrella);

Vue.component("container", Container);
Vue.component("umbrella-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
