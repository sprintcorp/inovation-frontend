<template>
  <div>
    <v-subheader></v-subheader>

      <v-container
          class="fill-height"
          fluid
      >
      <!-- <pre>{{ attendees }}</pre> -->
        <div class="col-sm-12">
          
          <v-card class="mx-auto pa-5">
            
            <v-card-text>Add Attendee To Event</v-card-text>
            
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-container>
                <v-row class="">
                    <v-col class="col-md-5 col-sm-3 mr-5">
                        <v-row>
                        <v-select
                            :items="talks"
                            label="Talks"
                            v-model="formData.talk_id"
                            item-value="id"
                            item-text="title"
                            ></v-select>
                        </v-row>
                    </v-col>
                
                    <v-col class="col-md-5 col-sm-3">
                        <v-row>
                        <v-select
                            :items="attendees"
                            label="Attendees"
                            v-model="formData.attendee_id"
                            item-value="id"
                            item-text="firstname"
                            ></v-select>
                        </v-row>
                    </v-col>

                </v-row>
              </v-container>
              <v-btn
                  color="info"
                  @click.prevent="createAttendeeTalk"
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

<script src="./attendee.js">
</script>