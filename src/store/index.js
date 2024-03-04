import auth from '@/store/modules/auth';
import requests from '@/store/modules/requests';

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { auth, requests },
})
