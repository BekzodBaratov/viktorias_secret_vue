<script setup>
import Header from "/src/components/Header.vue";
import Footer from "/src/components/Footer.vue";
import Support from "../components/Support.vue";
</script>

<template>
  <Header></Header>
  <slot></slot>
  <Footer></Footer>
  <Support />
</template>
