<script setup>
import {ref} from "vue";
const open = ref(false);
</script>

<template>
  <svg @click="open = !open" class="hamburger" width="94" height="121" viewBox="0 0 94 121" xmlns="http://www.w3.org/2000/svg">
    <line :class="{'top-bun':true, 'top-bun--open':open}" y1="56" x2="72" y2="56" stroke="black" stroke-width="8"/>
    <line class="meat" y1="56" x2="72" y2="56" stroke="black" stroke-width="8"/>
    <line :class="{'bottom-bun':true, 'bottom-bun--open':false}" y1="56" x2="72" y2="56" stroke="black"
          stroke-width="8"/>
    <line class="vertical-line" x1="90" x2="90" y2="121" stroke="black" stroke-width="8"/>
  </svg>
</template>

<style scoped lang="scss">
.hamburger {
  z-index: 20;
  fill: var(--color-white);

  line {
    stroke: var(--color-white);
  }

  .top-bun {
    transform: translateY(-2rem);
    &--open {
      animation: move-up 1s ease-in-out;
    }
  }

  .meat {
    transform: translateY(0);
  }

  .bottom-bun {
    transform: translateY(2rem);
  }

  .vertical-line {
    //opacity: 0;
  }


  .top-bun, .bottom-bun {
    opacity: 1;
    transition: transform 1s ease-in-out;

    &--open {
      opacity: 0;
      transform: translateY(0);
    }
  }


  @keyframes move-up{
    0% {
      opacity: 1;
      transform: translateY(-2.5rem);
    }
    100% {
      opacity: 0;
      transform: translateY(0);
    }
  }
}

</style>