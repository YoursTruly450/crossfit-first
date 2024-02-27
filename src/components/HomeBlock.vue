<template>
  <div class="home" id="home">
    <div class="home__wrapper">
      <img
        :src="require('@/assets/bckg_img/logo2.png')"
        alt="спутник"
        class="home__logo"
      >
      <div class="home__description">
        <h1 class="home__description__title">СПУТНИК | Кроссфит и Функционал в Самаре</h1>
      </div>
    </div>
    <div class="home__presentation">
      <div class="home__description__article">Функциональный тренинг в Самаре. Самые эффективные тренировки.</div>
      <div class="home__description__spheres">
        Наши направления: кроссфит и функционал, стретчинг, тяжёлая атлетика
      </div>
      <div class="home__description__spheres">
        <span>Поможем достичь цели: похудеть, стать сильнее и выносливее, научиться новому</span>
      </div>
      <div class="home__abilities">
        <div class="home__ability">
          <img :src="require('@/assets/samples/strength.jpg')" alt="strength" class="home__ability__logo">
          <div class="home__ability__text">Сила</div>
        </div>
        <div class="home__ability">
          <img :src="require('@/assets/samples/agility.jpg')" alt="agility" class="home__ability__logo home__ability__logo-rotate">
          <div class="home__ability__text">Ловкость</div>
        </div>
        <div class="home__ability">
          <img :src="require('@/assets/samples/endurance.jpg')" alt="endurance" class="home__ability__logo home__ability__logo-rotate">
          <div class="home__ability__text">Выносливость</div>
        </div>
        <div class="home__ability">
          <img :src="require('@/assets/samples/speed.jpg')" alt="speed" class="home__ability__logo home__ability__logo-rotate">
          <div class="home__ability__text">Скорость</div>
        </div>
      </div>
      <!-- <video loop autoplay muted class="home__presentation__video">
        <source :src="require('@/assets/bckg_img/background.mp4')" type="video/mp4">
      </video> -->
    </div>
  </div>
</template>

<script>
import '@/assets/scss/home.scss';

export default {
  name: 'HomeBlock',
};
</script>
