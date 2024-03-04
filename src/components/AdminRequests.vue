<template>
  <div class="admin__wrapper">
    <button @click="onLogout" class="admin__button">Выйти</button>
    <button @click="goToMainPage" class="admin__button">Вернуться на сайт</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AdminRequests',

  props: {
    user: {
      type: Object,
      default: null,
    },
  },

  methods: {
    ...mapActions(['logout']),

    onLogout() {
      this.logout();
    },

    goToMainPage() {
      this.$router.push({ name: 'home' });
    },
  },
}
</script>