import BaseHandler from '../../handler/handler';

class TalkProvider extends BaseHandler {
    getTalks() {
        return this.query('api/talk');
    }

    createTalk(payload) {
        return this.post('api/talk', payload);
    }

    getTalk(params) {
        return this.get('api/talk/' + params);
    }

    updateTalk(payload, params) {
        return this.get('api/talk/' + params, payload);
    }

    deleteTalk(params) {
        return this.delete('api/talk/' + params);
    }


}

export default TalkProvider;