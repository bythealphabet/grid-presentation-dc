<template>
  <h1 class="heading"><span class="heading--main">CSS Grid</span><span
      class="heading--sub">The Ultimate Layout Tool</span></h1>
</template>

<style scoped lang="scss">
.heading {
  display: flex;
  flex-flow: column nowrap;
  line-height: 1;
  color: var(--color-dotcontrol-pink);

  &--main {
    font-weight: 700;
    font-size: 15rem;
    transform: translateX(-1rem);

    @media (min-width: 900px) {
      font-size: 18rem;
    }
  }

  &--sub {
    font-size: 8rem;
    color: var(--color-white);

    @media (min-width: 1440px) {
      font-size: 10rem;
    }
  }
}


</style>