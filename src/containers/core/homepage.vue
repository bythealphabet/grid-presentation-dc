<style scoped lang="scss">
.heading {
  grid-column: 2 / -2;
  grid-row: 1 / -2;
  justify-self: center;
  align-self: center;

  @media (min-width: 768px) {
    margin-right: 8rem;
    grid-row: 1 / -1;
    grid-column: 2 / span 8;
  }
  
  @media (min-width: 1200px) {
    grid-row: 1 / -2;
    align-self: flex-end;
  }
}
</style>

<template>
  <Heading/>
</template>









<script setup>
import Heading from "../../components/Heading.vue";
</script>


