<script setup>

</script>

<template>
  <div class="svg-grid-view">
    <div class="svg-grid-view--horizontal"></div>
    <div class="svg-grid-view--vertical"></div>
  </div>
</template>

<style scoped lang="scss">
.svg-grid-view {
  display: grid;
  grid-template-columns: var(--grid-rule-of-thirds);
  grid-template-rows: var(--grid-rule-of-thirds);

  grid-column: 1 / -1;
  grid-row: 1 / -1;

  &--vertical, &--horizontal {
    --border: solid .1rem var(--color-green);
    opacity: .1;
  }

  &--vertical {
    grid-column: 2;
    grid-row: 1 / -1;
    border-left: var(--border);
    border-right: var(--border);
  }

  &--horizontal {
    grid-column: 1 / -1;
    grid-row: 2;
    border-top: var(--border);
    border-bottom: var(--border);
  }

  .grid {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
  }
}
</style>