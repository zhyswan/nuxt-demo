<template>
  <NuxtLink to="/router">路由页面</NuxtLink>
  <div>[group] [id]</div>
  <div>{{ $route.params.group }} - {{ $route.params.id }}</div>
</template>
<script setup lang="ts">
const route = useRoute();
console.log(route.params);
</script>
