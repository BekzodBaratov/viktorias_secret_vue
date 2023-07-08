<template>
  <main class="space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-16">
    <Hero />
    <Steps />
    <NewArrivals />
    <Recommended />
    <Trending />
    <GiftSertificate />
    <MainCategories />
    <About />
    <News />
    <Follow />
  </main>
</template>

<script setup>
import Hero from "../components/ui/Hero.vue";
import Steps from "../components/ui/Steps.vue";
import NewArrivals from "../components/ui/NewArrivals.vue";
import Recommended from "../components/ui/Recommended.vue";
import Trending from "../components/ui/Trending.vue";
import GiftSertificate from "../components/ui/GiftSertificate.vue";
import MainCategories from "../components/ui/MainCategories.vue";
import About from "../components/ui/About.vue";
import News from "../components/ui/News.vue";
import Follow from "../components/ui/Follow.vue";
</script>
