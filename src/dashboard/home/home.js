import { GET_TALKS, DELETE_TALK } from "../../Store/actions";
import { mapGetters } from "vuex";

export default {
    inject: ['theme'],
    data() {
        return {
            color: "",
            show: false,
            message: "",
            loader: false,
        }
    },
    methods: {
        getTalks() {
            this.loader = true;
            this.$store.dispatch(GET_TALKS).then(
                () => {
                    this.loader = false;
                },
                () => {
                    this.loader = false;
                }
            );
        },
        deleteTalk(id) {
            this.$store.dispatch(DELETE_TALK, id).then(
                () => {
                    this.show = true;
                    this.color = 'success';
                    this.message = "Talk deleted"
                    this.getTalks();
                },
                () => {
                    this.show = true;
                    this.color = 'success';
                    this.message = "Talk not deleted"
                }
            )
        }
    },
    computed: {
        ...mapGetters(['talks'])
    },
    mounted() {
        this.getTalks();
    }
}