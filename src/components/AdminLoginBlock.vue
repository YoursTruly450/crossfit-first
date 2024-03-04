<template>
  <div class="admin__form">
    <label for="mail" class="admin__label">Мэйл</label>
    <input
      id="mail"
      v-model="form.email"
      class="admin__input"
    />
    <label for="password" class="admin__label">Пароль</label>
    <input
      id="password"
      v-model="form.password"
      type="password"
      class="admin__input"
    />
    <button @click="onLogin" class="admin__button">Войти</button>
    <button @click="goToMainPage" class="admin__button">Вернуться на сайт</button>
    <p v-if="error" class="admin__error">{{ error }}</p>
  </div>
</template>

<script>
import { cloneDeep } from 'lodash';

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AdminLoginBlock',

  data() {
    return {
      form: {
        email: 'crossfit.sputnik@gmail.com',
        password: '',
        returnSecureToken: false,
      },
      defaultForm: {
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
    ...mapActions(['login']),

    onLogin() {
      this.login(this.form);
      this.form = cloneDeep(this.defaultForm);
    },

    goToMainPage() {
      this.$router.push({ name: 'home' });
    },
  },
}
</script>