<template>
  <section class="newArrivals">
    <div class="container py-12">
      <h2 class="text__big text-center">{{ t("fuw.trendinf_now") }}</h2>
      <h3 class="text-color-black2 text-center pb-10">{{ t("fuw.best_sale") }}</h3>
      <TrendSwiper />
      <center>
        <RouterLink to="/product_filter">
          <SButton
            text="Показать все"
            variant="outline"
            type="button"
            textClass="''"
            customClass="mt-6"
            :hasShadow="true"
            spinnerColor="black"
          />
        </RouterLink>
      </center>
    </div>
  </section>
</template>

<script setup>
import TrendSwiper from "../swipers/trendSwiper.vue";
import SButton from "../buttons/SButton.vue";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const viewMoreBtn = ref(false);
</script>
