import Vue from 'vue';
import Vuex from 'vuex';

import attendee from './modules/attendee';
import talk from './modules/talk';


Vue.use(Vuex);

const modules = {
    attendee,
    talk
};

/*exporting the vuex store for the application to use */
export default new Vuex.Store({
    modules
});