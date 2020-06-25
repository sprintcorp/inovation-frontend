import { AttendeeService } from "../../service";
import { CREATE_ATTENDEE, GET_ATTENDEES, CREATE_ATTENDEE_TALK, GET_TALK_ATTENDEES } from "../actions";
import { SET_ATTENDEES } from "../mutations";



const initialState = {
    attendee: [],
    attendees: [],
};

export const state = {...initialState };

const actions = {
    async [CREATE_ATTENDEE](context, payload) {
        const { data } = await AttendeeService.createAttendee(payload);
        return data;
    },
    async [CREATE_ATTENDEE_TALK](context, payload) {
        const { data } = await AttendeeService.addAttendeeToTalk(payload);
        return data;
    },
    async [GET_ATTENDEES](context) {
        const { data } = await AttendeeService.getAttendees();
        context.commit(SET_ATTENDEES, data);
        return data;
    },
    async [GET_TALK_ATTENDEES](context, payload) {
        const { data } = await AttendeeService.getTalkAttendees(payload);
        context.commit(SET_ATTENDEES, data);
        return data;
    },
};

const mutations = {
    [SET_ATTENDEES](state, attendees) {
        state.attendees = attendees;
    },
};

const getters = {
    attendees(state) {
        return state.attendees;
    },
};

export default {
    state,
    actions,
    mutations,
    getters
};