<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',

  beforeDestroy() {
    this.onDestroy();
  },

  methods: {
    ...mapActions(['logout']),

    onDestroy() {
      this.logout();
    },
  },
};
</script>
