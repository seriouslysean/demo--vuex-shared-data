<template>
  <section>
    <h3>Factory Store A</h3>
    <h4>State</h4>
    <code>{{ factoryStore }}</code>
    <h4>Getters</h4>
    <code>{{ allGetters }}</code>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

import { getNamespacedGettersObject } from '../utils.js';

export default {
  name: 'FactoryA',
  computed: {
    ...mapState('factoryA', {
      factoryStore: (state) => JSON.stringify(state, null, 2),
    }),
    allGetters() {
      return getNamespacedGettersObject(this.$store.getters, 'factoryA');
    },
  },
};
</script>
