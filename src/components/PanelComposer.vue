<template>
  <main class="panel-composer">
    <div class="shadow-grid"></div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'PanelComposer',
  computed: {
    ...mapGetters([]),
  },
});
</script>

<style lang="scss">
$grid-width: 1024px;
$grid-height: 768px;
$grid-gap: 5px;

.panel-composer {

  .shadow-grid {
    width: $grid-width;
    height: $grid-height;
    display: grid;
    gap: $grid-gap;
  }

}
</style>
