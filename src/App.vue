<script setup>
import BackgroundGrid from "./components/backgroundGrid.vue";
import Menu from "./components/menu.vue";
import Hamburger from "./components/hamburger.vue";
</script>

<template>
  <main>
    <Hamburger />
    <Menu />
    <BackgroundGrid />
    <router-view/>
  </main>
</template>

<style lang="scss" scoped>
main {
  position: relative;
  display: grid;
  grid-template-columns: var(--mobile-grid-column);
  grid-template-rows: repeat(2, 1fr) repeat(2,.5fr);
  grid-row: 1 / -1;
  grid-column: 1 / -1;

  @media (min-width: 900px) {
    grid-template-columns: var(--desktop-grid-column);
  }
  .menu {
    @media (min-width: 900px) {
      grid-column: 9 / -1;
      grid-row: 1 / -1;
      justify-self: center;
      align-self: center;
    }
    
    @media (min-width: 1200px) {
      grid-row: 1 / -2;
      justify-self: flex-start;
      align-self: flex-end;
    }
  }
  
  .hamburger {
    @media (min-width: 900px) {
      grid-column: -3;
      grid-row: 1;
      align-self: center;
    }
  }
}
</style>
