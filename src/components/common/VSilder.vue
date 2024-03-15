<template>
  <div class="slider" :class="{'slider_swipping': isSwipping}">
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

  props: {
    delay: {
      type: Number,
      default: 15000,
    },
  },

  data() {
    return {
      block: null,
      currentIndex: 0,
      slidesCount: 0,
      slides: [],
      position: {
        x: 0,
        y: 0,
      },
      move: {
        x: 0,
        y: 0,
      },
      isSwipping: false,
      timerId: null,
    };
  },

  mounted() {
    this.initSlides();

    this.$watch('currentIndex', this.currentIndexHandler, { immediate: true });
  },

  beforeDestroy() {
    if (this.block) {
      this.block.removeEventListener('mousedown', this.onMouseDown);
      this.block.removeEventListener('mouseup', this.onMouseUp);
      this.block.removeEventListener('touchstart', this.onMouseDown);
      this.block.removeEventListener('touchmove', this.onTouchMove);
      this.block.removeEventListener('touchend', this.onMouseUp);
    }
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  },

  methods: {
    initSlides() {
      this.block = this.$refs.slidesBlock;
      this.slides = [...this.$refs.slidesBlock.childNodes];
      this.slidesCount = this.slides.length;
      this.addListeners();
    },

    addListeners() {
      if (this.block) {
        this.block.addEventListener('mousedown', this.onMouseDown);
        this.block.addEventListener('mouseup', this.onMouseUp);
        this.block.addEventListener('touchstart', this.onTouchStart);
        this.block.addEventListener('touchmove', this.onTouchMove);
        this.block.addEventListener('touchend', this.onTouchEnd);
      }
    },

    onTouchStart(event) {
      this.onMouseDown(event.touches[0]);
    },

    onTouchMove(event) {
      if (this.isSwipping) {
        this.move.x = event.touches[0].screenX;
      }
    },

    onTouchEnd() {
      if (this.move.x < this.position.x && this.isSwipping) {
        this.indexAdd();
      } 
      if  (this.move.x > this.position.x && this.isSwipping) {
        this.indexSub();
      }
      this.isSwipping = false;
      this.move.x = 0;
    },

    onMouseDown(event) {
      this.position.x = event.screenX;
      this.isSwipping = true;
    },

    onMouseUp(event) {
      if (event.screenX < this.position.x) {
        this.indexAdd();
      } 
      if  (event.screenX > this.position.x) {
        this.indexSub();
      }
      this.isSwipping = false;
      this.position.x = 0;
    },

    indexAdd () {
      if (this.currentIndex < this.slidesCount - 1) {
        this.currentIndex++;
      }
    },

    indexSub() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    setCurrentSlideVisibility() {
      this.slides.forEach((slide, index) => {
        slide.style.display = index === this.currentIndex ? 'flex' : 'none';
        setTimeout(() => {
          slide.style.visibility = index === this.currentIndex ? 'visible' : 'collapse';
        }, 0);
      });
    },

    currentIndexHandler() {
      this.setCurrentSlideVisibility();
      this.resetTimer();
    },

    setCurrentIndex(index) {
      this.currentIndex = index;
    },

    initSliding() {
      this.timerId = setInterval(() => {
        if (this.currentIndex < this.slidesCount - 1) {
          this.currentIndex++;
        } else {
          this.currentIndex = 0;
        }
      }, this.delay);
    },

    resetTimer() {
      clearInterval(this.timerId);
      setTimeout(() => {
        this.initSliding();
      }, 0);
    },
  },
}
</script>