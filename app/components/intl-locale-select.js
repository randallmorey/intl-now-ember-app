import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  language: 'en',
  country: null,

  locale: computed('language', 'country', {
    get() {
      const language = this.language;
      const country  = this.country;
      const locale = country ? `${language}-${country}` : language;
      return locale;
    },
    set(key, value) {
      let [language, country] = value.split('-');
      country |= null;
      this.set('language', language);
      this.set('country', country);
      return value;
    }
  }),

  actions: {
    selectLanguage(language) {
      this.set('language', language);
    },
    selectCountry(country) {
      this.set('country', country);
    }
  }
});
