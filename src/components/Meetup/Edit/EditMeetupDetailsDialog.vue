<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
      <v-btn text  v-on="on"><v-icon>mdi-pencil</v-icon></v-btn>
    </template>

    <v-card>
      <v-card-title class="indigo white--text">Edit Meetup</v-card-title>

      <v-card-text></v-card-text>

      <v-divider></v-divider>
      
      <v-container>
        <v-card>
          <v-col xs="12" sm="12">
            <v-text-field label="Title" id="title" name="title" v-model="editedTitle" required></v-text-field>
          </v-col>
          <v-col xs="12" sm="12">
            <v-textarea
              label="Description"
              id="description"
              name="description"
              multi-line
              v-model="editedDescription"
              required
            ></v-textarea>  
          </v-col>
        </v-card>
      </v-container>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="indigo" class="white--text" flat @click="onSaveChanges">Save</v-btn>
        <v-btn color="secondary" text @click="closeDialog">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['meetup'],
    data() {
        return {
            dialog: false,
            editedTitle: this.meetup.title,
            editedDescription: this.meetup.description
        }
    },
    methods: {
      onSaveChanges() {
        if(this.editedTitle.trim() === '' && this.editedDescription.trim() === '') {
          return
        }
        this.dialog = false
        this.$store.dispatch('updateMeetupData', {
          id: this.meetup.id,
          title: this.editedTitle,
          description: this.editedDescription
        })
      },
      closeDialog() {
        this.editedTitle = this.meetup.title
        this.editedDescription = this.meetup.description
        this.dialog = false
      }
    }
};
</script>

<style>
</style>