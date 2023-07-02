<script setup>
import {ref} from "vue";
import BackgroundGrid from "./components/backgroundGrid.vue";
import Menu from "./components/menu.vue";
import Hamburger from "./components/hamburger.vue";

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<template>
  <main>
    <Hamburger :open="menuOpen" :toggleMenu="toggleMenu" />
    <Menu :toggleMenu="menuOpen"/>
    <BackgroundGrid />
    <section class="slides">
      <router-view/>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  position: relative;
  overflow-x: hidden;
  display: grid;
  grid-template-columns: var(--mobile-grid-column);
  grid-template-rows: .5fr repeat(2, 1fr) repeat(2,.5fr);
  grid-row: 1 / -1;
  grid-column: 1 / -1;

  @media (min-width: 900px) {
    grid-template-columns: var(--desktop-grid-column);
  }
  .menu {
    &--open {
      transform: translateX(0);

      @media (min-width: 900px) {
        position: initial;
        transform: translateX(0);
        opacity: 1;
      }
    }

    @media (min-width: 900px) {
      background: transparent;
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
  
  .hamburger-box {
    grid-column:  7 / span 1;
    grid-row: 1;
    @media (min-width: 900px) {
      grid-column: -2;
      grid-row: 1 / -1;
      align-self: center;
      justify-self: flex-end;
    }
  }
  
  .slides {
    height: 100vh;
    display: grid;
    grid-template-columns: var(--mobile-grid-column);
    grid-template-rows: var(--grid-rule-of-thirds) ;
    grid-column: 1 / -1;
    grid-row: 1 / -1;

    @media (min-width: 900px) {
      grid-template-columns: var(--desktop-grid-column);
    }
    
    & > * {
      grid-column: 2 / -2;
      grid-row: 2;
    }
  }
}
</style>
