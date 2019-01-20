import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  locale: 'en-US',

  currency: 'USD',
  numberValue: 12345678.56789,

  formatted: computed('locale', 'currency', 'numberValue', function () {
    const locale = this.locale;
    const formatter = new Intl.NumberFormat(locale,
      {style: 'currency', currency: this.currency});
    return formatter.format(this.numberValue);
  })
});
