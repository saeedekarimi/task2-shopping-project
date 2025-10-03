<template>
  <v-card class="sale-card mt-3 mr-3" variant="outlined" max-width="392">
    <div class="d-flex flex-column justify-space-between mb-4">
      <v-card-title class="title align-start">کد تخفیف</v-card-title>
      <v-card-subtitle style="font-size: 9px; text-wrap: wrap"
        >کد تخفیف کد معرف کارت هدیه خود را در زیر وارد کرده و دکمه ثبت رو بزنید تا در صورت داشتن
        اعتبار به سفارش شما اعمال شود</v-card-subtitle
      >
      <div class="d-flex ga-3 mt-5 justify-center">
        <v-text-field
          type="text"
          variant="outlined"
          density="compact"
          dense
          width="240"
          class="custom-text-field"
        >
        </v-text-field>
        <v-btn class="submit-button pb-6 pt-2" text-center size="small" variant="outlined"
          ><span>ثبت</span></v-btn
        >
      </div>
      <v-divider :thickness="1" class="border-opacity-50"></v-divider>
    </div>

    <div style="font-size: 12px" class="d-flex flex-column ga-5">
      <div class="d-flex justify-space-between">
        <div class="d-flex flex-column">
          <span>قیمت کالاها</span>
          <span style="font-size: 10px; margin-top: 4px">تعداد کالا</span>
        </div>
        <span>240.000 تومان</span>
      </div>

      <div class="d-flex">
        <v-img src="/images/sale.png" max-width="24" class=""></v-img>
        <span> مجموع تخفیف روی کالا ها</span>

        <div class="mr-3">
          <span style="color: red">20.000 </span>
          <span>تومان</span>
        </div>
      </div>

      <div class="d-flex justify-space-between">
        <span>سود شما از خرید </span>
        <span>30.000 تومان</span>
      </div>
      <div class="d-flex justify-space-between">
        <span> هزینه ارسال</span>
        <span>50.000 تومان</span>
      </div>
      <v-divider :thickness="1" class="border-opacity-50"></v-divider>

      <div class="d-flex justify-space-between">
        <span> جمع مبلغ قابل پرداخت</span>
        <span>290.000 تومان</span>
      </div>

      <v-btn class="bg-red-darken-4 rounded">
        <span>ثبت سفارش</span>
        <v-icon>mdi mdi-chevron-left</v-icon>
      </v-btn>
    </div>
  </v-card>

  <v-card style="font-size: 12px" class="sale-card mt-3 mr-5 mb-16" variant="outlined">
    <v-icon size="x-large" color="amber-darken-1">mdi mdi-alert-circle-outline</v-icon>
    <ul class="mr-3 mt-5">
      <li>ارسال رایگان برای سفارش های بالای ۷۰۰.۰۰۰ تومن</li>
      <li>در صورت اتمام موجودی‌، کالاها از سبد خرید حذف میشوند.</li>
      <li>لطفا در طول مراحل خرید فیلتر شکن خود را خاموش کنید.</li>
    </ul>
  </v-card>
</template>

<script setup></script>

<style scoped>
.sale-card {
  border: 1px solid #eee;
  border-radius: 15px;
  padding: 1rem;
  max-width: 392px;
}

.title {
  font-weight: bold;
  font-size: 13px;
}

.submit-button {
  border: 1px solid #a72f3b;
  border-radius: 8px;
  color: #a72f3b;
  width: 80px;
  height: 40px;
}

:deep(.custom-text-field .v-field) {
  border-radius: 8px !important;
  border: 1px solid #fff !important;
  height: 40px;
}
</style>
