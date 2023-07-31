<template>
  <footer>
    <div class="bg-color-primary py-12">
      <div class="container">
        <ul class="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-3 gap-y-8">
          <li>
            <ul class="space-y-4">
              <li class="font-medium">{{ t("fuw.products") }}</li>
              <li>
                <ul class="flex gap-4">
                  <li>
                    <RouterLink to="#">
                      <img class="hover:scale-105" src="/src/assets/images/icons/facebook-f.svg" alt="facebook-f" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="#">
                      <img class="hover:scale-105" src="/src/assets/images/icons/instagram.svg" alt="facebook-f" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="#">
                      <img class="hover:scale-105" src="/src/assets/images/icons/youtube.svg" alt="youtube" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="#">
                      <img class="hover:scale-105" src="/src/assets/images/icons/twitter.svg" alt="twitter" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="#">
                      <img class="hover:scale-105" src="/src/assets/images/icons/pinterest-p.svg" alt="pinterest-p" />
                    </RouterLink>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li class="title">{{ t("footer.help") }}</li>
              <li class="link">
                <RouterLink to="/pages">{{ t("footer.payment") }}</RouterLink>
              </li>
              <li class="link">
                <RouterLink to="/pages">{{ t("footer.exchange") }}</RouterLink>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li class="title">{{ t("footer.info") }}</li>
              <li class="link">
                <RouterLink to="/about">{{ t("footer.about") }}</RouterLink>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li class="title">{{ t("footer.my_office") }}</li>
              <li class="link">
                <RouterLink to="#">{{ t("footer.favourites") }}</RouterLink>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li class="title">{{ t("footer.contacts") }}</li>
              <li class="flex gap-2 link">
                <img src="/src/assets/images/icons/phone-incoming.svg" alt="phone-incoming" />
                <a href="tel:+998 90 500 00 00">+998 90 500 00 00</a>
              </li>
              <li class="flex gap-2 link">
                <img src="/src/assets/images/icons/mail.svg" alt="mail" />
                <a hraf="mailto:info@companyname.uz">info@companyname.uz</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <div class="container">
        <ul class="flex justify-center md:justify-between items-center py-2 gap-3 flex-wrap">
          <li>
            <p class="text-center">© 2023 Компания. Все права защищены.</p>
          </li>
          <li>
            <img class="h-6 md:h-8" src="/src/assets/images/pay-cs.png" alt="pay" />
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style scoped>
.title {
  @apply font-semibold pb-2;
}
.link {
  @apply font-normal leading-loose hover:text-white;
}
</style>
