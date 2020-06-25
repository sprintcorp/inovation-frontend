import Loader from "../components/loader.vue";
import Notification from "../components/notificaton.vue";
import Circular_Loader from "../components/circular_loader.vue";
import NoContent from "../components/no-content.vue";

function componentRegistry(Vue) {
    Vue.component('loader', Loader);
    Vue.component('circular_loader', Circular_Loader);
    Vue.component('notification', Notification);
    Vue.component('no-content', NoContent);
}

export {
    componentRegistry
}