<template>
  <v-container>
    <v-row wrap>
      <v-col sm="12">
        <v-card>
          <v-card-title>
            <h4 class="secondary--text">{{meetup.title}}</h4>
          </v-card-title>
            <v-img
              :src="meetup.imageUrl"
              height="300"
            >
            </v-img>
          <v-card-text>
            <div class="secondary--text" style="font-size: 1.3em">
              {{meetup.date}}
            </div>
          </v-card-text>
          <v-card-text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A non fuga,
            asperiores soluta reprehenderit libero maiores reiciendis ut!
            Voluptatem iste alias optio fugit provident laudantium esse odio
            eius quam officia!
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn class="secondary lighten-2" text>Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    meetup() {
      return this.$store.getters.loadedMeetup(this.id)
    }
  }
};
</script>

<style></style>
