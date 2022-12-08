<template>
  <div id="app">
    <h1>Vue: Vuex store data sharing</h1>

    <p>
      What is the best way to share data between two stores? For instance,
      imagine you have two product types, configurable and non-configurable
      products, but they share a core set of data.
    </p>

    <ul>
      <li>Shared (product name, description, etc)</li>
      <li>Non-Configurable: Needs shared data + product attributes</li>
      <li>
        Configurable: Needs shared data + product components to build a custom
        product
      </li>
    </ul>

    <hr />

    <p>
      Method 1: Use a factory function to create the individual stores. It will
      add the shared values via the factory function, and the individual type
      store (configurable vs. non-configurable) will be spread in.
      <em
        >This requires no change to any usages already in the app, you would
        just need to make sure not to overwrite keys accidentally.</em
      >
    </p>

    <FactoryA />
    <FactoryB />

    <hr />

    <p>
      Method 2: Use totally separate stores. The data that needs to be shared
      will be added to a non-namespaced core submodule that will be shared
      between both of them.
      <em
        >This feels more appropriate as a vuex pattern, but still required a
        prefix to access any existing state values, which will need to be
        updated.</em
      >
    </p>

    <SubmoduleA />
    <SubmoduleB />
  </div>
</template>

<script>
import FactoryA from './components/FactoryA.vue';
import FactoryB from './components/FactoryB.vue';
import SubmoduleA from './components/SubmoduleA.vue';
import SubmoduleB from './components/SubmoduleB.vue';

export default {
  name: 'App',
  components: {
    FactoryA,
    FactoryB,
    SubmoduleA,
    SubmoduleB,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
