<template>
  <section class="about">
    <div class="container">
      <div class="grid md:grid-cols-2 gap-6 md:gap-12 lg:gap-24">
        <div class="order-2 md:order-1">
          <h2 class="text__big-2 pb-6 md:pb-12">{{ t("fuw.products") }}</h2>
          <p class="leading-relaxed">{{ t("fuw.products_desc") }}</p>
          <SButton
            @click="viewMoreBtn = true"
            :text="t('fuw.more')"
            variant="outline_pink"
            :loading="viewMoreBtn"
            type="button"
            textClass="''"
            customClass="mt-6"
            :hasShadow="true"
            spinnerColor="black"
            :disabled="viewMoreBtn"
          />
        </div>
        <div class="order-1">
          <img class="w-full" src="../../assets/images/df06fa3f96cac18348e4121363e44d751.png" alt="image" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SButton from "../buttons/SButton.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
