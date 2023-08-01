<template>
  <div class="flex justify-center items-center h-screen bg-gray-200 px-6">
    <div class="p-6 max-w-md w-full bg-white shadow-md rounded-md">
      <p class="text__big-2 text-center pb-6">Вход</p>

      <form>
        <div class="flex flex-col">
          <Input
            :modelValue="data.phone_number"
            v-model="data.phone_number"
            inputType="phone"
            label="Номер телефона*"
            placeholder="placeholder"
          />
          <Input
            :modelValue="data.password"
            v-model="data.password"
            inputType="password"
            :show-hide-value="showPass"
            label="Пароль*"
            @showHide="showPass = !showPass"
            placeholder=""
          />
          <div class="flex justify-between mt-3">
            <div class="flex gap-2">
              <input type="checkbox" id="remember" v-model="checkRemember" />
              <label for="remember">Запомнить меня</label>
            </div>
            <RouterLink to="#">Забыли пароль?</RouterLink>
          </div>
          <SButton
            @click="handleForm(data)"
            text="Войти"
            variant="primary"
            :loading="viewMoreBtn"
            type="submit"
            textClass="''"
            customClass="mt-6 mb-3"
            :hasShadow="true"
            spinnerColor="white"
            :disabled="viewMoreBtn"
          />
          <p class="text__secondary-gray text-center">
            Нет аккаунта ? <RouterLink class="text-color-black underline" to="/signup">Зарегистрируйтесь</RouterLink>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import Input from "../components/input/productInput.vue";
import SButton from "../components/buttons/SButton.vue";
import { useProfileStore } from "../stores/profile";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const store = useProfileStore();

const showPass = ref(false);
const viewMoreBtn = ref(false);
const checkRemember = ref(false);

const data = reactive({
  phone_number: "+998 ",
  password: "",
});

if (localStorage.getItem("checkRemember")) {
  const lData = JSON.parse(localStorage.getItem("checkRemember"));
  data.phone_number = lData.phone_number;
  data.password = lData.password;
}

async function handleForm(data) {
  viewMoreBtn.value = true;
  console.log(data);
  await store.login(data);
  console.log(store.isVerified);
  if (store.isVerified) router.push("/");

  if (checkRemember.value) {
    localStorage.setItem("checkRemember", JSON.stringify(data));
  }
}
</script>
