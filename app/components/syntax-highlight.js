/* global Prism */
import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNameBindings: ['languageClass'],
  tagName: 'pre',

  code: '',
  language: 'javascript',

  languageClass: computed('language', function () {
    return `language-${this.get('language')}`;
  }),

  prismCode: computed('code', function () {
    const code = this.get('code');
    if (!code) return '';

    const grammar = Prism.languages[this.get('language')];
    if (!grammar) return '';

    return Prism.highlight(code, grammar);
  })
});
