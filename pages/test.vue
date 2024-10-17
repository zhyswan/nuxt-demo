<template>
  <div style="padding: 20px;border: 1px solid #000;">
    通过点击菜单导航到test页面，这里的内容不会在服务端执行，直接在浏览器里打开这个地址，则会在服务端执行
    {{ count }}
    <NuxtWelcome />
  </div>
</template>
<script setup lang="ts">
const count = ref(0);
console.log(count.value++);

// import.meta.client && alert(count.value++);

const config = useRuntimeConfig();
if (import.meta.server) {
  console.log("服务端运行", config.isServe);
} else {
  console.log("客户端运行", import.meta.client, import.meta.browser);
}
// console.log(config);
</script>
