<template>
  <div class="admin">
    <div v-if="!user" class="admin__form">
      <label for="mail" class="admin__label">Email</label>
      <input
      id="mail"
      v-model="form.email"
      class="admin__input"
      />
      <label for="password" class="admin__label">Password</label>
      <input
      id="password"
      v-model="form.password"
      type="password"
      class="admin__input"
      />
      <button @click="onLogin" class="admin__button">Sign in</button>
      <button @click="goToMainPage" class="admin__button">Return to site</button>
      <p v-if="error" class="admin__error">{{ error }}</p>
    </div>
    <div v-else class="admin__wrapper">
      {{ user }}
      <button @click="onLogout" class="admin__button">Logout</button>
      <button @click="goToMainPage" class="admin__button">Return to site</button>
    </div>
  </div>
</template>

<script>
import { cloneDeep } from 'lodash';

import '@/assets/scss/admin.scss';

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AdminView',

  data() {
    return {
      form: {
        email: 'crossfit.sputnik@gmail.com',
        password: '',
        returnSecureToken: false,
      },
      formSnapshot: {
        email: 'crossfit.sputnik@gmail.com',
        password: '',
        returnSecureToken: false,
      },
    };
  },

  computed: {
    ...mapGetters(['user', 'error']),
  },

  methods: {
    ...mapActions(['login', 'logout']),

    onLogin() {
      this.login(this.form);
      this.form = cloneDeep(this.formSnapshot);
    },

    onLogout() {
      this.logout();
    },

    goToMainPage() {
      this.$router.push({ name: 'home' });
    },
  },
};
</script>
