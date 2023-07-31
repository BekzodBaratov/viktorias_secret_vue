<template>
  <div>
    <div class="hidden md:block fixed z-50 bottom-8 right-8">
      <div
        class="w-12 h-12 bg-color-primary flex items-center justify-center shadow-lg"
        @click="isActiveSupportModal = !isActiveSupportModal"
        :class="isActiveSupportModal ? 'rounded-r-full rounded-bl-full' : 'rounded-full'"
      >
        <i class="fa-solid fa-headset text-white text-2xl"></i>
      </div>
    </div>
    <div v-if="isActiveSupportModal" class="hidden md:block fixed z-50 bottom-20 right-20">
      <div class="bg-white rounded-lg p-4">
        <div class="flex flex-col h-[24rem] min-w-[20rem]">
          <div class="flex gap-3 items-center pb-3">
            <div class="w-16 aspect-square rounded-full overflow-hidden bg-gray-400 px-1">
              <img class="w-full h-full object-cover" src="../assets/images/girl-support.png" alt="girl-support" />
            </div>
            <div>
              <p class="text__primary">Имя</p>
              <p class="text__primary-pink">Служба поддержки</p>
            </div>
          </div>
          <div class="messages grow max-w-[20rem] overflow-y-auto">
            <div
              v-for="(ms, i) in messages"
              :key="i"
              class="text__secondary-gray pb-4"
              :class="ms.author == 'support' ? 'text-left' : 'text-right'"
            >
              {{ ms.text }}
            </div>
          </div>
          <form class="flex">
            <input
              v-model="clientMessage"
              class="border grow rounded-lg py-2 px-3 mr-2"
              type="text"
              placeholder="Новый разговор"
            />
            <button
              @click.prevent="handleSupportForm"
              class="px-4 py-2 rounded-lg bg-color-primary text-center text-white font-medium"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
    <div v-if="isActiveSupportModal" @click="isActiveSupportModal = false" class="fixed inset-0 z-40 bg-[#0006]"></div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const isActiveSupportModal = ref(false);
const clientMessage = ref("");
const messages = reactive([
  {
    text: "Привет всем",
    author: "support",
  },
  {
    text: "👋 Я здесь, чтобы помочь, поэтому дайте мне знать, в чем дело, и я буду рад найти решение 🤓",
    author: "support",
  },
]);

function handleSupportForm() {
  messages.push({ text: clientMessage.value, author: "client" });
  const clientMessages = messages.filter((ms) => ms.author == "client");
  setTimeout(() => {
    if (clientMessages.length <= 1)
      messages.push({
        text: "Ваше сообщение было передано нашим сотрудникам, которые ответят в ближайшее время.",
        author: "support",
      });
  }, 2000);
  clientMessage.value = "";
}
</script>
