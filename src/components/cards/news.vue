<template>
  <div class="card space-y-3">
    <!-- <pre>{{ props.news }}</pre> -->
    <img :src="props.news.image_url" alt="img" />
    <h2 class="text__primary">{{ dataGet("desc_") }}</h2>
    <p class="text__secondary-gray">{{ dataGet("title_") }}</p>
  </div>
</template>

<script setup>
const props = defineProps(["news"]);
const lang = localStorage.getItem("lng");
const dataGet = (name) => props.news[name + lang];
console.log(props.news);
</script>
