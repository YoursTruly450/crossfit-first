import axios from 'axios';

// const apiKey = process.env.VUE_APP_API_KEY;

const url = process.env.VUE_APP_URL;

export default ({
  state: {
    requests: [],
    requestError: '',
	},
	getters: {
    requests(state) {
      return state.requests;
    },
  
    requestError(state) {
      return state.requestError;
    },
	},
	mutations: {
    setRequests(state, data) {
      state.requests = data;
    },

    setRequestError(state, error) {
      state.requestError = error;
    },
	},
  actions: {
    createRequest(ctx, request) {
      ctx.commit('setRequestError', '');
      return axios.post(`${url}requests.json`, request)
        .then(() => {})
        .catch(() => {
          ctx.commit('setRequestError', 'Произошла ошибка при отправке формы, попробуйте позже');
        });
    },

    getRequests(ctx, token) {
      return axios.get(`${url}requests.json`, { params: { auth: token } })
        .then(({ data }) => {
          ctx.commit('setRequests', data);
        })
        .catch(() => {
          ctx.commit('setRequestError', 'Произошла ошибка при отправке формы, попробуйте позже');
        });
    },

    deleteRequest(ctx, id) {
      return axios.delete(`${url}requests/${id}.json`)
    },
  },
})