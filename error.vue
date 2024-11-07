<template>
  <div>
    <h1>错误</h1>
    <pre>{{ error }}</pre>
  </div>
</template>
<script setup lang="ts">
defineProps({
  error: {
    type: Object,
    required: true,
  },
});
</script>
