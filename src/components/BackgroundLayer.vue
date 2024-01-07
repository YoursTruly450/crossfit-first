<template>
  <div class="layer-background" :style="backGroundImg">
  </div>
</template>

<script>
import '@/assets/scss/layer_backround.scss';

export default {
  name: 'BackgroundLayer',

  props: {
    offsetTop: {
      type: Number,
      default: 1,
    },
    scrollHeight: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    backGroundImg() {
      console.log(process.env.NODE_ENV);
      const bckgUrl = process.env.NODE_ENV === 'production' ? "background: url('/crossfit-first/background/" : "background: url('/background/";
      const bckgrndStyle = 'center center / cover;';
      const transform = `top: -${this.scrollHeight}px;`;
      let style = `${bckgUrl}crsft_frst_3.jpg') ${bckgrndStyle}${transform}`;
      if (this.offsetTop === 1) style = `${bckgUrl}crsft_frst_5.jpg') ${bckgrndStyle}${transform}`;
      if (this.offsetTop === 2) style = `${bckgUrl}crsft_frst_1.jpg') ${bckgrndStyle}${transform}`;
      if (this.offsetTop === 3) style = `${bckgUrl}crsft_frst_6.jpg') ${bckgrndStyle}${transform}`;
      return style;
    },
  },
};
</script>
