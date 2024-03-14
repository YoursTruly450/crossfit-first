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
    scrollRatio: {
      type: Number,
      default: 0,
    },
    ratio: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    backGroundImg() {
      const bckgUrl = process.env.NODE_ENV === 'production' ? "background-image: url('/crossfit-first/background/" : "background-image: url('/background/";
      // const bckgrndStyle = 'center center / cover;';
      const bckgrndStyle = ';';
      const transform = `top: ${- this.scrollHeight + (this.offsetTop - 1) * this.scrollRatio * window.innerHeight}px;`;
      const zIndex = this.offsetTop === this.ratio + 2? 'z-index: 2;' : 'z-index: 1;';
      let style = `${bckgUrl}crsft_frst_15.jpg') ${bckgrndStyle}${transform}${zIndex}`;
      if (this.offsetTop === 1) style = `${bckgUrl}crsft_frst_11.jpg') ${bckgrndStyle}${transform}${zIndex}`;
      if (this.offsetTop === 2) style = `${bckgUrl}crsft_frst_12.jpg') ${bckgrndStyle}${transform}${zIndex}`;
      if (this.offsetTop === 3) style = `${bckgUrl}crsft_frst_16.jpg') ${bckgrndStyle}${transform}${zIndex}`;
      if (this.offsetTop === 4) style = `${bckgUrl}crsft_frst_13.jpg') ${bckgrndStyle}${transform}${zIndex}`;
      return style;
    },
  },
};
</script>
