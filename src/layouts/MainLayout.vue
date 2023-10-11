<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="q-pa-md menu">
      <span> FILMES POPULARES </span>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    return {};
  },
});
</script>

<style scoped>
.menu {
  background-color: #a412e2;
  text-align: center;
}
</style>
