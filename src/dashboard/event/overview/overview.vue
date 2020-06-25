<template>
  <div>

    <v-row class="headline">
        <!-- {{ attendees }} -->
  <v-col cols="12" sm="6" md="12" xs="12">Attendees</v-col>
     
    </v-row>
    <v-divider></v-divider>
      <v-row v-if="!loader && attendees.length">
        <v-col cols="12" sm="6" md="12" xs="6">
          <div v-for="(attendee,index) in attendees" :key="index">

            <v-card class="mb-5">
            <v-card-title class="pb-0">{{ attendee.firstname }} {{attendee.lastname}}</v-card-title>

            <v-card-text class="text--primary">
              <div>{{ attendee.email }}</div>
            </v-card-text>
            <v-row>
              <v-col>
                <v-list-item class="grow">
                  <v-list-item-avatar color="grey darken-3">
                    <v-img
                        class="elevation-6"
                        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                    ></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>Created {{ attendee.created_at }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
              <v-col>
                <v-card-actions class="justify-end">
             
             
            </v-card-actions>
              </v-col>
            </v-row>
          </v-card>
          </div>
        </v-col>

        
      </v-row>


    <v-row class="mx-auto" style="justify-content: center">
      <circular_loader v-if="loader && !attendees.length"></circular_loader>
    </v-row>
    <notification :status="show" :noty_color="color">{{message}}</notification>
    <no-content v-if="!loader && !attendees.length">
        There are no attendees at the moment
    </no-content>
  </div>
</template>



<script src="./overview.js"></script>