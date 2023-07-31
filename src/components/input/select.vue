<template>
  <div>
    <label v-if="props.label" for="small" class="block mb-2 text-sm font-medium text-gray-900">{{ props.label }}</label>

    <select id="small" @change="getValue" class="text-gray-900 text-sm block w-full py-1 px-2 uppercase">
      <option :value="props.model" v-if="props.modelLabel">{{ props.modelLabel }}</option>
      <option v-for="item in props.data" :key="item.id" :value="item.name" :selected="props.selected == item.name">
        {{ !props.isType ? item.name : item.type }}
      </option>
    </select>
  </div>
</template>

<script setup>
const props = defineProps({
  data: { id: Number, name: String },
  model: String,
  modelLabel: { type: String, default: "Kategoriyani tanlang" },
  label: String,
  isType: { type: Boolean, default: false },
  selected: { type: String, default: "ru" },
});

const emit = defineEmits(["getVal"]);

const getValue = (e) => emit("getVal", e.target.value);
</script>
