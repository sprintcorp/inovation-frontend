import { CREATE_ATTENDEE } from "../../Store/actions"

export default {
    data() {
        return {
            items: ['male', 'female'],
            disabled: false,
            buttonText: "Save",
            color: "",
            show: false,
            message: "",
            formData: {
                gender: "",
                firstname: "",
                lastname: "",
                email: "",

            }
        }
    },
    methods: {
        createAttendee() {
            this.disabled = true;
            this.buttonText = "Loading...",
                this.$store.dispatch(CREATE_ATTENDEE, this.formData).then(
                    () => {
                        this.disabled = false
                        this.buttonText = "Save"
                        this.show = true;
                        this.color = 'success';
                        this.message = this.formData.firstname + " added to attendee"
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
    }
}