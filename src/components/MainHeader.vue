<template>
  <div class="header">
    <div class="header__block">
      <img 
        :src="require('@/assets/icons/logo.jpg')" 
        alt="спутник" 
        class="header__logo"
      >
      <div v-if="links.length > 0" class="header__links">
        <a
          v-for="block in links"
          :key="block.id"
          :href="`#${block.anchor}`"
          class="header__link"
        >
          {{ block.name }}
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
  },
};
</script>
