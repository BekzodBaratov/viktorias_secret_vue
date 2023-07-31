<template>
  <div class="flex gap-3">
    <div class="flex gap-1">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
    </div>
    <p>({{ props.commentsCount }})</p>
  </div>
</template>

<script setup>
const props = defineProps(["rating", "commentsCount"]);
</script>
