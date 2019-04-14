<template>
  <div class="toolbar-container">
    <h2 class="toolbar-title">Nuxt Markdown Blog</h2>
    <nuxt-link v-for="(route, index) in routes"
               :key="index"
               :to="route.to"
               class="toolbar-menu">
      {{ route.title }}
    </nuxt-link>
  </div>

</template>

<script>
export default {
  name: 'Toolbar',
  data () {
    return {
      routes: [
        {
          title: 'home',
          to: '/'
        },
        {
          title: 'test-one',
          to: '/markdown/test-one'
        },
        {
          title: 'test-two',
          to: '/markdown/test-two'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.toolbar-container {
  height: 4em;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: rgba(7, 103, 120, 1);

  .toolbar-title {
    margin: auto auto auto 20px;
  }

  .toolbar-menu {
    color: rgba(255, 255, 255, 1);
    margin: auto 10px;
    text-decoration: none;

    &:hover {
      color: rgba(140, 140, 140, 1);
    }
  }
}
</style>
