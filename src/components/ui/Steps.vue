<template>
  <section class="steps">
    <div :class="hasContainer ? '' : 'container'">
      <ul class="grid gap-6 xs:grid-cols-2 md:grid-cols-3 justify-between py-8 border-b">
        <li class="flex gap-2 items-center">
          <div>
            <img width="40px" src="/src/assets/images/icons/002-delivery-truck1.svg" alt="002-delivery-truck" />
          </div>
          <div>
            <h3 class="text__primary">Бесплатная доставка</h3>
            <p class="text__secondary">Бесплатная доставка при заказе свыше 500 000 сум</p>
          </div>
        </li>
        <li class="flex gap-2 items-center">
          <div>
            <img width="40px" src="/src/assets/images/icons/guarantee.svg" alt="002-delivery-truck" />
          </div>
          <div>
            <h3 class="text__primary">Гарантия возврата денег</h3>
            <p class="text__secondary">100% гарантия возврата денег</p>
          </div>
        </li>
        <li class="flex gap-2 items-center">
          <div>
            <img width="40px" src="/src/assets/images/icons/credit-card.svg" alt="002-delivery-truck" />
          </div>
          <div>
            <h3 class="text__primary">Гибкая форма оплаты</h3>
            <p class="text__secondary">Оплачивайте несколькими удобным способом</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({ hasContainer: { type: Boolean, default: false } });
</script>
