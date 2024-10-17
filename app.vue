<template>
  <div> 11
    <el-button type="primary">按钮</el-button>
    {{ count }}
    <!-- <a-button>
    button
  </a-button> -->
    <NuxtWelcome />

  </div>
</template>
<script setup lang="ts">
const count = ref(0);
console.log(count.value++);

// import.meta.client && alert(count.value++);


// const config = useRuntimeConfig();
// console.log(config);
</script>
