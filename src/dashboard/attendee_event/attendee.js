import { GET_TALKS, GET_ATTENDEES, CREATE_ATTENDEE_TALK } from "../../Store/actions"
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            disabled: false,
            buttonText: "Save",
            color: "",
            show: false,
            message: "",
            formData: {
                attendee_id: '',
                talk_id: ''
            }

        }
    },
    methods: {
        getAttendee() {
            this.$store.dispatch(GET_ATTENDEES);
        },
        getTalk() {
            this.$store.dispatch(GET_TALKS);
        },
        createAttendeeTalk() {
            this.disabled = true;
            this.buttonText = "Loading...",
                this.$store.dispatch(CREATE_ATTENDEE_TALK, this.formData).then(
                    (data) => {
                        this.disabled = false
                        this.buttonText = "Save"
                        this.show = true;
                        this.color = 'success';
                        this.message = data
                    },
                    () => {
                        this.disabled = false
                        this.buttonText = "Save"
                        this.show = true;
                        this.color = 'error';
                        this.message = "Operation not successful"
                    }
                );
        }
    },
    computed: {
        ...mapGetters(['talks', 'attendees'])
    },
    mounted() {
        this.getAttendee();
        this.getTalk();
    }
}