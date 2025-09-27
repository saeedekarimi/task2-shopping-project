<template>
  <v-footer style="font-size: 11px;" color="red-darken-4">
    <v-container>
    <div class="d-flex justify-space-between ma-8">
      <div class="d-flex flex-column pa-0 ma-0">
        <v-text class="">برای دریافت آخرین اخبار و تخفیف های جدید،ایمیل خود را وارد نمایید</v-text>
        <div class="d-flex ga-4 mt-4">
          <v-text-field
            type="email"
            max-width="600"
            density="compact"
            placeholder="ایمیل شما"
            variant="plain"
            width="390"
            class="border-sm border-solid rounded-lg pr-5"
          >
          </v-text-field>
          <v-btn size="large" color="red-darken-2" rounded="lg" class="" elevation="0"
            >ثبت</v-btn
          >
        </div>
      </div>

      <div class="d-flex flex-column">
        <v-text>ما را در شبکه های اجتماعی دنبال کنید</v-text>
        <div class="d-flex ga-3">
          <v-btn
            v-for="icon in icons"
            :key="icon"
            :icon="icon"
            density="comfortable"
            variant="text"
          ></v-btn>
        </div>
      </div>
    </div>
    </v-container>
  </v-footer>

  <v-footer color="red-darken-2" style="font-size: 11px;">
    <v-container>
      <div class="d-flex ga-10">
<div class="d-flex flex-column ga-5 mx-16">
 <span class="text-decoration-underline mb-3">همراه با کاستومی</span>
 <span>فروش محصولات</span>
 <span>فرصت همکاری</span>
 <span>تماس باما</span>
 <span>نقشه سایت</span>

</div>

<div class="d-flex flex-column ga-5 mx-16">
 <span class="text-decoration-underline mb-3"> خدمات مشتریان </span>
 <span>سوالات متداول</span>
 <span>حریم خصوصی</span>
 <span>ثبت شکایت</span>
 <span>ضمانت نامه محصولات </span>

</div>

<div class="d-flex flex-column ga-5 mx-16">
 <span class="text-decoration-underline mb-3"> راهنمای خرید </span>
 <span>راهنمای ثبت سفارش </span>
 <span>شیوه های پرداخت </span>
 <span>نحوه ارسال سفارش ها </span>
 <span>شرایط بازگرداندن محصول </span>

</div>

<div class="d-flex flex-column ">
  <span style="font-size: 16px; font-weight: 900;" class="">فروشگاه اینترنتی کاستومی</span>
<div class="d-flex ga-5 mt-5">
  <span>تماس با پشتیبانی:</span>
  <span>۰۲۱-۳۴۵۶۰۰۰</span>
  <Span>پاسخگویی ۲۴ ساعته ، ۷ روز هفته </Span>
</div>

<div class="d-flex ga-5 mt-8">
  <v-img src="/images/01.png" max-width="50"></v-img>
  <v-img src="/images/02.png" max-width="50"></v-img>
  <v-img src="/images/03.png" max-width="50"></v-img>

</div>
</div>

</div>
    </v-container>
  </v-footer >
</template>
<script setup>
const icons = ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram']
</script>
