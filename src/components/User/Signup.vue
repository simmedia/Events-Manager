<template>
  <v-container>
    <v-row justify="center">
      <v-col sm="6">
             <h2 class="primary--text" style="text-align: center">Sign Up</h2>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col sm="12" xs="12">
        <v-car>
          <v-card-text>
            <v-container>
              <form @submit="onSignup">
                <v-row justify="center">
                  <v-col lg=4 xs="12" sm="6">
                    <v-text-field
                      name='email'
                      label="Mail"
                      id="email"
                      v-model="email"
                      type="email"
                    required></v-text-field>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col lg=4 xs="12" sm="6">
                    <v-text-field
                      name='password'
                      label="Password"
                      id="password"
                      v-model="password"
                      type="password"
                    required></v-text-field>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col lg=4 xs="12" sm="6">
                    <v-text-field
                      name='confirmPassword'
                      label="Confirm Password"
                      id="confirmPassword"
                      v-model="confirmPassword"
                      type="password"
                      :rules=[comparePasswords]
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col lg=4 xs="12" sm="6">
                    <v-btn type="submit">Sign Up</v-btn>
                  </v-col>
                </v-row>
              </form>
            </v-container>
          </v-card-text>
        </v-car>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  computed: {
    comparePasswords() {
      return this.password !== this.confirmPassword ? 'Password do not match' : ''
    }
  },
  methods: {
    onSignup() {
      
    }
  }
}
</script>

<style>

</style>