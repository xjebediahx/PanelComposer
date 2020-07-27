<template>
  <div id="app">
    <panel-composer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PanelComposer from './components/PanelComposer.vue';

export default Vue.extend({
  name: 'App',
  components: {
    PanelComposer,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
