<template>
  <main class="contact pb-12">
    <h2 class="text__big-2 text-center py-12">Контакты</h2>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d37423.53557967915!2d69.25529028934265!3d41.35075397656219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1688279058705!5m2!1sru!2s"
      class="w-full h-[40rem] pb-12"
      style="border: 0"
      allowfullscreen="true"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>

    <div class="container">
      <address class="grid md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr] gap-10 not-italic">
        <div class="order-2 md:order-1 space-y-6">
          <div>
            <h3 class="text__primary">Адрес:</h3>
            <p class="text__secondary-gray">Узбекистан , Ташкент</p>
          </div>
          <div>
            <h3 class="text__primary">Информация:</h3>
            <div>
              <a href="tel:+998 90 500 00 00" class="text__secondary-gray">+998 90 500 00 00</a><br />
              <a href="mailto:info@company.uz" class="text__secondary-gray">Info@company.uz</a>
            </div>
          </div>
          <div>
            <h3 class="text__primary">Режим работы:</h3>
            <p class="text__secondary-gray">
              Понедельник - пятница: 08:00 - 20:00 <br />
              Суббота - воскресенье: 10:00 - 18:00
            </p>
          </div>
          <div>
            <h3 class="text__primary pb-4">Наши социальные сети:</h3>
            <ul class="flex gap-4 justify-start">
              <li v-for="social in socials" :key="social.id">
                <img :src="social.icon" :alt="social.url" />
              </li>
            </ul>
          </div>
        </div>
        <div class="order-1">
          <h3 class="text__primary">Напишите нам что-нибудь</h3>
          <p class="text__secondary-gray">Воспользуйтесь формой ниже, чтобы связаться с отделом продаж.</p>
          <form>
            <div class="grid sm:grid-cols-2 sm:gap-4">
              <Input v-model="formData.name" placeholder="Имя" />
              <Input v-model="formData.phone" placeholder="Номер телефона*" />
            </div>
            <Textarea v-model="formData.message" class="col-span-2" />
            <SButton @click.prevent="hanldeForm" text="Send Message" variant="primary" class="justify-self-start" />
          </form>
        </div>
      </address>
    </div>
  </main>
</template>

<script setup>
import Input from "../components/input/productInput.vue";
import Textarea from "../components/input/textarea.vue";
import SButton from "../components/buttons/SButton.vue";
import icon1 from "../assets/images/icons/facebook-f.svg";
import icon2 from "../assets/images/icons/twitter.svg";
import icon3 from "../assets/images/icons/pinterest-p.svg";
import icon4 from "../assets/images/icons/instagram.svg";
import icon5 from "../assets/images/icons/youtube.svg";

const formData = {
  name: "",
  phone: "",
  message: "",
};
function hanldeForm() {
  console.log(formData);
}

const socials = [
  {
    id: 0,
    icon: icon1,
    url: "#",
  },
  {
    id: 1,
    icon: icon2,
    url: "#",
  },
  {
    id: 2,
    icon: icon3,
    url: "#",
  },
  {
    id: 3,
    icon: icon4,
    url: "#",
  },
  {
    id: 4,
    icon: icon5,
    url: "#",
  },
];
</script>
