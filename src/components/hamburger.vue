<script setup>
import {ref, defineProps} from "vue";
const props = defineProps({
  toggleMenu: Function,
  open: Boolean
});

</script>

<template>
  <div class="hamburger-box">
    <svg @click="toggleMenu" class="hamburger" width="94" height="121" viewBox="0 0 94 121"
         xmlns="http://www.w3.org/2000/svg">
      <line :class="{'open':open, 'close':!open}" class="top-bun" y1="56" x2="72" y2="56" stroke="black"
            stroke-width="8"/>
      <line :class="{'open':open, 'close':!open}" class="meat-one" stroke-dasharray="100" stroke-dashoffset="100" y1="56"
            x2="42"
            y2="56" stroke="black" stroke-width="8"/>
      <line :class="{'open':open, 'close':!open}" class="meat-two" stroke-dasharray="100" stroke-dashoffset="100" y1="56"
            x1="42" x2="72"
            y2="56" stroke="black" stroke-width="8"/>
      <line :class="{'open':open, 'close':!open}" class="bottom-bun" y1="56" x2="72" y2="56" stroke="black"
            stroke-width="8"/>
      <line :class="{'open':open, 'close':!open}" class="vl-one" x1="40" x2="40" y1="20" y2="90" stroke="black"
            stroke-width="8"/>
      <line :class="{'open':open, 'close':!open}" class="vl-two" x1="40" x2="40" y1="20" y2="90" stroke="black"
            stroke-width="8"/>
    </svg>

    <svg class="arrow" @click="toggleMenu" width="94" height="121" viewBox="0 0 94 121"
         xmlns="http://www.w3.org/2000/svg">
      <line x1="50" x2="70" y1="30" y2="72" stroke="black"
            stroke-width="8"/>
      <line x1="50" x2="70" y1="110" y2="68" stroke="black"
            stroke-width="8"/>
    </svg>
  </div>
</template>

<style scoped lang="scss">
.hamburger-box {
  z-index: 20;
 display: flex; 
}

.arrow {
  visibility: hidden;
  
  line {
    stroke: var(--color-grey);
  
  }
  @media (min-width: 900px) {
    visibility: visible;
  }
}

.hamburger {
  overflow: visible;
  fill: var(--color-white);
  @media (min-width: 900px) {
   visibility: hidden;
  }

  & > * {
    transform-box: fill-box;
  }

  line {
    stroke: var(--color-white);
  }

  .top-bun {
    --v-direction-start: -2rem;
    transform: translateY(var(--v-direction-start));
  }

  .bottom-bun {
    --v-direction-start: 2rem;
    transform: translateY(var(--v-direction-start));
  }

  .meat-one, .meat-two,
  .vl-one, .vl-two {
    transform-origin: center;
  }

  .meat-one {
    transform: rotate(180deg);
    stroke-dasharray: 100;
    stroke-dashoffset: 0;
  }

  .meat-two {
    stroke-dasharray: 100;
    stroke-dashoffset: 0;
  }

  .vl-one, .vl-two {
    opacity: 0;
  }

  .vl-one {
    --h-direction-start: -4.6rem;
    --h-direction-end: 0;
    transform: translateX(var(--h-direction-start)) rotate(0);
  }

  .vl-two {
    --h-direction-start: 3.8rem;
    --h-direction-end: 0;
    transform: translateX(var(--h-direction-start)) rotate(0);
  }


  .open {
    &.top-bun {
      --v-direction-start: -2.5rem;
      --v-direction-end: 0;
    }

    &.bottom-bun {
      --v-direction-start: 2.5rem;
      --v-direction-end: 0;
    }

    &.vl-one {
      --h-direction-start: -5.6rem;
      --rotation: 45deg
    }

    &.vl-two {
      --h-direction-start: 4.8rem;
      --rotation: -45deg
    }

    &.top-bun, &.bottom-bun {
      animation: hl-anime-open .3s ease-in-out forwards;
    }

    &.meat-one, &.meat-two {
      animation: dash .4s ease-in-out both;
    }

    &.vl-one, &.vl-two {
      animation: vl-anime-open .4s .1s ease-in-out forwards;
    }
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 100;
    }
  }
}

@keyframes hl-anime-open {
  0% {
    opacity: 1;
    transform: translateY(var(--v-direction-start));
  }
  100% {
    opacity: 0;
    transform: translateY(var(--v-direction-end));
  }
}

@keyframes vl-anime-open {
  0% {
    opacity: 0;
    transform: translateX(var(--h-direction-start));
  }
  100% {
    opacity: 1;
    transform: translateX(var(--h-direction-end)) rotate(var(--rotation))
  }
}
</style>