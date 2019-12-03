<template>
  <v-container>
    <v-row class="mb-5" wrap>
      <v-col xs="12" sm="6" class="text-xs-center text-sm-center">
        <v-btn large router to="/meetups" class="primary">Explore Meetups</v-btn>
      </v-col>

      <v-col xs="12" sm="6" class="text-xs-center text-sm-center">
        <v-btn large router to="/meetup/new" class="primary">Organize Meetup</v-btn>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col xs="12" sm="6" class="text-center">
        <v-progress-circular 
        width="7"
        :size="70"
        indeterminate 
        v-if="loading"
        :value="40"></v-progress-circular>
      </v-col>
    </v-row>

    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel v-if="!loading">
          <v-carousel-item v-for="meetup in meetups" :src="meetup.imageUrl" :key="meetup.id">
            <div
              style="cursor: pointer"
              @click="onLoadMeetup(meetup.id)"
              class="title"
            >{{meetup.title}}</div>
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
  computed: {
    meetups() {
      return this.$store.getters.featuredMeetups;
    },
    loading() {
      return this.$store.getters.loading
    }
  },
  methods: {
    onLoadMeetup(id) {
      this.$router.push("/meetups/" + id);
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
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 2em;
  padding: 20px;
}
</style>