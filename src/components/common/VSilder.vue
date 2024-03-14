<template>
  <div class="slider">
    <div ref="slidesBlock" class="slider__slot">
      <slot></slot>
    </div>
    <div class="slider__buttons" v-if="slides.length > 0">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="slider__button"
        :class="{'slider__button_active': index === currentIndex}"
        @click="setCurrentIndex(index)"
      >
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/scss/slider.scss';

export default {
  name: 'VSlider',

  data() {
    return {
      currentIndex: 0,
      slidesCount: 0,
      slides: [],
    };
  },

  mounted() {
    this.initSlides();

    this.$watch('currentIndex', this.currentIndexHandler, { immediate: true });
  },

  methods: {
    initSlides() {
      this.slides = [...this.$refs.slidesBlock.childNodes];
      this.slidesCount = this.slides.length;
    },

    setCurrentSlideVisibility() {
      this.slides.forEach((slide, index) => {
        slide.style.display = index === this.currentIndex ? 'flex' : 'none';
      });
    },

    currentIndexHandler() {
      this.setCurrentSlideVisibility();
    },

    setCurrentIndex(index) {
      this.currentIndex = index;
    },
  },
}
</script>