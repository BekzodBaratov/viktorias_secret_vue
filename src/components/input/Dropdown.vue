<template>
  <button
    id="dropdownDefaultButton"
    data-dropdown-toggle="dropdown"
    class="text__primary p-2 rounded-md text-center flex justify-between items-center w-full hover:bg-gray-100"
    type="button"
    @click.prevent="emit('handleDropdown')"
  >
    {{ title }}
    <svg
      class="w-2.5 h-2.5 ml-2.5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 6"
      :class="isOpen ? '' : '-rotate-90'"
    >
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
    </svg>
  </button>
  <!-- Dropdown menu -->
  <div v-show="isOpen" id="dropdown" class="w-full">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  title: { type: String, default: "" },
  isOpen: { type: Boolean, default: false },
});
const emit = defineEmits(["handleDropdown"]);
</script>
