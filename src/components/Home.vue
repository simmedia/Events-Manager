<template>
  <v-container>
    <v-layout class="mb-5" row wrap>
      <v-flex xs12 sm6 class="text-xs-center text-sm-center">
        <v-btn large router to="/meetups" class="primary">Explore Meetups</v-btn>
      </v-flex>

      <v-flex xs12 sm6 class="text-xs-center text-sm-center">
        <v-btn large router to="/meetup/new" class="primary">Organize Meetup</v-btn>
      </v-flex>
    </v-layout>

      <v-layout row wrap>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item 
            
            v-for="meetup in meetups" 
            :src="meetup.imageUrl" 
            :key="meetup.id"
            >
            <div style="cursor: pointer" @click="onLoadMeetup(meetup.id)" class="title">{{meetup.title}}</div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      meetups: [
        {imageUrl: 'https://www.history.com/.image/t_share/MTU3ODc5MDgyNjY5OTc1MjYz/new-york-city.jpg', id: '123edsadsd', title: 'Meetup in NewYork'},

        {imageUrl: 'https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/newsletter/eiffel-tower-in-paris-151-medium.jpg?1564742900', id: '5353edsadsd', title: 'Meetup in Paris'}
      ]
    }
  },
  methods: {
    onLoadMeetup(id) {
      this.$router.push('/meetups/' + id)
    }
  }
};
</script>


<style lang="scss" scoped>
  .title {
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
</style>