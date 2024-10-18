<template>
  <div>
    <h1>{{ $route.meta.title }}</h1>
    <ul>
      <li>
        <NuxtLink to="/router/parent">路由到父页面</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/router/users/123">参数路由页面</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/router/users-admins/123">参数路由页面</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/router/test/1/2/3">匹配所有路由参数</NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  title: "Router",
});
</script>
