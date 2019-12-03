<template>
  <v-app>
    <v-navigation-drawer temporary v-model="drawer" app>
      <v-list dense>
        <v-list-item
          color="indigo"
          router
          :to="item.link"
          v-for="item in menuItems"
          :key="item.title"
          link
        >
          <v-list-item-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item 
          v-if="userIsAuth" 
          @click="onLogout"
          router 
          style="cursor: pointer">
          <v-list-item-action>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon class="hidden-sm-and-up" @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">DevMeetup</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn v-for="item in menuItems" :key="item.title" router :to="item.link" text>
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
        <v-btn @click="onLogout"  v-if="userIsAuth" text>
          <v-icon left>mdi-logout</v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid>
         <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    drawer: false
  }),
  computed: {
    menuItems() {
      let menuItems = [
        { icon: "mdi-face", title: "Sign Up", link: "/signup" },
        { icon: "mdi-key", title: "Sign In", link: "/signin" }
      ];
      if (this.userIsAuth) {
        menuItems = [
          { icon: "mdi-calendar", title: "View Meetups", link: "/meetups" },
          { icon: "mdi-note", title: "Organise Meetup", link: "/meetup/new" },
          { icon: "mdi-account", title: "Profile", link: "/profile" }
        ];
      }
      return menuItems;
    },
    userIsAuth() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
};
</script>

<style lang="scss">
aside {
  display: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>