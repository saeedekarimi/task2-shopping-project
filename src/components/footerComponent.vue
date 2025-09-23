<template>
  <v-footer class="text-center d-flex flex-column ga-2 py-4" color="red-darken-3">
<div class="d-flex  justify-space-between ga-16">
    <div class="d-flex flex-column pa-0 ma-0">
      <v-text class="">برای دریافت آخرین اخبار و تخفیف های جدید،ایمیل خود را وارد نمایید</v-text>
      <div class="d-flex ga-4 mt-4">
      <v-text-field
        type="email"
        max-width="600"
        placeholder="ایمیل شما"
        variant="plain"
        class="border-sm border-solid rounded-xl pr-5 "
      >
      </v-text-field>
      <v-btn size="x-large" 
      color="red-darken-2"
       rounded="lg"
        class="px-3"
                elevation="0"
        >ثبت</v-btn>
      </div>
    </div>
<!-- <v-divider  class="my-2" thickness="2" width="2"></v-divider> -->
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
    <v-divider class="my-2" thickness="2" width="50"></v-divider>

    <div class="text-caption font-weight-regular opacity-60">
    </div>

    <v-divider></v-divider>


  </v-footer>
</template>
<script setup>
  const icons = [
    'mdi-facebook',
    'mdi-twitter',
    'mdi-linkedin',
    'mdi-instagram',
  ]
</script>