import { Plugin } from 'vue';
import Span from './src/gSpan.vue'
import { getComponentName } from '@/utils';

const install: Plugin = {
  install (app) {
    app.component(getComponentName(Span), Span)
  }
}

export default install;