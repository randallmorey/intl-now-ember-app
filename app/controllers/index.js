import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({

  locale: 'en-US',

  numberValue: 12345678.56789,

  formattedNumber: computed('numberValue', 'locale', function () {
    const locale = this.locale;
    const formatter = new Intl.NumberFormat(locale);
    return formatter.format(this.numberValue);
  })

});
