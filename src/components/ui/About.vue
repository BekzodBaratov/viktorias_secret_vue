<template>
  <section class="about">
    <div class="container">
      <div class="grid md:grid-cols-2 gap-6 md:gap-12 lg:gap-24">
        <div class="order-2 md:order-1">
          <h2 class="text__big-2 pb-6 md:pb-12">ИНТЕРНЕТ-МАГАЗИН ПРОДУКЦИИ VICTORIA'S SECRET В УЗБЕКИСТАНЕ</h2>
          <p class="leading-relaxed">
            Компания <span>VICTORIA'S SECRET</span> - это интернет-магазин премиум класса
            <span class="underline">женского белья, купальников</span>, одежды, косметики и аксессуаров от всемирно
            известного бренда - тм Victoria's Secret. Мы ориентированы на качественный сервис и VIP-обслуживание. На
            сайте представлено исключительно оригинальную продукцию «Виктория Сикрет» в <span>УЗБЕКИСТАНЕ</span> с
            официального каталога тм Victoria's Secret.
          </p>
          <SButton
            @click="viewMoreBtn = true"
            text="подробнее"
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
</script>
