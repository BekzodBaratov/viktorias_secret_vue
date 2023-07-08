<template>
  <div class="flex justify-center items-center h-screen bg-gray-200 px-6">
    <div class="p-6 max-w-md w-full bg-white shadow-md rounded-md">
      <p class="text__big-2 text-center pb-6">Вход</p>

      <form method="POST">
        <!-- <label class="block">
          <span class="text-gray-700 text-sm">Email</span>
          <input type="email" class="form-input mt-1 block w-full rounded-md focus:border-indigo-600" />
        </label>
        <label class="block mt-3">
          <span class="text-gray-700 text-sm">Password</span>
          <input type="password" class="form-input mt-1 block w-full rounded-md focus:border-indigo-600" />
        </label>
        <div class="flex justify-between items-center mt-4">
          <div>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox text-indigo-600" />
              <span class="mx-2 text-gray-600 text-sm">Remember me</span>
            </label>
          </div>

          <div>
            <a class="block text-sm fontme text-indigo-700 hover:underline" href="#">Forgot your password?</a>
          </div>
        </div>
        <div class="mt-6">
          <button class="py-2 px-4 text-center bg-indigo-600 rounded-md w-full text-white text-sm hover:bg-indigo-500">
            Sign in
          </button>
        </div> -->

        <div class="flex flex-col">
          <Input
            :modelValue="data.phone"
            v-model="data.phone"
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
          <Input
            :modelValue="data.confirmPassword"
            v-model="data.confirmPassword"
            inputType="password"
            :show-hide-value="showPass2"
            label="Подтвердите пароль*"
            @showHide="showPass2 = !showPass2"
            placeholder=""
          />
          <div class="flex justify-between mt-3">
            <div class="flex gap-2">
              <input type="checkbox" id="remember" />
              <label class="text__secondary-gray" for="remember">
                Я согласен с <a class="text__secondary hover:underline" href="#">Политикой конфиденциальности</a>
              </label>
            </div>
          </div>
          <SButton
            @click.prevent="handleForm"
            text="Зарегистрировать"
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
            У вас уже есть аккаунт ? <RouterLink class="text-color-black underline" to="/login">Войти</RouterLink>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import Input from "../components/input/productInput.vue";
import SButton from "../components/buttons/SButton.vue";
import { ref } from "vue";

const showPass = ref(false);
const showPass2 = ref(false);

const viewMoreBtn = ref(false);
const data = {
  phone: "+998 ",
  password: "",
  confirmPassword: "",
};

function handleForm() {
  viewMoreBtn.value = true;
  console.log(data);
}
</script>
