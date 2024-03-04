<template>
  <div class="admin__wrapper">
    <div v-if="list.length > 0" class="admin__requests">
      <div 
        v-for="item in list"
        :key="item.id"
        class="admin__request"
      >
        <span>{{ `Имя: ${item.name}` }}</span>
        <span>{{ `Контакт: ${item.name}` }}</span>
        <span>{{ `Сообщение: ${item.message}` }}</span>
        <button class="admin__button" @click="deleteItem(item)">удалить</button>
      </div>
    </div>
    <div v-else class="admin__requests">
      нет новых заявок
    </div>
    <button @click="onLogout" class="admin__button">Выйти</button>
    <button @click="goToMainPage" class="admin__button">Вернуться на сайт</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AdminRequests',

  props: {
    user: {
      type: Object,
      default: null,
    },
  },

  computed: {
    ...mapGetters(['requests']),

    list() {
      let arr = [];
      if (this.requests) {
        arr = Object.keys(this.requests).map((key) => ({
          id: key,
          name: this.requests[key].name,
          contact: this.requests[key].contact,
          message: this.requests[key].message,
        }));
      }
      return arr;
    },
  },

  created() {
    this.fetchRequests();
  },

  methods: {
    ...mapActions(['logout', 'getRequests', 'deleteRequest']),

    onLogout() {
      this.logout();
    },

    goToMainPage() {
      this.$router.push({ name: 'home' });
    },

    fetchRequests() {
      const token = this.user.idToken;
      this.getRequests(token);
    },

    deleteItem(item) {
      const { id } = item;
      this.deleteRequest(id)
        .then(() => {
          this.fetchRequests();
        })
    },
  },
}
</script>