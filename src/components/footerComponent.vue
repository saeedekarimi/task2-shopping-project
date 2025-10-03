<template>
  <v-footer style="font-size: 11px; background-color: #641c23; color: #fff">
    <v-container>
      <div class="d-flex justify-space-between ma-8">
        <div class="d-flex flex-column pa-0 ma-0">
          <v-text class=""
            >برای دریافت آخرین اخبار و تخفیف های جدید،ایمیل خود را وارد نمایید</v-text
          >
          <div class="d-flex ga-4 mt-4">
            <v-text-field
              type="email"
              width="392"
              density="compact"
              placeholder="ایمیل شما"
              variant="outlined"
              class="custom-text-field"
            >
            </v-text-field>
            <v-btn
              style="background-color: #a72f3b; border-radius: 8px; width: 80px; height: 40px"
              class=""
              elevation="0"
              >ثبت</v-btn
            >
          </div>
        </div>

        <div class="d-flex flex-column align-center">
          <v-text>ما را در شبکه های اجتماعی دنبال کنید</v-text>
          <div class="d-flex">
            <v-btn
              v-for="icon in icons"
              :key="icon"
              :icon="icon"
              size="large"
              density="comfortable"
              variant="text"
              class="mt-5"
            ></v-btn>
          </div>
        </div>
      </div>
    </v-container>
  </v-footer>

  <v-footer style="font-size: 11px; background-color: #a72f3b; color: #fff" class="pb-16">
    <v-container>
      <div class="d-flex ga-10">
        <div class="d-flex flex-column ga-5 mx-16">
          <span
            class="text-decoration-underline mb-2"
            style="font-size: 14px; font-weight: bold; text-underline-offset: 10px"
            >همراه با کاستومی</span
          >
          <span>فروش محصولات</span>
          <span>فرصت همکاری</span>
          <span>تماس باما</span>
          <span>نقشه سایت</span>
        </div>

        <div class="d-flex flex-column ga-5 mx-16">
          <span
            class="text-decoration-underline mb-2"
            style="font-size: 14px; font-weight: bold; text-underline-offset: 10px"
          >
            خدمات مشتریان
          </span>

          <span>سوالات متداول</span>
          <span>حریم خصوصی</span>
          <span>ثبت شکایت</span>
          <span>ضمانت نامه محصولات </span>
        </div>

        <div class="d-flex flex-column ga-5 mx-16">
          <span
            class="text-decoration-underline mb-2"
            style="font-size: 14px; font-weight: bold; text-underline-offset: 10px"
          >
            راهنمای خرید
          </span>
          <span>راهنمای ثبت سفارش </span>
          <span>شیوه های پرداخت </span>
          <span>نحوه ارسال سفارش ها </span>
          <span>شرایط بازگرداندن محصول </span>
        </div>

        <div class="d-flex flex-column align-center">
          <span style="font-size: 16px; font-weight: 900" class="">فروشگاه اینترنتی کاستومی</span>
          <div class="d-flex ga-5 mt-7">
            <span>تماس با پشتیبانی:</span>
            <span>۰۲۱-۳۴۵۶۰۰۰</span>
            <Span>پاسخگویی ۲۴ ساعته ، ۷ روز هفته </Span>
          </div>

          <div class="d-flex ga-6 mt-16">
            <v-img src="/images/01.png" width="50"></v-img>
            <v-img src="/images/02.png" width="50"></v-img>
            <v-img src="/images/03.png" width="50"></v-img>
          </div>
        </div>
      </div>
    </v-container>
  </v-footer>
</template>
<script setup>
const icons = ['mdi-youtube', 'mdi-pinterest', 'mdi-facebook', 'mdi-instagram']
</script>

<style scoped>
:deep(.custom-text-field .v-field) {
  border-radius: 8px !important;
  border: 1px solid #fff !important;
}

:deep(.custom-text-field .v-field.v-field--focused) {
  border-color: #a72f3b !important;
}
</style>
