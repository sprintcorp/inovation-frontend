import TheHeader from '../../layout/header/header.vue';
import TheFooter from '../../layout/footer/footer.vue';
import TheSidebar from '../../layout/sidebar/sidebar.vue';
export default {
  data() {
    return {
      drawer: null,
    }
  },
  components:{
    TheHeader,TheSidebar,TheFooter
  }
}