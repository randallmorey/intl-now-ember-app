import Component from '@ember/component';
import { computed } from '@ember/object';
import { task, timeout } from 'ember-concurrency';

export default Component.extend({
  locale: 'en-US',
  now: Object.freeze(new Date()),
  timezone: 'America/New_York',

  formatted: computed('locale', 'now', 'timezone', function () {
    const locale = this.locale;
    const now = this.now;
    const timezone = this.timezone;
    const formatter = new Intl.DateTimeFormat(locale, {
      year: 'numeric', month: 'long', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric',
      timeZone: timezone});
    return formatter.format(now);
  }),

  didRender() {
    this._super(...arguments);
    this.updateNow.perform();
  },

  updateNow: task(function * () {
    yield timeout(1000);
    this.set('now', new Date());
    this.updateNow.perform();
  }).drop(),

  code: computed('locale', 'timezone', function () {
    return `const formatter = new Intl.DateTimeFormat('${this.locale}', {
  year: 'numeric', month: 'long', day: 'numeric',
  hour: 'numeric', minute: 'numeric', second: 'numeric',
  timeZone: '${this.timezone}'
});
formatter.format(new Date());
// ${this.formatted}`
  })
});
