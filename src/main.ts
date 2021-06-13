import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';
import 'animate.css';

import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

const app = createApp(App);

// Automatically require global components
const requireComponents = require.context(
  './components/global',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponents.keys().forEach((fileName) => {
  const componentConfig = requireComponents(fileName);

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  );

  app.component(componentName, componentConfig.default || componentConfig);
});

app.use(router).mount('#app');
