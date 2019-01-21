import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  locale: 'en-US',

  currency: 'USD',
  numberValue: 45006755.56789,

  formatted: computed('locale', 'currency', 'numberValue', function () {
    const locale = this.locale;
    const formatter = new Intl.NumberFormat(locale,
      {style: 'currency', currency: this.currency});
    return formatter.format(this.numberValue);
  }),

  code: computed('locale', 'currency', 'numberValue', 'formatted', function () {
    return `const formatter = new Intl.NumberFormat('${this.locale}', {
  style: 'currency',
  currency: '${this.currency}'
});
formatter.format(${this.numberValue});
// ${this.formatted}`
  })
});
