<template>
  <div class="d-flex ga-16 py-8">
    <v-img
      src="/public/images/frame.png"
      alt=""
      height="50"
      max-width="180"
      class="ma-0 pa-0"
    ></v-img>
    <!-- <input type="search" placeholder="جستجو"> -->
    <v-text-field
      max-width="600"
      class="border-sm border-solid rounded-xl pr-5 pl-5 pt-1"
      :loading="loading"
      density="compact"
      placeholder="جستجو"
      variant="plain"
      hide-details
      single-line
      @click:append-inner="onClick"
    >
      <template #append-inner>
        <img
          src="/images/search.png"
          alt="search"
          class="w-2 h-2 cursor-pointer"
          @click="$emit('searchClick')"
        />
      </template>
    </v-text-field>

    <v-btn variant="flat">
      <template #append>
        <v-img src="/images/login.png" width="24" height="24" class="ml-2"> </v-img>
        ورود | ثبت نام
      </template>
    </v-btn>

   <v-btn variant="flat">
      <template #append>
        <v-img src="/images/shopping.png" width="24" height="24" class="ml-2"> </v-img>
        سبد خرید
      </template>
    </v-btn>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const loaded = ref(false)
const loading = ref(false)

function onClick() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    loaded.value = true
  }, 2000)
}
</script>

<style lang="scss" scoped></style>
