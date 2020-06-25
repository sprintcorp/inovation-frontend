import { CREATE_TALK } from "../../../Store/actions";

export default {
    data() {
        return {


            menu: false,
            modal: false,
            menu2: false,

            disabled: false,
            buttonText: "Save",
            color: "",
            show: false,
            dialog: false,
            message: "",
            formData: {
                description: "",
                event_date: new Date().toISOString().substr(0, 10),
                title: ""
            }
        }
    },

    methods: {
        createTalk() {

            this.disabled = true;

            this.$store.dispatch(CREATE_TALK, this.formData).then(
                () => {
                    this.disabled = false
                    this.buttonText = "Save"
                    this.show = true;
                    this.color = 'success';
                    this.message = "Talk successfully created";
                },
                (error) => {
                    this.disabled = false
                    this.buttonText = "Save"
                    this.show = true;
                    this.color = 'error';
                    this.message = error.message;
                }
            );
        }
    }
}