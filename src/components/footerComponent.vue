<template>
  <v-footer color="red-darken-4">
    <div>
      <v-text>برای دریافت آخرین اخبار و تخفیف های جدید،ایمیل خود را وارد نمایید</v-text>
      <div class="d-flex ga-4">
      <v-text-field
        type="email"
        max-width="600"
        placeholder="ایمیل شما"
        variant="plain"
        class="border-sm border-solid  rounded-xl pr-5 pa-0"
      >
      </v-text-field>
      <v-btn size="x-large" color="red-darken-2" rounded="lg" class="px-3">ثبت</v-btn>
      </div>
    </div>
  </v-footer>
</template>

<script setup></script>

<style lang="scss" scoped></style>
