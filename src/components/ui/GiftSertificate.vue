<template>
  <section class="giftSertificate">
    <div class="container">
      <div class="flex md:gap-4 justify-center items-center">
        <div class="scale-110 origin-top-right">
          <img width="250" src="../../assets/images/Gift-Card-She-Loves-It-435x5742.png" alt="image" />
        </div>
        <div class="scale-110 origin-bottom-left">
          <img width="250" src="../../assets/images/Gift-Card-She-Loves-It-435x5742.png" alt="image" />
        </div>
        <div class="p-6 md:p-10 max-w-sm">
          <h2 class="text__big-3 md:text__big-2">{{ t("fuw.gift_certificate") }}</h2>
          <p class="text__secondary">{{ t("fuw.gift_certificate2") }}</p>
          <SButton
            @click="viewMoreBtn = true"
            :text="t('fuw.view_offers')"
            variant="primary"
            :loading="viewMoreBtn"
            type="button"
            textClass="''"
            customClass="mt-6"
            :hasShadow="true"
            spinnerColor="black"
            :disabled="viewMoreBtn"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import SButton from "../buttons/SButton.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const viewMoreBtn = ref(false);
</script>

<style scoped>
.giftSertificate {
  @apply bg-color-primary2 my-12;
}
</style>
