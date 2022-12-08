const createFactoryStore = (factoryStore) => ({
  namespaced: factoryStore.namespaced === true,
  state: () => {
    return {
      sharedFactoryStore: true,
      ...factoryStore.state,
    };
  },
  getters: {
    factoryStore(state) {
      return state.factoryStore;
    },
    ...factoryStore.getters,
  },
});

export const factoryStoreA = createFactoryStore({
  namespaced: true,
  state: {
    factoryStore: 'A',
  },
  getters: {
    isFactoryStoreA() {
      return true;
    },
  },
});

export const factoryStoreB = createFactoryStore({
  namespaced: true,
  state: {
    factoryStore: 'B',
  },
  getters: {
    isFactoryStoreB() {
      return true;
    },
  },
});
