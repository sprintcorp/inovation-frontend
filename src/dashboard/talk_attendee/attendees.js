import { mapGetters } from "vuex";
import { GET_TALK_ATTENDEES } from "../../Store/actions";

export default {
    inject: ['theme'],
    data() {
        return {
            loader: false,
        }
    },
    methods: {
        getTalks(id) {
            this.loader = true;
            this.$store.dispatch(GET_TALK_ATTENDEES, id).then(
                () => {
                    this.loader = false;
                },
                () => {
                    this.loader = false;
                }
            );
        },

    },
    computed: {
        ...mapGetters(['attendees'])
    },
    mounted() {
        this.getTalks(this.$route.params.id);
    }
}