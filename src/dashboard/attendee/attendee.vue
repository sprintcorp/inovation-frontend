<template>
  <div>
    <v-subheader></v-subheader>

      <v-container
          class="fill-height"
          fluid
      >
        <div class="col-sm-12">
          <v-card class="mx-auto pa-5">
            <v-card-text>Create Attendee</v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-container>
                <v-row>
                  <v-text-field
                      v-model="formData.firstname"
                      :counter="50"
                      :rules="nameRules"
                      label="Firstname"
                      required
                  ></v-text-field>
                </v-row>
                <v-row>
                  <v-text-field
                      v-model="formData.lastname"
                      :counter="50"
                      :rules="nameRules"
                      label="Lastname"
                      required
                  ></v-text-field>
                </v-row>
                <v-row>
                  <v-text-field
                      v-model="formData.email"
                      :counter="50"
                      :rules="email"
                      label="Email"
                      required
                  ></v-text-field>
                </v-row>
                <v-row>
                  <v-select
                    :items="items"
                    label="Gender"
                    v-model="formData.gender"
                    ></v-select>
                </v-row>

                
              </v-container>
              <v-btn
                  color="info"
                  @click.prevent="createAttendee"
                  :disabled="disabled"
              >
                {{ buttonText }}
              </v-btn>
            </v-form>
          </v-card>
        </div>
      </v-container>
      <notification :status="show" :noty_color="color">{{message}}</notification>
  </div>
</template>

<script src="./attendee.js"></script>