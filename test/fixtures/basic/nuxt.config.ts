import ExposedNuxtModule from '../../../src/module';

export default defineNuxtConfig({
  modules: [ExposedNuxtModule],
  runtimeConfig: {
    public: {
      foo: true,
    },
  },
});
