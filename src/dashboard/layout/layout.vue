<template>
  <v-app id="inspire">
    <TheSidebar ref="drawer" @sideBarWasToggled ="drawer = $event"/>
    <TheHeader @toggle-drawer="$refs.drawer.drawer = !$refs.drawer.drawer"/>

      <v-content>
        <v-container>
          <div class="main_card">
            <router-view/>
          </div>
        </v-container>
      </v-content>

    <TheFooter/>
  </v-app>
</template>

<style lang="scss" scoped>
  @import "./layout.scss";
</style>

<script src="./layout.js">

</script>