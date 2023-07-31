<template>
  <section class="steps">
    <div :class="hasContainer ? '' : 'container'">
      <ul class="grid gap-6 xs:grid-cols-2 md:grid-cols-3 justify-between py-8 border-b">
        <li class="flex gap-2 items-center">
          <div>
            <img width="40" src="/src/assets/images/icons/002-delivery-truck1.svg" alt="002-delivery-truck" />
          </div>
          <div>
            <h3 class="text__primary">{{ t("steps[0].title") }}</h3>
            <p class="text__secondary">{{ t("steps[0].desc") }}</p>
          </div>
        </li>
        <li class="flex gap-2 items-center">
          <div>
            <img width="40" src="/src/assets/images/icons/guarantee.svg" alt="002-delivery-truck" />
          </div>
          <div>
            <h3 class="text__primary">{{ t("steps[1].title") }}</h3>
            <p class="text__secondary">{{ t("steps[1].desc") }}</p>
          </div>
        </li>
        <li class="flex gap-2 items-center">
          <div>
            <img width="40" src="../../assets/images/icons/credit-card.svg" alt="002-delivery-truck" />
          </div>
          <div>
            <h3 class="text__primary">{{ t("steps[2].title") }}</h3>
            <p class="text__secondary">{{ t("steps[2].desc") }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const props = defineProps({ hasContainer: { type: Boolean, default: false } });
const { t } = useI18n();
</script>
