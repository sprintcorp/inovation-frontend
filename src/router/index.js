import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({

    mode: 'history',
    scrollBehavior() {
        return { x: 0, y: 0 };
    },

    routes: [{
        path: '/',
        component: () =>
            import ('../dashboard/layout/layout.vue'),
        redirect: {
            name: 'userHome'
        },
        children: [{
                path: '/',
                name: 'userHome',
                component: () =>
                    import ('../dashboard/home/home.vue'),
                meta: {
                    pageTitle: {
                        icon: 'mdi-home',
                        title: 'Dashboard',
                    },
                }
            },

            {
                path: 'attendees-overview',
                name: 'attendeesOverview',
                component: () =>
                    import ('../dashboard/event/overview/overview.vue'),
                meta: {
                    pageTitle: {
                        icon: 'mdi-home',
                        title: 'attendee-overview'
                    },
                }
            },
            {
                path: 'create-event',
                name: 'createEvent',
                component: () =>
                    import ('../dashboard/event/create/create.vue'),
                meta: {
                    pageTitle: {
                        icon: 'mdi-home',
                        title: 'create-event'
                    },
                }
            },
            {
                path: 'create-attendee',
                name: 'createAttendee',
                component: () =>
                    import ('../dashboard/attendee/attendee.vue'),
                meta: {
                    pageTitle: {
                        icon: 'mdi-home',
                        title: 'create-attendee'
                    },
                }
            },
            {
                path: 'add-attendee-event',
                name: 'attendeeEvent',
                component: () =>
                    import ('../dashboard/attendee_event/attendee.vue'),
                meta: {
                    pageTitle: {
                        icon: 'mdi-home',
                        title: 'add-attendee-event'
                    },
                }
            },
            {
                path: 'talk-attendee/:id',
                name: 'talkAttendees',
                component: () =>
                    import ('../dashboard/talk_attendee/attendees.vue'),
                meta: {
                    pageTitle: {
                        icon: 'mdi-home',
                        title: 'talk-attendees'
                    },
                }
            }
        ]
    }]
});
export default router;