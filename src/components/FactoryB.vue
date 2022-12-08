<template>
  <section>
    <h3>Factory Store B</h3>
    <h4>State</h4>
    <code>{{ factoryStore }}</code>
    <h4>Getters</h4>
    <code>{{ allGetters }}</code>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

import { getNamespacedGettersObject } from '../utils';

export default {
  name: 'FactoryB',
  computed: {
    ...mapState('factoryB', {
      factoryStore: (state) => JSON.stringify(state, null, 2),
    }),
    allGetters() {
      return getNamespacedGettersObject(this.$store.getters, 'factoryB');
    },
  },
};
</script>
