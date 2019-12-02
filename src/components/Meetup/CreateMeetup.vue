<template>
  <v-container>
    <v-row justify="center">
      <v-col xs="12" sm="6">
        <h2>Create a new Meetup</h2>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col xs="12" sm="6">
        <form @submit.prevent="onCreateMeetup">
          <v-col xs="12" sm="12">
            <v-text-field label="Title" id="title" name="title" v-model="title" required></v-text-field>
          </v-col>

          <v-col xs="12" sm="12">
            <v-text-field
              label="Location"
              id="location"
              name="location"
              v-model="location"
              required
            ></v-text-field>
          </v-col>

          <v-col xs="12" sm="12">
            <v-text-field
              label="image URL"
              id="image-url"
              name="imageUrl"
              v-model="imageUrl"
              required
            ></v-text-field>
          </v-col>

          <v-col xs="12" sm="12">
            <v-img height="300" :src="imageUrl"></v-img>
          </v-col>

          <v-col xs="12" sm="12">
            <v-textarea
              label="Description"
              id="description"
              name="description"
              multi-line
              v-model="description"
              required
            ></v-textarea>
          </v-col>
          <v-row justify="center">
            <v-col xs="12" sm="12" lg="6">
              <v-date-picker v-model="date"></v-date-picker>
              <p>{{ date }}</p>
            </v-col>
            <v-col xs="12" sm="12" lg="6">
              <v-time-picker format="24hr" v-model="time"></v-time-picker>
            <p>{{ time }}</p>
            </v-col>
          </v-row>
          <v-col xs="12" sm="12">
            <v-btn type="submit" :disabled="!formIsValid" class="primary">Create Meetup</v-btn>
            {{ submittableDateTime }}
          </v-col>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      location: "",
      imageUrl: "",
      description: "",
      date: null,
      time: null
    };
  },
  computed: {
    formIsValid() {
      return (
        this.title !== "" &&
        this.location !== "" &&
        this.imageUrl !== "" &&
        this.description !== ""
      );
    },
    submittableDateTime() {
      return `${this.date} at ${this.time}`
    }
  },
  methods: {
    onCreateMeetup() {
      if (!this.formIsValid) {
        return;
      }
      const meetupData = {
        title: this.title,
        location: this.location,
        imageUrl: this.imageUrl,
        description: this.description,
        date: this.submittableDateTime
      };
      this.$store.dispatch("createMeetup", meetupData);
      this.$router.push("/meetups");
    }
  }
};
</script>

<style>
</style>