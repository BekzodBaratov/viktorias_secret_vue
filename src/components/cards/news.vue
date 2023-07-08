<template>
  <div class="card space-y-3">
    <img :src="props.news.img" alt="img" />
    <p class="text__primary-pink">{{ props.news.category }}</p>
    <h2 class="text__primary">{{ props.news.title }}</h2>
    <p><span class="text-color-black2">Автор</span> {{ props.news.author }} | {{ props.news.date }}</p>
  </div>
</template>

<script setup>
const props = defineProps(["news"]);
console.log(props.news);
</script>
