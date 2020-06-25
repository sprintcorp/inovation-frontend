<template>
  <div>
    <v-card class="d-flex justify-center pa-8 mx-auto">
      <p>
        <v-icon>mdi-alert-circle</v-icon>
        <slot></slot>
      </p>
    </v-card>
  </div>
</template>


<style>
  .size {
  width: 100%;
  height: 10em;
}
.adj_center {
  padding-left: 30em;
}
</style>

<script>
export default {
  name : 'NoContent',
  data() {
    return {

    }
  }
}
</script>
