const submoduleCoreStore = {
  // False so the parents can access data without a prefix
  namespaced: false,
  state: () => {
    return {
      sharedCoreSubmodule: true,
    };
  },
  getters: {
    isSubmoduleCoreStore(state) {
      return state.sharedCoreSubmodule;
    },
    submoduleStore(state) {
      return state.submoduleStore;
    },
  },
};

export const submoduleStoreA = {
  namespaced: true,
  modules: {
    core: submoduleCoreStore,
  },
  state: {
    submoduleStore: 'A',
  },
  getters: {
    isSubmoduleStoreA() {
      return true;
    },
  },
};

export const submoduleStoreB = {
  namespaced: true,
  modules: {
    core: submoduleCoreStore,
  },
  state: {
    submoduleStore: 'B',
  },
  getters: {
    isSubmoduleStoreB() {
      return true;
    },
  },
};
