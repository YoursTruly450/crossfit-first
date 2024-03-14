<template>
  <div class="stretching" id="stretching">
    <div class="stretching__wrapper">
      <h2>Развивай гибкость, улучшай здоровье!</h2>
      <p class="stretching__join">Стретчинг - ключ к лучшему самочувствию. Регулярные занятия помогут укрепить мышцы, улучшить осанку и повысить энергию. Забудь о напряжении, открой для себя мир гармонии и гибкости.</p>
    </div>
    <div class="stretching__presentation">
      <div class="stretching__presentation__wrapper">
        <VSlider>
          <div class="stretching__block">
            <p class="stretching__join">Преобрази свое тело и ум с нашими волшебными занятиями стретчинга! Уникальная возможность привнести гармонию и гибкость в каждую клеточку своего существа. Стань героем своей собственной истории заботы о здоровье.</p>
            <p class="stretching__join">Присоединяйся к нашей стретчинг-команде и почувствуй поток энергии, который изменит твою жизнь. Ждем именно тебя!</p>
            <p class="stretching__join">Записывайтесь на занятия и почувствуйте, как ваше тело оживает.</p>
          </div>
          <div class="stretching__block">
            <p class="stretching__join">Преобра1зи свое тело и ум с нашими волшебными занятиями стретчинга! Уникальная возможность привнести гармонию и гибкость в каждую клеточку своего существа. Стань героем своей собственной истории заботы о здоровье.</p>
            <p class="stretching__join">Присоединяйся к нашей стретчинг-команде и почувствуй поток энергии, который изменит твою жизнь. Ждем именно тебя!</p>
            <p class="stretching__join">Записывайтесь на занятия и почувствуйте, как ваше тело оживает.</p>
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
