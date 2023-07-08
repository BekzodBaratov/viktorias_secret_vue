<template>
  <!-- <pre>{{ category }}</pre> -->
  <div class="category">
    <img :src="category.image" :alt="category.title" />
    <h3 class="text-center py-2 text__primary">
      {{ category.title }} <span class="text-color-primary">({{ category.count }})</span>
    </h3>
  </div>
</template>

<script setup>
defineProps({
  category: {},
});
</script>
