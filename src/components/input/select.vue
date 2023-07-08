<template>
  <div>
    <label for="small" class="block mb-2 text-sm font-medium text-black">{{ label }}</label>

    <select id="small" @change="getValue" class="block w-full p-2 text-sm text-black rounded-lg">
      <option selected :value="model">{{ modelLabel }}</option>
      <option v-for="(item, index) in data" :key="index" :value="item.id">
        {{ !isType ? item.name : item.type }}
      </option>
    </select>
  </div>
</template>

<script setup>
defineProps({
  data: { id: Number, name: String },
  model: String,
  modelLabel: { type: String, default: "Kategoriyani tanlang" },
  label: String,
  isType: { type: Boolean, default: false },
});

const emit = defineEmits(["getVal"]);

const getValue = (e) => emit("getVal", e.target.value);
</script>
