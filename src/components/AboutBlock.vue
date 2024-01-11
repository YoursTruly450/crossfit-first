<template>
  <div class="about" id="about">
    <div class="about__wrapper">
      <h2>«Спутник» - это место, где сталь и пот соединяются с целью создания лучшей версии ТЕБЯ</h2>
      <div>Наши тренеры - это опытные профессионалы, которые знают как вдохновлять и мотивировать!</div>
      <div>Они помогут Вам учиться правильной технике, создавать персонализированные программы тренировок и обеспечивать безопасность во время занятий.</div>
    </div>
    <div class="about__presentation">
      <h2>Знакомьтесь с нашей командой</h2>
      <div class="about__team">
        <div class="about__coach">
          <img :src="require('@/assets/team/anvar.jpg')" alt="Анвар" class="about__coach__logo" />
          <div class="about__coach__desc">
            <div class="about__coach__desc__name">Анвар Иранов</div>
            <div class="about__coach__desc__post">Главный тренер</div>
            <a href="tel:+79272010130" class="about__coach__desc__contact">+7 (927) 201-01-30</a>
          </div>
        </div>
        <div class="about__coach">
          <img :src="require('@/assets/team/olga.jpg')" alt="Ольга Пыряева" class="about__coach__logo" />
          <div class="about__coach__desc">
            <div class="about__coach__desc__name">Ольга Пыряева</div>
            <div class="about__coach__desc__post">Тяжелая атлетика</div>
            <a href="tel:+79272010130" class="about__coach__desc__contact">+7 (927) 201-01-30</a>
          </div>
        </div>
        <div class="about__coach">
          <img :src="require('@/assets/team/nastya.jpg')" alt="" class="about__coach__logo" />
          <div class="about__coach__desc">
            <div class="about__coach__desc__name">Анастасия Ермакова</div>
            <div class="about__coach__desc__post">Стретчинг</div>
            <a href="tel:+79272010130" class="about__coach__desc__contact">+7 (927) 201-01-30</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/scss/about.scss';

export default {
  name: 'AboutBlock',
};
</script>
