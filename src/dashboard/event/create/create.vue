<template>
  <div>
    <v-subheader></v-subheader>

      <v-container
          class="fill-height"
          fluid
      >
        <div class="col-sm-12">
          <v-card class="mx-auto pa-5">
            <v-card-text>Create Event</v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-container>
                <v-row>
                  <v-text-field
                      v-model="formData.title"
                      :counter="50"
                      :rules="nameRules"
                      label="Title"
                      required
                  ></v-text-field>
                </v-row>

                <v-row>
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="formData.event_date"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="formData.event_date"
                        label="Picker in menu"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                      <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-row>

                

                <v-row>
                  <v-textarea
                    v-model="formData.description"
                    label="description"
                  ></v-textarea>                  
                </v-row>

              </v-container>
              <v-btn
                  color="info"
                  @click.prevent="createTalk"
                  :disabled="disabled"
              >
                Create
              </v-btn>
            </v-form>
          </v-card>
        </div>
      </v-container>
      <notification :status="show" :noty_color="color">{{message}}</notification>

  </div>
</template>

<script src="./create.js">

</script>