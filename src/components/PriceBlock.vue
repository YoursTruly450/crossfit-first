<template>
  <div class="price" id="price">
    <div class="price__wrapper">
      <h2>Откройте новые горизонты своей физической, умственной и эмоциональной силы.</h2>
      <div class="price__join">Занимаясь в «Спутнике», вы можете быть уверены, что всегда получите методику и поддержку, что поможет вам не сбиться с выбранного пути.</div>
      <a href="https://telegram.me/SputnikSamaraBot" target="_blank" class="price__subscribe">Ждём всех на тренировки!</a>
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
      </div>
      <div class="price__block price__block-custom">
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
          <p>* Все абонементы включают в себя групповые занятия по CROSSFIT и STRETCHING</p>
          <p>** БЖУ включает в себя: расчет калоража и БЖУ в зависимости от целей: рекомендации по продуктам и настрою на результат: пример меню на 7 дней</p>
          <p>*** 5% скидка студентам, школьникам, сотрудникам федеральных органов (МВД, МЧС и т.д.)</p>
          <p>Первая групповая тренировка бесплатно</p>
          <p>Скидка 10% при покупке любого абонемента</p>
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
