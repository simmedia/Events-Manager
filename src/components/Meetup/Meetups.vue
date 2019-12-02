<template>
  <v-container>
    <v-layout row wrap>
      <v-row>
        <v-col v-for="meetup in meetups" :key="meetup" sm="6" xs="12">
          <v-card class="mx-auto">
            <v-img
              :src="meetup.imageUrl"
              height="200px"
            ></v-img>

            <v-card-title>{{meetup.title}}</v-card-title>

            <v-card-subtitle>1,000 miles of wonder</v-card-subtitle>

            <v-card-actions>
              <v-btn text to="/meetups/1">View</v-btn>

              <v-btn color="purple" text>Explore</v-btn>

              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    data() {
    return {
      meetups: [
        {imageUrl: 'https://www.history.com/.image/t_share/MTU3ODc5MDgyNjY5OTc1MjYz/new-york-city.jpg', id: '123edsadsd', title: 'Meetup in NewYork'},

        {imageUrl: 'https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/newsletter/eiffel-tower-in-paris-151-medium.jpg?1564742900', id: '5353edsadsd', title: 'Meetup in Paris'}
      ]
    }
  }
};
</script>

<style>
</style>