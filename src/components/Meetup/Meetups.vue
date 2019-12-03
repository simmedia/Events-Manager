<template>
  <v-container>
      <v-row>
        <v-col v-for="meetup in meetups" :key="meetup.id" lg="4" sm="6" xs="12">
          <v-card class="mx-auto">
            <v-img
              :src="meetup.imageUrl"
              height="200px"
            ></v-img>

            <v-card-title>{{meetup.title}}</v-card-title>

            <v-card-subtitle>{{meetup.date}}</v-card-subtitle>

            <v-card-actions>
              <v-btn text :to="'/meetups/' + meetup.id">View</v-btn>

              <v-btn color="purple" text>Explore</v-btn>

              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
   computed: {
     meetups() {
       return this.$store.getters.loadedMeetups
     }
   }
};
</script>

<style>
</style>