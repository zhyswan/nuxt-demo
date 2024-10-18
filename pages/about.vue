<template>
  <div>
    <h1>关于</h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  // title: "关于",
  middleware: [
    // "auth",
    (to, from) => {
      console.log("about middleware to:", to);
      console.log("about middleware from:", from);
    },
  ],
});
</script>
