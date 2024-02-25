import axios from 'axios';

const apiKey = `${process.env.VUE_APP_API_KEY}`;

export default ({
  state: {
    user: null,
    error: null
	},
	getters: {
    user(state) {
      return state.user;
    },
    error(state) {
      return state.error;
    },
	},
	mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setError(state, error) {
      state.error = error;
    },
	},
  actions: {
    login(ctx, form) {
      ctx.commit('setError', null);
      const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
      return axios.post(url, form)
        .then((response) => {
          const user = response.data;
          ctx.commit('setUser', user);
        })
        .catch(() => {
          ctx.commit('setError', 'Invalid login data');
        });
    },

    logout(ctx) {
      ctx.commit('setUser', null);
    },
  },
})