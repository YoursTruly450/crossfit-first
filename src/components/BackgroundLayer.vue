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
      const bckgrndStyle = 'center center / cover;';
      const transform = `top: -${this.scrollHeight}px;`;
      let style = `background: url('/background/crsft_frst_3.jpg') ${bckgrndStyle}${transform}`;
      if (this.offsetTop === 1) style = `background: url('/background/crsft_frst_5.jpg') ${bckgrndStyle}${transform}`;
      if (this.offsetTop === 2) style = `background: url('/background/crsft_frst_1.jpg') ${bckgrndStyle}${transform}`;
      if (this.offsetTop === 3) style = `background: url('/background/crsft_frst_6.jpg') ${bckgrndStyle}${transform}`;
      return style;
    },
  },
};
</script>
