<template>
  <div id="app" class="main">
    <MainHeader
      :links="blocks"
    />
    <HomeBlock id="home" />
    <AboutBlock id="about"/>
    <LocationBlock id="location" />
    <PriceBlock id="price" />
  </div>
</template>

<script>
import '@/assets/scss/main.scss';

import MainHeader from '@/components/MainHeader.vue';
import HomeBlock from '@/components/HomeBlock.vue';
import AboutBlock from '@/components/AboutBlock.vue';
import LocationBlock from '@/components/LocationBlock.vue';
import PriceBlock from '@/components/PriceBlock.vue';

export default {
  name: 'App',

  components: {
    MainHeader,
    HomeBlock,
    AboutBlock,
    LocationBlock,
    PriceBlock,
  },

  data() {
    return {
      blocks: [
        {
          id: 1,
          name: 'Главная',
          anchor: 'home',
        },
        {
          id: 2,
          name: 'О нас',
          anchor: 'about',
        },
        {
          id: 3,
          name: 'локация',
          anchor: 'location',
        },
        {
          id: 4,
          name: 'Цены',
          anchor: 'price',
        },
      ],
    };
  },

  created() {
    window.addEventListener('scroll', () => {
      document.body.style.cssText = `--scroll-top: ${window.scrollY}px`;
    });
  },
};
</script>
