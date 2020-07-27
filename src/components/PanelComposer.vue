<template>
  <main class="panel-composer">
    <div
      class="shadow-grid"
      :style="`grid-template-columns: ${getColumnCSS}; grid-template-rows: ${getRowCSS};`">
      
      <div
        v-for="index in numberShadowItems"
        class="shadow-grid__item"
        draggable="true"
        :key="index"
        :data-col="getIndexPosition(index).x"
        :data-row="getIndexPosition(index).y">
      </div>

    </div>

    <div class="panel-grid" :style="`grid-template-columns: ${getColumnCSS}; grid-template-rows: ${getRowCSS};`">
      <div
        v-for="panel in getPanels"
        class="panel"
        :key="panel.key">
        
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import preventGhostImage from '../helpers/preventGhostImage';

export default Vue.extend({
  name: 'PanelComposer',
  computed: {
    ...mapGetters(['getGrid', 'getColumnCSS', 'getRowCSS', 'getPanels']),
    numberShadowItems() {
      return this.getGrid.columns.length * this.getGrid.rows.length;
    }
  },
  methods: {

    getIndexPosition(index :number) :{ x: number, y: number } {
      const result :{ x: number, y: number } = { x: -1, y: -1 };
      const numberCols :number = this.getGrid.columns.length;

      window.console.log(index);

      result.x = (index - 1) % numberCols;
      result.y = Math.floor((index - 1) / numberCols);

      return result;
    }
  }
});
</script>

<style lang="scss">
$grid-width: 1024px;
$grid-height: 768px;
$grid-gap: 5px;

.panel-composer {

  .shadow-grid {
    margin: 0 auto;
    width: $grid-width;
    height: $grid-height;
    display: grid;
    gap: $grid-gap;

    &__item {
      background-color: #cef;
      cursor: crosshair;

      &:hover {
        background-color: darken(#cef, 10%);
      }
    }
  }

}
</style>
