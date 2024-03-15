<template>
  <div class="stretching" id="stretching">
    <div class="stretching__wrapper">
      <h2>Развивай гибкость, улучшай здоровье!</h2>
      <p class="stretching__join">Присоединяйтесь к нам и откройте новые горизонты своей физической, умственной и эмоциональной силы.</p>
    </div>
    <div class="stretching__presentation">
      <div class="stretching__presentation__wrapper">
        <VSlider>
          <div class="stretching__block">
            <div class="stretching__block__desc">
              <img
                :src="require('@/assets/bckg_img/direction_cross.jpg')"
                alt="спутник"
                class="stretching__block__img"
              >
            </div>
            <div class="stretching__block__desc">
              <h2>Кроссфит</h2>
              <p class="stretching__join">Результаты, видимые на поверхности: Вы почувствуете и увидите изменения в своем теле, улучшение физической формы и повышение энергии.</p>
              <p class="stretching__join">Эмоциональное вовлечение: Кроссфит - это не просто тренировки, это эмоциональный опыт. Вы будете преодолевать себя, устанавливать новые рекорды и чувствовать гордость за каждый пройденный этап. Этот опыт оставит в вас неизгладимое след, и вы захотите возвращаться снова и снова.</p>
            </div>
          </div>
          <div class="stretching__block">
            <div class="stretching__block__desc">
              <h2>Стретчинг</h2>
              <p class="stretching__join">Преобрази свое тело и ум с нашими волшебными занятиями стретчинга! Уникальная возможность привнести гармонию и гибкость в каждую клеточку своего существа. Стань героем своей собственной истории заботы о здоровье.</p>
              <p class="stretching__join">Присоединяйся к нашей стретчинг-команде и почувствуй поток энергии, который изменит твою жизнь. Ждем именно тебя!</p>
              <p class="stretching__join">Записывайтесь на занятия и почувствуйте, как ваше тело оживает.</p>
            </div>
            <div class="stretching__block__desc">
              <img
                :src="require('@/assets/bckg_img/direction_stretch.jpg')"
                alt="спутник"
                class="stretching__block__img"
              >
            </div>
          </div>
          <div class="stretching__block">
            <div class="stretching__block__desc">
              <img
                :src="require('@/assets/bckg_img/direction_athl.jpg')"
                alt="спутник"
                class="stretching__block__img"
              >
            </div>
            <div class="stretching__block__desc">
              <h2>Тяжелая атлетика</h2>
              <p class="stretching__join">Олимпийский вид спорта развивающий силу, технику и скорость. Вы не просто тренируетесь, а воплощаете в жизнь дух олимпийского движения.</p>
              <p class="stretching__join">Каждая тренировка - это шанс улучшить свои результаты, настроиться на высшие стандарты и преодолеть себя.</p>
              <p class="stretching__join">Наши спортсмены всегда под наблюдением тренера – мастера спорта международного класса, что гарантирует персонализированный подход вместе с мотивацией и поддержкой.</p>
            </div>
          </div>
        </VSlider>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/scss/stretching.scss';

import VSlider from '@/components/common/VSilder.vue';

export default {
  name: 'StretchingBlock',

  components: {
    VSlider,
  },
};
</script>
