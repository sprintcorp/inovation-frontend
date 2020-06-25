import { TalkService } from "../../service";
import { CREATE_TALK, GET_TALKS, DELETE_TALK } from "../actions";
import { SET_TALKS } from "../mutations";


const initialState = {
    talk: [],
    talks: [],
};

export const state = {...initialState };


const actions = {
    async [CREATE_TALK](context, payload) {
        window.console.log(payload);
        const { data } = await TalkService.createTalk(payload);
        return data;
    },
    async [GET_TALKS](context) {
        const { data } = await TalkService.getTalks();
        context.commit(SET_TALKS, data);
        return data;
    },
    async [DELETE_TALK](context, payload) {
        const { data } = await TalkService.deleteTalk(payload);
        context.dispatch(GET_TALKS);
        return data;
    }
};

const mutations = {
    [SET_TALKS](state, talks) {
        state.talks = talks;
    },
};

const getters = {
    talks(state) {
        return state.talks;
    },
};

export default {
    state,
    actions,
    mutations,
    getters
};