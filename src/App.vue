<template>
  <div id="app" class="main">
    <MainHeader
      :links="blocks"
      :offsetTop="offsetTop"
    />
    <BackgroundLayer
      :offsetTop="offsetTop"
      :scrollHeight="scrollHeight"
    />
    <HomeBlock />
    <AboutBlock />
    <LocationBlock />
    <PriceBlock />
  </div>
</template>

<script>
import '@/assets/scss/main.scss';

import MainHeader from '@/components/MainHeader.vue';
import HomeBlock from '@/components/HomeBlock.vue';
import AboutBlock from '@/components/AboutBlock.vue';
import LocationBlock from '@/components/LocationBlock.vue';
import PriceBlock from '@/components/PriceBlock.vue';
import BackgroundLayer from '@/components/BackgroundLayer.vue';

export default {
  name: 'App',

  components: {
    MainHeader,
    BackgroundLayer,
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
      offsetTop: 1,
      scrollHeight: 0,
    };
  },

  created() {
    window.addEventListener('scroll', () => {
      document.body.style.cssText = `--scroll-top: ${window.scrollY}px`;
      const ratio = Math.floor(window.scrollY / window.innerHeight);
      this.offsetTop = ratio + 1;
      this.scrollHeight = (window.scrollY - ratio * window.innerHeight) * 0.2;
    });
  },
};
</script>
