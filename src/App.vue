<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import { provideDashboardFilters } from "./composables/useDashboardFilters";

provideDashboardFilters();
</script>

<template>
  <HelloWorld />
</template>
