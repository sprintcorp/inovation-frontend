<template>
  <div>
    <v-app-bar
        app
        color="indigo"
        dark
        clipped-left
    >
      <v-app-bar-nav-icon @click.stop="$emit('toggle-drawer')"/>
      <v-toolbar-title
          style="width: 300px"
          class="ml-0"
      >
        <span class="text-uppercase ml-2 font-weight-bold">Event</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <div class="font-weight-bold mr-5">{{profile}}</div>
      <v-menu offset-y origin="center center" :nudge-bottom="10" transition="scale-transition">
        <v-btn class="mr-2" icon large flat slot="activator" :ripple="false">
          <v-avatar size="42px">
            <img src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Sunglasses&hairColor=Black&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light"/>
          </v-avatar>
        </v-btn>

      </v-menu>

    </v-app-bar>
    <v-spacer></v-spacer>
  </div>
</template>

<style lang="scss" scoped>
  @import "./header.scss";
</style>

<script src="./header.js">

</script>