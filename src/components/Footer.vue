<template>
  <footer>
    <div class="bg-color-primary py-12">
      <div class="container">
        <ul class="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-3 gap-y-8">
          <li>
            <ul class="space-y-4">
              <li class="font-medium">ИНТЕРНЕТ-МАГАЗИН ПРОДУКЦИИ VICTORIA'S SECRET В УЗБЕКИСТАНЕ</li>
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
              <li class="title">ПОМОЩЬ</li>
              <li class="link">
                <RouterLink to="#"> Оплата и доставка </RouterLink>
              </li>
              <li class="link">
                <RouterLink to="#">Возврат и обмен</RouterLink>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li class="title">ИНФО</li>
              <li class="link">
                <RouterLink to="#">О магазине</RouterLink>
              </li>
              <li class="link">
                <RouterLink to="#">Отзывы о нас</RouterLink>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li class="title">
                <RouterLink to="#">МОЙ КАБИНЕТ</RouterLink>
              </li>
              <li class="link">
                <RouterLink to="#">История покупок</RouterLink>
              </li>
              <li class="link">
                <RouterLink to="#">Любимые товары</RouterLink>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li class="title">КОНТАКТЫ</li>
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
            <ul class="flex justify-center md:justify-start gap-3 items-center flex-wrap">
              <li>
                <a class="hover:text-color-primary" href="#"> Пользовательское соглашение </a>
              </li>
              <li>
                <a class="hover:text-color-primary" href="#"> Политика конфиденциальности </a>
              </li>
              <li>
                <a href="#">
                  <img src="/src/assets/images/pay-cs.png" alt="pay" />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.title {
  @apply font-semibold pb-2;
}
.link {
  @apply font-normal leading-loose hover:text-white;
}
</style>
