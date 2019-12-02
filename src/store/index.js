import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedMeetups: [

      {
        imageUrl: 'https://www.history.com/.image/t_share/MTU3ODc5MDgyNjY5OTc1MjYz/new-york-city.jpg',
        id: '123edsadsd',
        title: 'Meetup in NewYork',
        date: '2018-08-21'
      },

      {
        imageUrl: 'https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/newsletter/eiffel-tower-in-paris-151-medium.jpg?1564742900',
        id: '5353edsadsd',
        title: 'Meetup in Paris',
        date: '2012-04-11'
      }
    ],
    user: {
      id: '23rasdr342',
      registeredMeetups: ['123edsadsd']
    }
  },
  mutations: {
    createMeetup(state,payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date
      }
      // Reach out to firebase and store it
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups(state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    loadedMeetup(state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    },
    featuredMeetups(state, getters) {
      return getters.loadedMeetups.slice(0, 5);
    }
  }
})