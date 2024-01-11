<template>
  <div id="app" class="main">
    <MainHeader
      :links="blocks"
      :offsetTop="offsetTop"
    />
    <BackgroundLayer
      v-for="block in blocks"
      :key="block.id"
      :offsetTop="block.id"
      :scrollHeight="scrollHeight"
      :scrollRatio="scrollRatio"
      :ratio="ratio"
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
    HomeBlock,
    AboutBlock,
    LocationBlock,
    PriceBlock,
    BackgroundLayer,
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
          name: 'Цены',
          anchor: 'location',
        },
        {
          id: 4,
          name: 'Локация',
          anchor: 'price',
        },
      ],
      offsetTop: 1,
      scrollHeight: 0,
      scrollRatio: 0.6,
      ratio: 0,
    };
  },

  created() {
    window.addEventListener('scroll', () => {
      document.body.style.cssText = `--scroll-top: ${window.scrollY}px`;
      const ratio = Math.floor(window.scrollY / window.innerHeight);
      this.ratio = ratio;
      this.offsetTop = ratio + 1;
      this.scrollHeight = window.scrollY * this.scrollRatio;
    });
  },
};
</script>
