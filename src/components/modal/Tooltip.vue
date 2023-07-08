<template>
  <div
    class="absolute bottom-[115%] min-w-max left-0 z-10 capitalize invisible group-hover:visible inline-block px-2 py-1 text-sm font-medium text-white bg-color-primary opacity-0 group-hover:opacity-100 rounded-lg shadow-sm"
  >
    {{ props.text }}
    <div class="tooltip-arrow"></div>
  </div>
</template>

<script setup>
const props = defineProps({ text: { type: String, default: "Tooltip content" } });
</script>

<style scoped>
.tooltip-arrow {
  @apply absolute left-5 top-[85%] w-2 h-2 bg-color-primary rotate-45;
}
</style>
