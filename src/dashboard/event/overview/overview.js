import { mapGetters } from "vuex";
import { GET_ATTENDEES } from "../../../Store/actions";

export default {
    inject: ['theme'],
    data() {
        return {
            loader: false,
        }
    },
    methods: {
        getAttendees() {
            this.loader = true;
            this.$store.dispatch(GET_ATTENDEES).then(
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
        this.getAttendees();
    }
}