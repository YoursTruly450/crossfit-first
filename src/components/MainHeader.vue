<template>
  <div class="header">
    <div class="header__block">
      <img 
        :src="require('@/assets/icons/logo.jpg')" 
        alt="спутник" 
        class="header__logo"
        @click="goToMaster"
      >
      <div v-if="links.length > 0" class="header__links">
        <a
          v-for="block in links"
          :key="block.id"
          :href="`#${block.anchor}`"
          class="header__link"
          :class="{'header__link-active': offsetTop === block.id}"
        >
          {{ block.name }}
        </a>
      </div>
      <div class="header__contacts">
        <a href="https://www.instagram.com/sputnik_functional_cf?igsh=czkwbHJ1NzdrZzcw" target="_blank" class="header__contact">
          <img 
            :src="require('@/assets/icons/instagram.png')" 
            alt="инстаграм"
          >
        </a>
        <a href="https://t.me/+EeCjrnADnuNlN2My" target="_blank" class="header__contact">
          <img 
            :src="require('@/assets/icons/telegram.png')" 
            alt="телеграм" 
          >
        </a>
        <a href="https://vk.com/sputnik_functional_cf" target="_blank" class="header__contact">
          <img 
            :src="require('@/assets/icons/vk.png')" 
            alt="ВК" 
          >
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/scss/header.scss';

export default {
  name: 'MainHeader',

  props: {
    links: {
      type: Array,
      default: () => [],
    },
    offsetTop: {
      type: Number,
      default: 1,
    },
  },

  methods: {
    goToMaster() {
      this.$router.push({ name: 'master' });
    },
  },
};
</script>
