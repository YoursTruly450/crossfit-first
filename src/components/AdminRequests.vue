<template>
  <div class="admin__wrapper">
    <button @click="onLogout" class="admin__button">Logout</button>
    <button @click="goToMainPage" class="admin__button">Return to site</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AdminRequests',

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