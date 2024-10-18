<template>
  <div>
    <h1>关于</h1>
  </div>
</template>

<script setup lang="ts">

useHead({
  title: 'useHead title about',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  // script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
definePageMeta({
  title: "关于 title",
  middleware: [
    // "auth",
    (to, from) => {
      // console.log("about middleware to:", to);
      // console.log("about middleware from:", from);
    },
  ],
});
</script>
