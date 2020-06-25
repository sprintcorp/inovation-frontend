<template>
  <div>
  <v-navigation-drawer
      v-model="drawer"
      app
      clipped
  >
    <v-list dense>
      <v-list-item :to="{name:'userHome'}">
        <v-list-item-action>
          <v-icon>mdi-home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item :to="{name:'createEvent'}">
        <v-list-item-action>
          <v-icon>mdi-mail</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Create Event</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item :to="{name:'createAttendee'}">
        <v-list-item-action>
          <v-icon>mdi-account</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Create Attendee</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item :to="{name:'attendeesOverview'}">
        <v-list-item-action>
          <v-icon>dynamic_feed</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Attendees</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item :to="{name:'attendeeEvent'}">
        <v-list-item-action>
          <v-icon>center_focus_weak</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Attendee Event</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  </div>
</template>

<style lang="scss" scoped>
  @import "./sidebar.scss";
</style>
<script src="./sidebar.js">

</script>