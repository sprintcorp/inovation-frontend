<template>
  <div>

    <v-row class="headline">
  <v-col cols="12" sm="6" md="12" xs="12">Talks</v-col>
     
    </v-row>
    <v-divider></v-divider>
      <v-row v-if="!loader && talks.length">
        <v-col cols="12" sm="6" md="12" xs="6">
          <div v-for="(talk,index) in talks" :key="index">

            <v-card class="mb-5">
            <v-card-title class="pb-0">{{ talk.title }}</v-card-title>

            <v-card-text class="text--primary">
              <div>{{ talk.description }}</div>
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
                    <v-list-item-title>Date {{ talk.event_date }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
              <v-col>
                <v-card-actions class="justify-end">
              

              <v-btn
                  color="orange"
                  text
                  :to="{name:'talkAttendees',params:{id:talk.id}}"
              >
                <v-icon>mdi-eye</v-icon>
              </v-btn>
              <v-btn
                color="orange"
                text
                @click="deleteTalk(talk.id)"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-card-actions>
              </v-col>
            </v-row>
          </v-card>
          </div>
        </v-col>

        
      </v-row>


    <v-row class="mx-auto" style="justify-content: center">
      <circular_loader v-if="loader && !talks.length"></circular_loader>
    </v-row>
    <notification :status="show" :noty_color="color">{{message}}</notification>
  </div>
</template>

<style lang="scss" scoped>
  @import "./home.scss";
</style>

<script src="./home.js"></script>