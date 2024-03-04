import axios from 'axios';

const apiKey = process.env.VUE_APP_API_KEY;

export default ({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    error: null,
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
        .then(({ data }) => {
          localStorage.setItem('user', JSON.stringify(data));
          ctx.commit('setUser', data);
          // axios.defaults.headers.common.Authorization = data.idToken;
        })
        .catch(() => {
          ctx.commit('setUser', null);
          ctx.commit('setError', 'Invalid login data');
        });
    },

    logout(ctx) {
      // delete axios.defaults.headers.common.Authorization;
      ctx.commit('setUser', null);
      localStorage.clear();
    },
  },
})