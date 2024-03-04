import axios from 'axios';

// const apiKey = process.env.VUE_APP_API_KEY;

const url = process.env.VUE_APP_URL;

export default ({
  state: {
    requests: [],
    requestError: '',
	},
	getters: {
    reuqests(state) {
      return state.reuqests;
    },
    requestError(state) {
      return state.requestError;
    },
	},
	mutations: {
    setRequests(state, data) {
      state.reuqests = data;
    },
    setRequestError(state, error) {
      state.requestError = error;
    },
	},
  actions: {
    createRequest(ctx, request) {
      ctx.commit('setRequestError', '');
      return axios.post(`${url}requests.json`, request)
        .then((response) => response)
        .catch((error) => {
          ctx.commit('setRequestError', 'Произошла ошибка при отправке формы, попробуйте позже');
          return error;
        });
    },
  },
})