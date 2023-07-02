<template>
  <menu :class="{'menu--open':toggleMenu}" class="menu">
    <li>
      <router-link class="link-item" to="/slides/overview">CSS Grid Overview</router-link>
    </li>
    <li>
      <router-link class="link-item" to="/grid-1">Two Dimensional Power</router-link>
    </li>
    <li>
      <router-link class="link-item" to="/grid-1">My CSS Grid Tool-belt</router-link>
    </li>
    <li>
      <router-link class="link-item" to="/grid-1">Real-World layout examples</router-link>
    </li>
    <li>
      <router-link to="/grid-1">Debugging</router-link>
    </li>
    <li>
      <router-link class="link-item" to="/grid-1">Q&A and Closing</router-link>
    </li>
  </menu>
</template>

<style scoped lang="scss">
.menu {
  height: 100vh;
  z-index: 10;
  position: absolute;
  inset: 0;
  list-style: none;
  font-size: 3rem;
  background: var(--color-black);
  color: var(--color-white);
  margin: 0;
  display: flex;
  justify-content: center;
  transform: translateX(100%);
  transition: transform .3s ease-in-out;
  flex-flow: column nowrap;
  gap: 4rem;

  a {
    text-decoration: none;
    color: var(--color-white);
    transition: color .3s ease-in-out;

    &:hover {
      color: var(--color-dotcontrol-pink);
    }
  }
  
  @media (min-width: 900px) {
    transform: translateX(200%);
    opacity: 0;
    position: initial;
  }
}
</style>

<script setup>
import {defineProps} from "vue";

const props = defineProps({
  toggleMenu: Boolean
})
</script>