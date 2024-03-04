<template>
  <div class="admin">
    <AdminLoginBlock v-if="!user" />
    <AdminRequests v-else :user="user" />
  </div>
</template>

<script>
import '@/assets/scss/admin.scss';

import { mapGetters } from 'vuex';

import AdminLoginBlock from '@/components/AdminLoginBlock.vue';
import AdminRequests from '@/components/AdminRequests.vue';

export default {
  name: 'AdminView',

  components: {
    AdminLoginBlock,
    AdminRequests,
  },

  computed: {
    ...mapGetters(['user']),
  },
};
</script>