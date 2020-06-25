import BaseHandler from '../../handler/handler';

class AttendeeProvider extends BaseHandler {
    createAttendee(payload) {
        return this.post('api/attendee', payload)
    }

    getAttendees() {
        return this.query('api/attendee')
    }

    getAttendee(params) {
        return this.get('api/attendee/' + params)
    }

    updateAttendee(params, payload) {
        return this.get('api/attendee/' + params, payload)
    }

    deleteAttendee(params) {
        return this.get('api/attendee/' + params)
    }

    addAttendeeToTalk(payload) {
        return this.post('api/attendee_talk', payload)
    }

    getTalkAttendees(params) {
        return this.query('api/all_talk_attendee/' + params)
    }
}


export default AttendeeProvider;