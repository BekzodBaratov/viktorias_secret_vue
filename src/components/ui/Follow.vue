<template>
  <section class="follow pb-12">
    <h2 class="text__big-2 text-center pb-6">{{ t("fuw.inInstagram") }}</h2>
    <ul class="grid grid-cols-6 gap-1">
      <li v-for="img in arr" :key="img">
        <img class="w-full" :src="img" alt="image" />
      </li>
    </ul>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import img1 from "/src/assets/images/IMG.png";
import img2 from "/src/assets/images/IMG-1.png";
import img3 from "/src/assets/images/IMG-2.png";
import img4 from "/src/assets/images/IMG-3.png";
import img5 from "/src/assets/images/IMG-4.png";
import img6 from "/src/assets/images/IMG-5.png";
const arr = [img1, img2, img3, img4, img5, img6];
const { t } = useI18n();
</script>
