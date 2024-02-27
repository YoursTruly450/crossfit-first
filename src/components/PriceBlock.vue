<template>
  <div class="price" id="price">
    <div class="price__wrapper">
      <h2>Откройте новые горизонты своей физической, умственной и эмоциональной силы.</h2>
      <p class="price__join">Занимаясь в «Спутнике», вы можете быть уверены, что всегда получите методику и поддержку, что поможет вам не сбиться с выбранного пути.</p>
      <p class="price__join">Спутник - это место где Вы сможете преобразить свою жизнь и начать путь к здоровой, сильной и энергичной жизни.</p>
      <p class="price__subscribe">Ждём всех на тренировки <a href="https://telegram.me/SputnikSamaraBot" target="_blank" class="price__subscribe">(записаться)</a></p>
    </div>
    <div class="price__presentation">
      <div class="price__block">
        <div class="price__group">
          <div class="price__group__title">CROSSFIT</div>
          <div class="price__group__item">
            <div class="price__group__item__name">8 занятий весь день</div>
            <div class="price__group__item__cost">3200 р.</div>
          </div>
          <div class="price__group__item">
            <div class="price__group__item__name">12 занятий весь день</div>
            <div class="price__group__item__cost">4700 р.</div>
          </div>
          <div class="price__group__item">
            <div class="price__group__item__name">24 занятия весь день + БЖУ на 2 мес.**</div>
            <div class="price__group__item__cost">8800 р.</div>
          </div>
          <div class="price__group__item">
            <div class="price__group__item__name">1 месяц безлимит</div>
            <div class="price__group__item__cost">5300 р.</div>
          </div>
          <div class="price__group__item">
            <div class="price__group__item__name">1 разовое занятие</div>
            <div class="price__group__item__cost">500 р.</div>
          </div>
        </div>
        <div class="price__group">
          <div class="price__group__title">OPEN GYM</div>
          <div class="price__group__item">
            <div class="price__group__item__name">1 месяц безлимит</div>
            <div class="price__group__item__cost">3500 р.</div>
          </div>
          <div class="price__group__item">
            <div class="price__group__item__name">1 занятие</div>
            <div class="price__group__item__cost">400 р.</div>
          </div>
        </div>
        <div class="price__group">
          <div class="price__group__title">STRETCHING</div>
          <div class="price__group__item">
            <div class="price__group__item__name">8 занятий</div>
            <div class="price__group__item__cost">3200 р.</div>
          </div>
          <div class="price__group__item">
            <div class="price__group__item__name">1 занятие</div>
            <div class="price__group__item__cost">500 р.</div>
          </div>
        </div>
        <div class="price__group">
          <div class="price__group__title">ТЯЖЕЛАЯ АТЛЕТИКА</div>
          <div class="price__group__item">
            <div class="price__group__item__name">12 занятий</div>
            <div class="price__group__item__cost">4500 р.</div>
          </div>
          <div class="price__group__item">
            <div class="price__group__item__name">1 занятие</div>
            <div class="price__group__item__cost">500 р.</div>
          </div>
        </div> 
        <div class="price__group price__notes">
          <span>* Все абонементы включают в себя групповые занятия по CROSSFIT и STRETCHING</span>
          <span>** БЖУ включает в себя: расчет калоража и БЖУ в зависимости от целей: рекомендации по продуктам и настрою на результат: пример меню на 7 дней</span>
          <span>*** 5% скидка студентам, школьникам, сотрудникам федеральных органов (МВД, МЧС и т.д.)</span>
          <span>Первая групповая тренировка бесплатно</span>
          <span>Скидка 10% при покупке любого абонемента</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/scss/price.scss';

export default {
  name: 'PriceBlock',
};
</script>
