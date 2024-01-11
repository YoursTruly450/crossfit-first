<template>
  <div class="location" id="location">
    <div class="location__wrapper">
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A5d149da97894e0532815d59508f43e9a8197e43298c185ad2eac571682bda2b8&amp;source=constructor"
        frameborder="0"
        class="location__yandex"
      >
      </iframe>
    </div>
    <div class="location__presentation">
      <div class="location__footer">
        <a href="#home" class="location__footer__title">СПУТНИК | Кроссфит и Функционал в Самаре</a>
        <img :src="require('@/assets/bckg_img/sputnik_logo.png')" alt="sputnik" class="location__footer__logo" />
        <div class="location__footer__copy">© 2024 Sputnik | Crossfit</div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/scss/location.scss';

export default {
  name: 'LocationBlock',
};
</script>
