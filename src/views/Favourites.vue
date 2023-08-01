<template>
  <main class="fav pb-12">
    <div class="container">
      <h2 class="text__big-2 py-8 text-center">Favourites</h2>
      <ul class="grid grid-cols-4">
        <li v-for="(pr, i) in store.favourites" :key="pr.id">
          <Card :card="pr" />
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup>
import { useProductStore } from "../stores/product";
import Card from "../components/cards/mainProduct.vue";
const store = useProductStore();
</script>
