<template>
  <div class="my-2 w-full relative">
    <label for="element" class="block mb-2 text-sm font-medium text-gray-900">{{ label }}</label>
    <input
      :type="type"
      :id="parseInt(Math.random() * 1000)"
      :value="props.modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="props.placeholder"
      class="shadow-sm bg-transparent border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    />
    <div @click="$emit('showHide')" v-if="props.inputType == 'password'" class="absolute bottom-2 right-2">
      <i v-if="props.showHideValue" class="fa-regular fa-eye-slash"></i>
      <i v-else class="fa-regular fa-eye"></i>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: { type: String || Number, default: "" },
  inputType: { type: String, default: "string" },
  label: { type: String },
  placeholder: { type: String },
  showHideValue: { type: Boolean, default: false },
});

const type = computed(() => (props.inputType != "password" || props.showHideValue == false ? props.inputType : "text"));
defineEmits(["update:modelValue", "showHide"]);
</script>
