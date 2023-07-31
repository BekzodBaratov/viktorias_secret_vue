<template>
  <!-- <pre>{{ category }}</pre> -->
  <div class="category">
    <!-- image_url ishlasa ochiladi -->
    <!-- <img :src="category.image_url" :alt="image" /> -->
    <h3 class="text-center py-2 text__primary">
      {{ getLangData(category, "_category_name") }}
      <span class="text-color-primary">({{ category.count ? category.count : 0 }})</span>
    </h3>
  </div>
</template>

<script setup>
import { ref } from "vue";
defineProps({ category: { type: Object, default: {} } });
const lang = ref(localStorage.getItem("lng"));
const getLangData = (arr, chunk) => arr[lang.value + chunk];
</script>
