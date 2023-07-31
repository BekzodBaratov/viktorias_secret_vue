<template>
  <div class="card">
    <!-- <pre>{{ props.vacancy }}</pre> -->
    <div class="grid md:grid-cols-2 pb-10 md:pb-0 items-center">
      <div class="h-full" :class="{ 'md:order-2': props.isLeft }">
        <img class="w-full h-full object-cover object-center" :src="props.vacancy.image_url" alt="image" />
      </div>
      <div class="md:pl-6 lg:pl-12 py-3">
        <h2 class="text__primary pb-4">{{ gggg(props.vacancy, "first_title_") }}</h2>
        <p class="text__secondary-gray pb-3">{{ gggg(props.vacancy, "second_title_") }}</p>
        <p class="text__secondary-gray pb-3">{{ gggg(props.vacancy, "thirt_title_") }}</p>
        <p class="text__secondary-gray pb-3">{{ gggg(props.vacancy, "first_desc_") }}</p>
        <p class="text__secondary-gray pb-3">{{ gggg(props.vacancy, "second_desc_") }}</p>
        <p class="text__secondary-gray pb-3">{{ gggg(props.vacancy, "thirt_desc_") }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["vacancy", "isLeft"]);
const lang = localStorage.getItem("lng");
const gggg = (arr, ff) => arr[ff + lang];
</script>
