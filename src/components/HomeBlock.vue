<template>
  <div class="home" id="home">
    <div class="home__wrapper">
      <img
        :src="require('@/assets/bckg_img/sputnik_logo.png')"
        alt="спутник"
        class="home__logo"
      >
      <div class="home__description">
        <h1 class="home__description__title">СПУТНИК | Кроссфит и Функционал в Самаре</h1>
        <div class="home__description__article">Функциональный тренинг в Самаре. Самая рабочая атмосфера. Только у нас стретчинг на крыше с видом на Волгу.</div>
        <div class="home__description__spheres">
          Наши направления: rкроссфит и функционал, стретчинг, тяжёлая атлетика
        </div>
        <p class="home__description__spheres">
          Поможем достичь цели: похудеть, стать сильнее и выносливее, научиться новому
        </p>
      </div>
    </div>
    <div class="home__presentation"></div>
  </div>
</template>

<script>
import '@/assets/scss/home.scss';

export default {
  name: 'HomeBlock',
};
</script>
