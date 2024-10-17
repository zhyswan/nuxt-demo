<template>
  <header>
    <ul>
      <li>
        <NuxtLink to="/">首页</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/router">路由</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">关于</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/user">user</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/login">login</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/element">element</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/antd">antd</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/test">test</NuxtLink>
      </li>
    </ul>
  </header>
  <main style="padding: 20px;border: 1px solid #000;">
    <NuxtPage />
    <!-- <router-view /> -->
  </main>
  <footer>尾部</footer>
</template>
<script setup lang="ts"></script>
<style>
ul {
  display: flex;
  gap: 10px;
  list-style: none;
}
a {
  text-decoration: none;
  color: #000;
  font-size: 14px;
}
.router-link-active {
  color: #00f;
}


</style>
