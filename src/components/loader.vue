<template>
<v-container class="mx-auto" style="height: 400px;">
  <v-row
      class="fill-height"
      align-content="center"
      justify="center"
  >
    <v-col
        class="subtitle-1 text-center"
        cols="12"
    >
      <slot></slot>
    </v-col>
    <v-col cols="6">
      <v-progress-linear
          color="deep-purple accent-4"
          indeterminate
          rounded
          height="6"
      ></v-progress-linear>
    </v-col>
  </v-row>
</v-container>
</template>
<script>
  export default {
    name: 'Loader',
    data(){
      return{

      }
    }
  }
</script>