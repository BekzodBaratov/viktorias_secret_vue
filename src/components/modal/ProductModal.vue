<template>
  <Teleport to="body">
    <div
      id="popup-modal"
      @click="emit('closeModal')"
      :class="{ 'modal-class': isOpen }"
      class="fixed top-0 hidden items-center justify-center z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full h-[100vh]"
    >
      <div class="relative w-full h-full max-w-4xl md:h-auto mx-auto shadow-xl">
        <div class="relative bg-white rounded-lg shadow px-10 py-10">
          <!-- <p class="py-2 px-3 font-medium">{{ label }}:</p>
        <div class="px-4 py-2 text-center w-full">
          <form class="border mb-4">
            <textarea type="text" class="w-full h-[80px] outline-none p-2 resize-none" v-model="modalValue"></textarea>
          </form>
          <div class="flex justify-end">
            <SButton variant="danger" class="mr-2" @click="cancelModal">Bekor qilish</SButton>
            <SButton variant="info" @click="fetch" :loading="loading">Saqlash</SButton>
          </div>
        </div> -->
          <div class="grid grid-cols-2">
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h2 class="text__big-2 pb-6">Бархатная Ночная Рубашка</h2>
              <Stars :rating="4" :comments-count="10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, watch } from "vue";
import SButton from "../buttons/SButton.vue";
import Stars from "../ui/Stars.vue";
import { useToast } from "vue-toastification";
const toast = useToast();

const props = defineProps({
  isOpen: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  data: { type: Object, default: {} },
});

const emit = defineEmits(["closeModal", "fetchModal"]);

const modalValue = ref(props.value);
const openCondition = ref(props.isOpen);
console.log(props.data);

function cancelModal() {
  openCondition.value = false;
  emit("closeModal", openCondition.value);
}

function fetch() {
  openCondition.value = false;
  if (modalValue.value) {
    emit("fetchModal", modalValue.value);
    if (props.loading) {
      cancelModal();
    }
  } else {
    toast.error("Kategoriya maydonini to'ldiring!");
  }
}

watch(
  () => props.loading,
  () => {
    if (!props.loading) {
      cancelModal();
    }
  }
);

watch(
  () => props.value,
  () => {
    modalValue.value = props.value;
  }
);
</script>

<style scoped>
.modal-class {
  overflow: visible;
  display: flex;
  backdrop-filter: blur(6px);
}
</style>
