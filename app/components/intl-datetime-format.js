import Component from '@ember/component';
import { computed } from '@ember/object';

const now = new Date();

export default Component.extend({
  locale: 'en-US',
  now: computed(function () { return new Date(); }),
  timezone: 'America/New_York' ,

  formatted: computed('locale', 'now', 'timezone', function () {
    const locale = this.locale;
    const now = this.now;
    const timezone = this.timezone;
    const formatter = new Intl.DateTimeFormat(locale, {
      year: 'numeric', month: 'long', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric',
      timeZone: timezone});
    return formatter.format(this.now);
  })
});
