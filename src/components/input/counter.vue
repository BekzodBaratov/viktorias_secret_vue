<template>
  <form class="flex">
    <div class="flex border rounded-sm border-color-line divide-x">
      <p @click="clickCunter(false)" class="counter-btn p-2">
        <i class="fas fa-minus"></i>
      </p>
      <input
        @input="emit('handleCount', $event.target.value)"
        v-model="count"
        min="0"
        max="999"
        name="num"
        class="counter-inp"
        type="number"
      />
      <p @click="clickCunter(true)" class="counter-btn p-2">
        <i class="fas fa-plus"></i>
      </p>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({ count: { type: Number, default: 1 } });
const count = ref(props.count);

function clickCunter(bool) {
  if (bool) {
    if (count.value < 999) {
      count.value++;
      emit("handleCount", count.value);
    }
  } else {
    if (count.value > 1) {
      count.value--;
      emit("handleCount", count.value);
    }
  }
}
const emit = defineEmits(["handleCount"]);
</script>

<style>
.counter-inp {
  @apply w-12 text-center h-full outline-none border-0;
}
.counter-btn {
  @apply cursor-pointer active:bg-gray-300;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  appearance: textfield;
}
</style>
