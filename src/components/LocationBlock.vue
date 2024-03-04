<template>
  <div class="location" id="location">
    <div class="location__wrapper">
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A5d149da97894e0532815d59508f43e9a8197e43298c185ad2eac571682bda2b8&amp;source=constructor"
        frameborder="0"
        class="location__yandex"
      >
      </iframe>
      <div class="location__contacts">
        <span>Для обратной связи заполните форму ниже</span>
        <div class="location__contacts__row">
          <label for="name" class="location__contacts__label">
            Как к вам обратиться?
          </label>
          <input
            id="name"
            v-model="request.name"
            type="text"
            class="location__contacts__input"
            :class="{'location__contacts__input-error': invalidName}"
          >
        </div>
        <div class="location__contacts__row">
          <label for="contact" class="location__contacts__label">
            Контакт для связи
          </label>
          <input
            id="contact"
            v-model="request.contact"
            type="text"
            class="location__contacts__input"
            :class="{'location__contacts__input-error': invalidContact}"
          >
        </div>
        <div class="location__contacts__row">
          <label for="message" class="location__contacts__label">
            Сообщение
          </label>
          <input
            id="message"
            v-model="request.message"
            type="text"
            class="location__contacts__input"
          >
        </div>
        <div class="location__contacts__row">
          <button
            class="location__contacts__button"
            @click="sendRequest"
          >
            Отправить
          </button>
          <span class="location__contacts__alert" :class="{ 'location__contacts__alert-error': requestError || invalid }">{{ message }}</span>
        </div>
      </div>
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

import { cloneDeep } from 'lodash';

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'LocationBlock',

  data() {
    return {
      request: {
        name: '',
        contact: '',
        message: '',
      },
      defaultRequest: {
        name: '',
        contact: '',
        message: '',
      },
      message: '',
      timeoutId: null,
      timerId: null,
      timer: 0,
      delay: 20,
      sended: false,
    };
  },

  computed: {
    ...mapGetters(['requestError']),

    invalidName() {
      return !this.request.name;
    },

    invalidContact() {
      return !this.request.contact;
    },

    invalid() {
      return this.invalidContact || this.invalidName;
    },
  },

  beforeDestroy() {
    clearInterval(this.timeoutId);
    clearInterval(this.timerId);
    this.timer = 0;
  },

  methods: {
    ...mapActions(['createRequest']),

    sendRequest() {
      if (this.invalid && !this.sended) {
        this.setInvalidMessage();
        return;
      }
      if (!this.message) {
        this.createRequest(this.request)
        .then(() => {
          this.request = cloneDeep(this.defaultRequest);
          this.message = 'Заявка отправлена';
          this.sended = true;
          this.startTimer();
        });
      } else {
        this.message = `Для повторной отправки подождите ${this. delay - this.timer} сек`;
      }
    },

    setInvalidMessage() {
      this.message = 'Заполните обязательные поля';
    },

    startTimer() {
      this.timerId = setInterval(() => {
        this.timer++;
      }, 1000);
      this.timeoutId = setTimeout(() => {
        this.message = '';
        this.sended = false;
        clearInterval(this.timerId);
        this.timer = 0;
      }, this.delay * 1000);
    },
  },

  watch: {
    requestError(nv) {
      if (nv) {
        this.message = nv;
      }
    },

    invalid: {
      immediate: true,
      handler(nv) {
        if (nv) {
          this.setInvalidMessage();
        } else {
          this.message = '';
        }
      },
    },
  },
};
</script>
