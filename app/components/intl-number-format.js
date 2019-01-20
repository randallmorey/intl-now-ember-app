import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  locale: 'en-US',

  numberValue: 12345678.56789,

  formatted: computed('numberValue', 'locale', function () {
    const locale = this.locale;
    const formatter = new Intl.NumberFormat(locale);
    return formatter.format(this.numberValue);
  }),

  code: computed('locale', 'numberValue', 'formatted', function () {
    return `const formatter = new Intl.NumberFormat('${this.locale}');
formatter.format(${this.numberValue});
// ${this.formatted}`
  })
});
