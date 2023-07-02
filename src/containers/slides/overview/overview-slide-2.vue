<template>

  <div class="comparison">
    <div class="using-grid">
      <!-- CSS Grid -->
      <h1 class="title">CSS GRID</h1>
      <div class="wrapper">
        <div class="header">HEADER</div>
        <div class="menu">MENU</div>
        <div class="content">CONTENT</div>
        <div class="footer">FOOTER</div>
      </div>
    </div>

    <div class="using-bootstrap">
      <!-- Bootstrap -->
      <h1 class="title">BOOTSTRAP</h1>
      <div class="row">
        <div class="col-xs-12 header">
          HEADER
        </div>
      </div>
      <div class="row">
        <div class="col-xs-4 menu">
          MENU
        </div>
        <div class="col-xs-8 content">
          CONTENT
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 footer">
          FOOTER
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "slid-2"
}
</script>

<style scoped>

.comparison {
  grid-column: 2 / -2;
  grid-row: 2 / -2;
}

.using-grid {
  display: grid;
  grid-gap: 2px;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 80px;
}


.list :nth-child(1) {
  grid-column: 1/ span 2;
}

.list :nth-child(6) {
  grid-column: 1/ span 2;
}

li:hover {
  background-color: #ff6f69;
}

a {
  color: #ffeead;
}

li {
  background-color: #88d8b0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffeead;
  font-weight: 800;
  letter-spacing: 1px;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 40px 100px 40px;
}

.header {
  grid-column: span 12;
}

.menu {
  grid-column: span 4;
}

.content {
  grid-column: span 8;
}

.footer {
  grid-column: span 12;
}

@media screen and (max-width: 480px) {
  .header {
    grid-column: span 6;
  }

  .menu {
    grid-row: 1;
    grid-column: span 6;
  }

  .content {
    grid-column: span 12;
  }
}
</style>