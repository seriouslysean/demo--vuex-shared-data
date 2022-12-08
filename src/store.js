import { createStore } from 'vuex';

import {
  factoryStoreA as factoryA,
  factoryStoreB as factoryB,
} from './store-factory';

import {
  submoduleStoreA as submoduleA,
  submoduleStoreB as submoduleB,
} from './store-submodule';

const store = createStore({
  state() {},
  modules: {
    factoryA,
    factoryB,
    submoduleA,
    submoduleB,
  },
  mutations: {},
});

export default store;
