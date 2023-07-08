<template>
  <div class="card">
    <div class="grid md:grid-cols-2 pb-10 md:pb-0 items-center">
      <div class="h-full" :class="props.vacancy.leftImg ? '' : 'md:order-2'">
        <img class="w-full h-full object-cover object-center" :src="props.vacancy.image" alt="" />
      </div>
      <div class="md:pl-6 lg:pl-12 py-3">
        <h2 class="text__primary">{{ props.vacancy.title }}</h2>
        <p class="text__secondary-gray pb-3">{{ props.vacancy.desc }}</p>
        <ul class="space-y-3">
          <li v-for="el in props.vacancy.requirements">
            <h3 class="text__primary-2">{{ el.title }}</h3>
            <ul>
              <li class="text__secondary-gray" v-for="rq in el.requirement">- {{ rq }}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["vacancy"]);
</script>
