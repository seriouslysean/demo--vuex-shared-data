<template>
  <section>
    <h3>Submodule Store A</h3>
    <h4>State</h4>
    <code>{{ submoduleStore }}</code>
    <h4>Getters</h4>
    <code>{{ allGetters }}</code>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

import { getNamespacedGettersObject } from '../utils.js';

export default {
  name: 'SubmoduleA',
  computed: {
    ...mapState('submoduleA', {
      submoduleStore: (state) => JSON.stringify(state, null, 2),
    }),
    allGetters() {
      return getNamespacedGettersObject(this.$store.getters, 'submoduleA');
    },
  },
};
</script>
